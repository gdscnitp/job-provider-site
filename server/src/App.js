const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const routes = require('../routes/api');
require('dotenv').config();

mongoose
	.connect(process.env.DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log(`Database connected successfully`))
	.catch((err) => console.log(err));

app.use(bodyParser.json());
app.use('/api', routes);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.listen(port, () => {
	console.log('Server is up on the port ' + port);
});
