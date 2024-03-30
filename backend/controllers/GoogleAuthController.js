const passport = require("passport");


// Function to check if the user is authenticated with Google
exports.googleAuthSuccess = (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
};

// Function to check if the user is not authenticated with Google
exports.googleAuthFailure = (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
};
// Function to authenticate the user with Google
exports.googleAuth = passport.authenticate("google", ["profile", "email"]);
// Function to get the callback from Google
exports.googleAuthCallback = passport.authenticate("google", {
  successRedirect: process.env.GOOGLE_OAUTH_CLIENT_ID,
  failureRedirect: "/login/failed",
});
// Function to logout the user from Google
exports.googleLogout = (req, res) => {
  req.logout();
  res.redirect(process.env.GOOGLE_OAUTH_CLIENT_ID);
};
