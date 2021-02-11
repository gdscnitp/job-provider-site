const mongoose = require("mongoose");
require("dotenv").config();

mongoose
	.connect(process.env.MainDB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log(`Main Database connected successfully`))
	.catch((err) => console.log(err));

	// const db ='mongodb://localhost:27017/worklinkdb'
	// mongoose.connect(db,  {
	// 	useNewUrlParser: true,
	// 	useUnifiedTopology: true,
	// 	useCreateIndex: true
	// }).then(() => console.log('MongoDB Connected....'))
	// .catch(err => console.log(err));