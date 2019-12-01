const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  contributors: { type: String, required: true, default: "Joseph Edward" },
  description: String,
  date: { type: Date, default: Date.now }
});

const project = mongoose.model("project", projectSchema);

module.exports = project;
