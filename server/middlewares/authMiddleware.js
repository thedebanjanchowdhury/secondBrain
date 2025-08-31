const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json("Access Denied! No Token");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).json("No User Found");

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid Token" });
  }
}
