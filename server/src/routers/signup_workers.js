const express = require("express");
const Worker = require("../models/signup_workers");
const router = new express.Router();
const ErrorHandler = require("./../helper/dberrorhandler")

var RateLimit = require("express-rate-limit");
var limiter = new RateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	max: 5,
});

//Get all the workers

//Public Route
//Get /workers
router.get("/workers", async (req, res) => {
	try {
		const workers = await Worker.find();
		res.status(200).json(workers);
	} catch (e) {
		res.status(500).send("Server Error");
	}
});

router.use(limiter);

router.post("/workers", async (req, res) => {
	// console.log("Hey");
	// console.log(req.body);
	const worker = new Worker(req.body);

	try {
		if (req.body.password !== req.body.confirm_password) {
			return res.status(400).send("Password does not match");
		}
		await worker.save();

		const token = await worker.generateAuthToken();
		//res.json(worker)
		res.status(201).send({ worker, token });
	} catch (e) {
		// console.log(e.message);
		let msg = ErrorHandler(e);
		res.status(400).send(msg);
	}
});

module.exports = router;
