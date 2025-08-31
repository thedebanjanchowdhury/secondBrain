const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");
const contentValidator = require("../validators/contentValidator");
const Content = require("../models/contentModel");

// POST CONTENT
router.post("/", authMiddleware, async (req, res) => {
  try {
    const content = req.body;
    const parsed = contentValidator.safeParse(content);

    if (!parsed.success)
      return res.status(400).json({
        message: "Data format error, please insert right data",
        errors: parsed.error.errors,
      });

    const userContent = new Content({
      ...parsed.data,
      userId: req.user.id,
    });
    await userContent.save();
    return res
      .status(200)
      .json({ message: "Content added successfully", content: userContent });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
});

// FETCH ALL CONTENTS
router.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId)
      return res
        .status(401)
        .json({ message: "I'd not received, please login again" });

    const contents = await Content.find({ userId });
    if (!contents || contents.length === 0)
      return res.json({ message: "No content found☹️, add something!" });

    res.status(200).json({ contents });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Content Model Server Error", error: error.message });
  }
});

// DELETE CONTENT
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const contentId = req.params.id;
    const content = await Content.findOne({ _id: contentId, userId });
    if (!content)
      return res
        .status(404)
        .json({ message: "Id not found or content not yours" });

    await Content.deleteOne({ _id: contentId, userId });
    res.status(200).json({ message: "Content deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Delete Route Error", error: error.message });
  }
});

module.exports = router;
