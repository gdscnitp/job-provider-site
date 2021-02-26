const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//feedback Schema

const FeedbackSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  review: String,
});

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type_of_work: {
    type: String,
    //  required: true,
    trim: true,
  },
  contact: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /\d{10}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    //  required: [true, "User phone number required"],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  cost_of_work: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Cost must be a postive number');
      }
    },
  },
  experience: {
    type: Number,
  },
  location: {
    type: String,
    //  required: true,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
  feedback: FeedbackSchema,

  /*confirm_password: {
        type: String,
        required: true
    },*/
  tokens: [
    {
      token: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
  avatar: {
    type: Buffer,
  },
});

workerSchema.methods.generateAuthToken = async function () {
  const worker = this;
  const token = jwt.sign({ _id: worker._id.toString() }, 'thisismynewcourse');

  // worker.tokens = worker.tokens.concat({ token });
  await worker.save();

  return token;
};

// Hash the plain text password before saving
workerSchema.pre('save', async function (next) {
  const worker = this;

  if (worker.isModified('password')) {
    worker.password = await bcrypt.hash(worker.password, 8);
  }

  next();
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;
