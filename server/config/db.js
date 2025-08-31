const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {
  mongoose.connect(process.env.MONGODB_URI).then(console.log("DB Connected"));
}

module.exports = connectDB;
