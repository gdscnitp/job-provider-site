const express = require("express");
const router = express.Router();
const multer = require("multer");
const sharp = require("sharp");
const Customer = require("../models/Customer");
const Worker = require("../models/signup_workers");
const auth = require("../middleware/auth").auth;
const passport = require("../middleware/auth").passport;
const bcrypt = require("bcryptjs");
const ErrorHandler = require('./../helper/dberrorhandler');

// Testing Purpose
// router.get('/signup_customer', (req, res) => {
// 	Customer.find({}).then((data) => res.json(data));
// });

var RateLimit = require("express-rate-limit");
var limiter = new RateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	max: 5,
});

router.use(limiter);

router.use(express.json());

/*
//route for customer googleoauth
router.get('/google/customer',passport.authenticate('googleTokenCustomer',{scope:['profile','email']}))

router.get('/oauth/google/customer',(req,res,next)=>{
	return passport.authenticate('googleTokenCustomer', { session: false }, (err, {token,user}={}) => {
     if(err) {
       return next(err);
     }
     if(user) {
   return res.status(200).send({token});
     }

     return res.status(400);
   })(req, res,next);

})
*/

/*
//route for worker googleoauth
router.get('/google/worker',passport.authenticate('googleTokenWorker',{scope:['profile','email']}))

router.get('/oauth/google/worker',(req,res,next)=>{
	return passport.authenticate('googleTokenWorker', { session: false }, (err, {token,user}={}) => {
	   if(err) {
       return next(err);
     }
     if(user) {
   return res.status(200).send({token});
     }

     return res.status(400);
   })(req, res,next);

})

*/

//login for customer
router.post("/login/customer", async (req, res) => {
	try {
		if (req.body.email) {
			const email = req.body.email;
			Customer.findOne(
				{ email: { $eq: email } },
				"email password",
				async (err, usr) => {
					if (!usr) {
						res.status(401).send("Email or password incorrect!");
					}
					bcrypt.compare(req.body.password, usr.password, async function (
						err,
						isMatch
					) {
						if (err) {
							res.status(400).send(err);
						}
						if (isMatch) {
							const token = await usr.generateAuthToken();
							res.status(200).send({ usr, token });
						}
						if (!isMatch) {
							res.status(401).send("Email or password incorrect!");
						}
					});
				}
			);
		} else {
			res.status(400).send();
		}
	} catch (e) {
		res.status(400).send(e);
	}
});

//login for worker
router.post("/login/worker", async (req, res) => {
	try {
		if (req.body.email) {
			const email = req.body.email;
			Worker.findOne(
				{ email: { $eq: email } },
				"name email password",
				async (err, usr) => {
					console.log(usr);
					if (!usr) {
						res.status(401).send("Email or password incorrect!");
					}

					bcrypt.compare(req.body.password, usr.password, async function (
						err,
						isMatch
					) {
						if (err) {
							res.status(400).send(err);
						}
						if (isMatch) {
							const token = await usr.generateAuthToken();
							res.status(200).send({ usr, token });
						}
						if (!isMatch) {
							res.status(401).send("Email or password incorrect!");
						}
					});
				}
			);
		} else {
			res.status(400).send();
		}
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post("/signupCustomer", async (req, res) => {
	console.log("Hi");
	const customer = new Customer(req.body);

	try {
		if (req.body.password !== req.body.confirm_password) {
			return res.status(400).send("Password does not match");
		}
		await customer.save();

		const token = await customer.generateAuthToken();
		//res.json(worker)
		res.status(201).send({ customer, token });
	} catch (e) {
		// console.log(Object.keys(e.errors));
		console.log(e.message);
		let msg = ErrorHandler(e);
		res.status(400).send(msg);
	}
});

router.patch("/customer/me", auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["name", "contact", "email", "location", "password"];
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	);

	if (!isValidOperation) {
		return res.status(400).send({ error: "Invalid updates!" });
	}

	try {
		updates.forEach((update) => (req.customer[update] = req.body[update]));
		await req.customer.save();

		res.send(req.customer);
	} catch (e) {
		res.status(400).send(e);
	}
});

const upload = multer({
	limits: {
		fileSize: 1000000,
	},
	fileFilter(req, file, cb) {
		if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
			return cb(new Error("Please upload an image"));
		}

		cb(undefined, true);
	},
});

router.post(
	"/customer/me/avatar",
	auth,
	upload.single("avatar"),
	async (req, res) => {
		const buffer = await sharp(req.file.buffer)
			.resize({ width: 250, height: 250 })
			.png()
			.toBuffer();
		req.customer.avatar = buffer;
		await req.customer.save();
		res.send();
	},
	(error, req, res, next) => {
		res.status(400).send({ error: error.message });
	}
);

router.delete("/customer/me/avatar", auth, async (req, res) => {
	req.customer.avatar = undefined;
	await req.customer.save();
	res.send();
});

router.get("/customer/:id/avatar", async (req, res) => {
	try {
		const customer = await Customer.findById(req.params.id);
		if (!customer || !customer.avatar) {
			throw new Error();
		}
		res.set("Content-Type", "image/png");
		res.send(customer.avatar);
	} catch (e) {
		res.status(404).send();
	}
});

// rate &  REVIEW route
router.post("/rate_review", auth, async (req, res) => {
	try {
		if (req.customer) {
			req.customer.feedback = {
				rating: req.body.rating,
				review: req.body.review,
			};
			await req.customer.save().then(() => {
				console.log("Added to customer database");
			});
		} else if (req.worker) {
			req.worker.feedback = {
				rating: req.body.rating,
				review: req.body.review,
			};
			await req.worker.save().then(() => {
				console.log("Added to worker database ");
			});
		}
		res.status(200).send();
	} catch (e) {
		res.status(400).send(e);
	}
});
module.exports = router;

router.patch("/worker/me", auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = [
		"name",
		"contact",
		"email",
		"location",
		"password",
		"cost_of_work",
		"type_of_work",
		"experience",
		"address",
	];
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	);

	if (!isValidOperation) {
		return res.status(400).send({ error: "Invalid update!" });
	}

	try {
		updates.forEach((update) => (req.worker[update] = req.body[update]));
		await req.worker.save();

		res.send(req.worker);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post(
	"/worker/me/avatar",
	auth,
	upload.single("avatar"),
	async (req, res) => {
		const buffer = await sharp(req.file.buffer)
			.resize({ width: 250, height: 250 })
			.png()
			.toBuffer();
		req.worker.avatar = buffer;
		await req.worker.save();
		res.send();
	},
	(error, req, res, next) => {
		res.status(400).send({ error: error.message });
	}
);

router.delete("/worker/me/avatar", auth, async (req, res) => {
	req.worker.avatar = undefined;
	await req.worker.save();
	res.send();
});

router.get("/worker/:id/avatar", async (req, res) => {
	try {
		console.log("Worker avatar");
		const worker = await Worker.findById(req.params.id);

		if (!worker || !worker.avatar) {
			throw new Error();
		}
		console.log("reached here");
		res.set("Content-Type", "image/png");
		res.send(worker.avatar);
	} catch (e) {
		res.status(404).send();
	}
});

module.exports = router;
