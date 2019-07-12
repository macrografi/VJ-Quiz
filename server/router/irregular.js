const express = require("express");
const router = express.Router();

//user model
const Irregular = require("../model/irregular");

//post verbs
router.post("/add", async (req, res) => {
  let irregular = new Irregular(req.body);

  irregular.save((err, result) => {
    if (err) {
      return res.sendStatus(500).send({ message: err });
    }
    return res.sendStatus(200);
  });
});

//get verbs
router.get("/irregularverbs", async (req, res) => {
  let irregular = await Irregular.find({});
  res.send(irregular)
  // Irregular.find({}).then(res.send(irregular)).catch(err => res.status(500).json({ message: "Error", error: err }));
});

let irregularRoute = { router };
module.exports = irregularRoute;
