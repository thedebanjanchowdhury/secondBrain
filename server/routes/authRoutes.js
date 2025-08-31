const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const userValidator = require("../validators/userValidator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const parse = userValidator.safeParse({ username, password });
    if (!parse.success)
      return res.status(400).json({ message: "Please Enter Valid Inputs" });

    const exists = await User.findOne({ username });
    if (exists)
      return res
        .status(403)
        .json({ message: "User already exists in this username" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
    });
    res.status(200).json({
      message: "User created",
      user: { id: user._id, username: user.username },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const parsed = userValidator.safeParse({ username, password });
  if (!parsed.success)
    return res
      .status(409)
      .json({ message: "Please enter valid username/password" });

  const user = await User.findOne({ username });
  if (!user)
    return res
      .status(403)
      .json({ message: "User does not exist, please signup" });

  const cnfPassword = await bcrypt.compare(password, user.password);
  if (!cnfPassword)
    return res.status(401).json({ message: "Incorrect password!" });

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return res.status(200).json({ message: "Logged In", token: token });
});

module.exports = router;
