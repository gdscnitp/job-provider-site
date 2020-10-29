const express = require("express");
const app = express();
const workerRouter = require("./routers/signup_workers");
const routes = require("./routers/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./db/mongoose");
require("dotenv").config();

// Creating Express App

app.use(bodyParser.json());
app.use("/api", routes);
app.use(workerRouter);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("Server is up on the port " + port);
});
