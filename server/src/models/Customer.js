const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//feedback Schema

const FeedbackSchema = new Schema({
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  review: String,
});

//Schema for Employers
const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type_of_work: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  email: String,
  cost_of_work: Number,
  experience: String,
  location: {
    type: String,
    required: true,
  },
  address: String,
  password: String,
  feedback: FeedbackSchema,
});

const Customer = mongoose.model("customer", CustomerSchema);

module.exports = Customer;
