const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth").auth;
const Service = require("../models/booked-services");

router.use(express.json());

router.post("/service", auth, async (req, res) => {
	try {
		const service = new Service(req.body);
		service.customer_name = req.customer.name;
		service.customer_contact = req.customer.contact;
		await service.save().then((data) => res.json(data));
	} catch (err) {
		res.status(400).send(err);
	}
});

router.get("/services_given/:contactID", auth, async (req, res) => {
	try {
		const services = await Service.find({
			worker_contact: req.params.contactID,
		});
		res.send(services);
	} catch (error) {
		res.status(404).send(error);
	}
});

module.exports = router;
