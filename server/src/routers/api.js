const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// Testing Purpose
// router.get('/signup_customer', (req, res) => {
// 	Customer.find({}).then((data) => res.json(data));
// });

router.use(express.json());

router.post("/signup_customer", (req, res, next) => {
  Customer.create(req.body)
    .then((data) => console.log("SuccessFully Saved"))
    .catch(next);
});

module.exports = router;
