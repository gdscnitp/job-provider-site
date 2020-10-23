const mongoose = require('mongoose');
require('dotenv').config();

mongoose
	.connect(process.env.MainDB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log(`Main Database connected successfully`))
	.catch((err) => console.log(err));
