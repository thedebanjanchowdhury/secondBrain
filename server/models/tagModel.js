const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Tag", tagSchema);
