const mongoose = require("mongoose");
const User = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      email: true,
    },
    password: {
      type: String,
      required: true,
      isPassword: true,
    },
    cin: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    birthdate: {
      type: String,
      required: true,
    },
    isVerified:{
      type: Boolean,
      default: false,
    },
    roles: {
      type: String,
      enum: ["backer", "founder", "admin"],
      default: "backer",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", User);
