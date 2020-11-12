const mongoose = require("mongoose");
require("dotenv").config();

mongoose
	.connect(MainDB = "mongodb+srv://dscnitp_webdept_worklink:dscnitp_webdept_worklink@cluster0.glrlk.gcp.mongodb.net/worklinkDB?retryWrites=true&w=majority", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log(`Main Database connected successfully`))
	.catch((err) => console.log(err));
