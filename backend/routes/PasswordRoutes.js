const router = require("express").Router();

// imaport PasswordController
const {
  sendPasswordResetLink,
  verifyPasswordLink,
  resetPassword,
} = require("../controllers/ResetPasswordController");

router.post("/", sendPasswordResetLink);

router.get("/:userId/:token", verifyPasswordLink);

router.post("/:userId/:token", resetPassword);




module.exports = router;
