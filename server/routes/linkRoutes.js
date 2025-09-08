const express = require("express");
const router = express.Router();
const linkModel = require("../models/linkModel");
const contentModel = require("../models/contentModel");
const userModel = require("../models/userModel");

// Create Link
router.post("/", async (req, res) => {
  try {
    const { share } = req.body;

    if (share !== true) {
      return res
        .status(400)
        .json({ message: "Invalid request. 'share' must be true." });
    }

    const existingLink = await linkModel.findOne({
      userId: req.userId,
    });

    if (existingLink) {
      return res.status(200).json({
        message: "Custom link already exists.",
        link: `/share/${existingLink.hash}`,
      });
    }

    const hash = Math.random().toString(36).substring(2, 10);
    const userId = req.user && req.user.id ? req.user.id : null;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized. User not found." });
    }
    const newLink = await linkModel.create({ hash, userId });
    newLink.save();

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

// get link
router.get("/:shareLink", async (req, res) => {
  const link = await linkModel.findOne({
    hash,
  });

  if (!link) {
    return res.status(404).json({ message: "Link not found." });
  }

  // userId
  const content = await contentModel.findOne({
    userId: link.userId,
  });

  const user = await userModel.findOne({
    _id: link.userId,
  });

  if (!content || !user) {
    return res.status(404).json({ message: "Error fetching content." });
  }

  return res.status(200).json({ username: user.username, content });
});

module.exports = router;
