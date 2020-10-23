const express = require('express');
const router = express.Router();
const Customer = require('../modules/Customer');

//Testing Purpose
// router.get('/signup_customer', (req, res) => {
// 	Customer.find({}).then((data) => res.json(data));
// });

router.post('/signup_customer', (req, res, next) => {
	Customer.create({
		name: req.body.name,
		type_of_work: req.body.work,
		contact: req.body.contact,
		email: req.body.email,
		cost_of_work: req.body.cost,
		experience: req.body.experience,
		location: req.body.location,
		address: req.body.address,
		password: req.body.password,
	})
		.then((data) => res.json(data))
		.catch(next);
});

module.exports = router;
