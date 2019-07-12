const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let irregularSchema = new Schema({
  verb: { type: String, required: true },
  tense: { type: String, required: true },
  meaning: { type: String, required: true }
});

const Irregular = mongoose.model("Irregular", irregularSchema);
module.exports = Irregular;
