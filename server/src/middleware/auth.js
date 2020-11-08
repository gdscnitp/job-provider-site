const jwt = require('jsonwebtoken')
const Customer = require('../models/Customer')
const Worker = require('../models/signup_workers')

const auth = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded  = jwt.verify(token, process.env.JWT_SECRET)
        const customer = await Customer.findOne({_id: decoded._id, 'tokens.token': token})
        if(customer)
        {
          req.token = token
          req.customer = customer
          next()
        }
        if(!customer) {
            const worker = await Worker.findOne({_id: decoded._id, 'tokens.token':token});
            if(!worker)
            {
              throw new Error();
            }
            req.token = token;
            req.worker = worker;
            next();
        }


    }
    catch (e) {
        res.status(401).send({error: 'Please authenticate'})
    }
}

module.exports = auth
