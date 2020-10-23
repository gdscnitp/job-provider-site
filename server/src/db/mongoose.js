const mongoose = require('mongoose');
require('dotenv').config();

// DataBase Connections
// mongoose
// 	.createConnection(process.env.WorkersDB, {
// 		useNewUrlParser: true,
// 		useCreateIndex: true,
// 		useFindAndModify: false,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => console.log(`Workers Database connected successfully`))
// 	.catch((err) => console.log(err));

mongoose
	.connect(process.env.MainDB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log(`Main Database connected successfully`))
	.catch((err) => console.log(err));
