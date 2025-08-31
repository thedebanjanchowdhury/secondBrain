const mongoose = require("mongoose");
const contentTypes = ["image", "video", "article", "audio"];

const contentModel = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: {
    type: String,
    required: true,
    enum: contentTypes,
  },
  link: { type: String, required: true },
  title: { type: String, unique: true },
  tags: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Tag",
  },
});

module.exports = mongoose.model("Content", contentModel);
