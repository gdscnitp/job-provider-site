const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Service = require("../models/booked-services");

router.use(express.json());

router.route("/service").post(auth, async (req, res) => {
	const service = new Service(req.body);
	service.customer_name = req.customer.name;
	service.customer_contact = req.customer.contact;
	await service.save();
	// .then((data) => res.json(data));
});

module.exports = router;
