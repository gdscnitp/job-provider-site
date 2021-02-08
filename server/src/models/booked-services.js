const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
	worker_name: {
		type: String,
		required: true,
	},
	customer_name: {
		type: String,
		required: true,
	},
	service_provided: {
		type: String,
		required: true,
	},
	// worker_contact: {
	// 	type: String,
	// 	required: true,
	// },
	customer_contact: {
		type: String,
		required: true,
	},
	date_for_booking: {
		type: String,
		required: true,
	},
	time_for_booking: {
		type: String,
		required: true,
	},
	cost_of_work: {
		type: Number,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	createdAt: {
		type: String,
		default: Date,
	},
});

const Service = mongoose.model("service", serviceSchema);

module.exports = Service;
