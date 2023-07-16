const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Test node api");
});

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Node API is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
