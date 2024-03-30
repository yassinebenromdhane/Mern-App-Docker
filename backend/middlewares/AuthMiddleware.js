// Create a middleware to check if the user is logged in
//Path: Backend/middlewares/AuthMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");
// is Authenticated middleware
exports.isAuth = async (req, res, next) => {
  // Check if the token exists in the header
  if (!req.headers.authorization) {
    return res.status(403).send({
      message: "Invalid Token",
    });
  }
  // Get the token from the header (split the token from the Bearer)
  const token = req.headers.authorization.split(" ")[1];
  // Check if the token exists
  if (!token) {
    return res.status(403).send({
      message: "You are not connected",
    });
  }
  // Verify the token
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    // Check if the user exists
    const user = await User.findById(verified._id);
    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }
    // Save the user data in the request
    req.user = user;
    // Go to the next middleware
    next();
  } catch (err) {
    res.status(400).send({
      message: "Invalid Token",
    });
  }
};

// isAdmin middleware
exports.isAdmin = async (req, res, next) => {
  // Check if the user is admin
  if (req.user.roles !== "admin") {
    return res.status(403).send({
      message: "You are not authorized to access this page",
    });
  }
  // Go to the next middleware
  next();
};

// isBacker middleware
exports.isBacker = async (req, res, next) => {
  // Check if the user is backer
  if (req.user.roles !== "backer") {
    return res.status(403).send({
      message: "Access Denied",
    });
  }
  // Go to the next middleware
  next();
};

// isFounder middleware
exports.isFounder = async (req, res, next) => {
  // Check if the user is founder
  if (req.user.roles !== "founder") {
    return res.status(403).send({
      message: "Access Denied",
    });
  }
  // Go to the next middleware
  next();
};

// check if the user can see the email and username of the user he wants to update (if he is admin or the same user)
exports.canUpdate = async (req, res, next) => {
  // Check if the user is admin or the same user
  if (req.user.roles !== "admin" && req.user._id.toString() !== req.params.id) {
    return res.status(403).send({
      message: "Access Denied",
    });
  }
  // Go to the next middleware
  next();
};

// check if the user can see email
exports.canSeeEmail = async (req, res, next) => {
  // Check if the user is admin or the same user
  if (
    req.user.roles !== "admin" &&
    req.user.email.toString() !== req.params.email
  ) {
    return res.status(403).send({
      message: "Access Denied",
    });
  }
  // Go to the next middleware
  next();
};

// check if the user can see username
exports.canSeeUsername = async (req, res, next) => {
  // Check if the user is admin or the same user
  if (
    req.user.roles !== "admin" &&
    req.user.username.toString() !== req.params.username
  ) {
    return res.status(403).send({
      message: "Access Denied",
    });
  }
  // Go to the next middleware
  next();
};
