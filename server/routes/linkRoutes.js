const express = require("express");
const router = express.Router();
const linkModel = require("../models/linkModel");

// Create Link
router.post("/", async (req, res) => {
  try {
    const { share } = req.body;

    if (share !== true) {
      return res
        .status(400)
        .json({ message: "Invalid request. 'share' must be true." });
    }
    const hash = Math.random().toString(36).substring(2, 10);
    const userId = req.user && req.user.id ? req.user.id : null;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized. User not found." });
    }
    const newLink = await linkModel.create({ hash, userId });

    return res.status(201).json({
      message: "Custom link created successfully.",
      link: `/share/${hash}`,
      hash: hash,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
});
