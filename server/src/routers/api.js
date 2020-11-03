const express = require("express");
const router = express.Router();
const multer = require('multer')
const sharp = require('sharp')
const Customer = require("../models/Customer");
const auth = require('../middleware/auth')

// Testing Purpose
// router.get('/signup_customer', (req, res) => {
// 	Customer.find({}).then((data) => res.json(data));
// });

var RateLimit = require('express-rate-limit');
var limiter = new RateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	max: 5,
});

router.use(limiter);

router.use(express.json());

router.post("/signup_customer", async (req, res) => {
    const customer = new Customer(req.body)

    try{
        const token = await customer.generateAuthToken();

        res.status(201).send({ customer, token });
    } catch (e) {
        res.status(400).send(e);
    }
});


router.patch('/customer/me', auth , async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name','contact', 'email','location', 'password']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {

      updates.forEach((update) => req.customer[update] = req.body[update])
      await req.customer.save()

      res.send(req.customer)
  } catch (e) {
      res.status(400).send(e)
  }
})

const upload = multer({
  limits: {
      fileSize: 1000000
  },
  fileFilter(req, file, cb) {
      if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          return cb(new Error('Please upload an image'))
      }

      cb(undefined, true)
  }
})

router.post('/customer/me/avatar',auth, upload.single('avatar'),async (req,res) => {
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
  req.customer.avatar = buffer
  await req.customer.save()
  res.send()
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message})
})

router.delete('/customer/me/avatar',auth,async (req,res) => {
  req.customer.avatar = undefined
  await req.customer.save()
  res.send()
})

router.get('/customer/:id/avatar', async (req, res) => {
  try {
      const customer = await Customer.findById(req.params.id)
      if (!customer || !customer.avatar) {
          throw new Error()
      }
      res.set('Content-Type', 'image/png')
      res.send(customer.avatar)
  } catch (e) {
      res.status(404).send()
  }
})

module.exports = router;
