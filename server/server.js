const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Test node api");
});

mongoose
  .connect(
    "mongodb+srv://root:bucketList1@bucketlist.vn7sm5e.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Node API is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
