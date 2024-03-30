const router = require("express").Router();
// import GoogleAuthController
const {
  googleAuthSuccess,
  googleAuthFailure,
  googleAuth,
  googleAuthCallback,
  googleLogout,
} = require("../controllers/GoogleAuthController");

// Route to check if the user is authenticated with Google
router.get("/login/success", googleAuthSuccess);
// Route to check if the user is not authenticated with Google
router.get("/login/failed", googleAuthFailure);
// Route to authenticate the user with Google
router.get("/google", googleAuth);
// Route to get the callback from Google
router.get("/google/callback", googleAuthCallback);
// Route to logout the user from Google
router.get("/logout", googleLogout);

module.exports = router;
