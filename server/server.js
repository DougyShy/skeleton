/*import express from "express";
const app = express();

import path from "path";
const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

import template from "./../template";
app.get("/", (req, res) => {
  res.status(200).send(template());
});

let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});

import { MongoClient } from "mongodb";
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/skeleton";
MongoClient.connect(url, (err, db) => {
  console.log("Connected successfully to mongodb server");
  db.close();
});

import config from "./../config/config";
import app from "./express";
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"));
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});*/

import config from "./../config/config";
import app from "./express";
import mongoose from "mongoose";

// Connection URL
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/yourDatabaseName", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
