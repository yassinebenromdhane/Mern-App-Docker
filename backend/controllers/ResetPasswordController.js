const User = require("../models/User");
const Token = require("../models/Token");
const sendEmail = require("../utils/sendEmail");
const generateEmailTemplate = require("../utils/generateEmailTemplate");
const crypto = require("crypto");
const Joi = require("joi");
const bcrypt = require("bcrypt");

// Function to send the password reset link to the user's email
exports.sendPasswordResetLink = async (req, res) => {
  try {
    const schema = Joi.object({ email: Joi.string().email().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(400).send({
        message: "User not found with email " + req.body.email + ".",
      });

    let token = await Token.findOne({ userId: user._id });
    if (!token) {
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const link = `http://localhost:3000/password-reset/${user._id}/${token.token}`;

    const email = generateEmailTemplate(user.fullName, link);

    await sendEmail(user.email, "Password Reset Instructions", email);

    res.status(200).send({
      message: "A password reset link has been sent to your email account.",
    });
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
};

// Function to verify the password reset link
exports.verifyPasswordLink = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    res.status(200).send({ message: "Link verified successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// Function to resend the user password

exports.resetPassword = async (req, res) => {
  try {
    const { userId, token } = req.params;

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(400).json({ message: "Invalid link" });
    }

    const tokenDoc = await Token.findOne({ userId, token });

    if (!tokenDoc) {
      return res.status(400).json({ message: "Invalid link" });
    }

    const newPassword = req.body.password;

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();
    await tokenDoc.deleteOne();

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
