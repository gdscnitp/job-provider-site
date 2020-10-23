const express = require('express');
const Worker = require('../models/signup_workers');
const router = new express.Router();

router.post('/workers', async (req, res) => {
	const worker = new Worker(req.body);

	try {
		if (req.body.password !== req.body.confirm_password) {
			return res.status(400).send('Password does not match');
		}
		await worker.save().then(() => console.log('Successfully Done'));

		const token = await worker.generateAuthToken();
		//res.json(worker)
		res.status(201).send({ worker, token });
	} catch (e) {
		res.status(400).send(e);
	}
});

module.exports = router;
