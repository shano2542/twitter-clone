import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    console.log('Cookies:', req.cookies);  // Debugging line
    const token = req.cookies.jwt;
    console.log('Token:', token);  // Debugging line

    if (!token) {
      return res.status(401).json({
        error: "Unauthorized: No Token Provided",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res.status(401).json({
        error: "Unauthorized: Invalid Token",
      });
    }

    const user = await User.findById(decode.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        error: "User Not Found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    return res.status(500).json({ error: "Internal Server Eerror" });
  }
};