const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const recipeRoutes = require("./api/routes/recipes");

mongoose
  .connect(
    "mongodb+srv://sas450db:" +
      process.env.MONGO_ATLAS_PW +
      "@rest-ibewj.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .catch(error => console.log(error));

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handling Cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

//Routes which should handle requests
app.use("/recipes", recipeRoutes);

module.exports = app;
