const jwt = require('jsonwebtoken');
const Customer = require('../models/Customer');
const Worker = require('../models/signup_workers');
const passport = require('passport');
const GoogleOAuth20 = require('passport-google-oauth20');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const customer = await Customer.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });
    console.log(token);
    if (customer) {
      req.token = token;
      req.customer = customer;
      next();
    }
    if (!customer) {
      const worker = await Worker.findOne({
        _id: decoded._id,
        'tokens.token': token,
      });
      if (!worker) {
        throw new Error();
      }
      req.token = token;
      req.worker = worker;
      next();
    }
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

/*
passport.use('googleTokenCustomer',new GoogleOAuth20({
  clientID:process.env.GoogleClientID,
  clientSecret:process.env.GoogleAuthSecret,
  callbackURL:'/oauth/google/customer'
},async(accessToken,refreshToken,profile,done)=>{
    const existingUser= await Customer.findOne({"email":profile.emails[0].value})
    if(existingUser){
      const token  =await existingUser.generateAuthToken();
      return done(null,{token:token,user:existingUser});
    }else {

      const customer = new Customer({name:profile.displayName,email:profile.emails[0].value})

      try{
            const token = await customer.generateAuthToken();
            return done(null,{token:token,user:customer});
      } catch (e) {
            return done(e,{});
      }
}
}));

passport.use('googleTokenWorker',new GoogleOAuth20({
  clientID:process.env.GoogleClientID,
  clientSecret:process.env.GoogleAuthSecret,
  callbackURL:'/oauth/google/worker'
},async(accessToken,refreshToken,profile,done)=>{
    const existingUser= await Worker.findOne({"email":profile.emails[0].value})
    console.log(existingUser);

    if(existingUser){
        const token  =await existingUser.generateAuthToken();
        return done(null,{token:token,user:existingUser});
    }else {

      const worker = await new Worker({name:profile.displayName,email:profile.emails[0].value})

      try{
            const token = await worker.generateAuthToken();
console.log(worker,token);
            return done(null,{token:token,user:worker});
      } catch (e) {
        return done(e,{});
      }
}
}));


*/
module.exports = { auth };
