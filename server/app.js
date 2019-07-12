const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.port || 3000;
const cors = require("cors");

//user route
const irregular = require("./router/irregular");

const db = mongoose.connect(
  "mongodb://localhost:27017/Irreggular",
  {
    useNewUrlParser: true
  },
  err => {
    if (!err) {
      console.log("Connected to DB");
    }
  }
);


app.use(bodyParser.json());
app.use(cors());
app.use(irregular.router);

app.listen(port, () => {
  console.log("Gulp is running PORT : " + port);
});
