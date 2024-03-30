const UserController = require("../controllers/UserController");
const router = require("express").Router();
// Apply middleware to check if the user is authenticated
const {
  isAuth,
  isAdmin,
  canUpdate,
  canSeeUsername,
  canSeeEmail,
} = require("../middlewares/AuthMiddleware");

// Register route for new users from the controller
router.post("/register", UserController.register);
// Login route for existing users from the controller
router.post("/login", UserController.login);
// Get all users from the controller
router.get("/", isAuth, isAdmin, UserController.getAllUsers);
// Get user by id from the controller
router.get("/:id", isAuth, canUpdate, isAdmin, UserController.getUserById);
// Get user by email from the controller
router.get("/email/:email", isAuth, canSeeEmail, UserController.getUserByEmail);
// Update Verified field 
router.put("/verify/:id", isAuth, isAdmin, UserController.updateIsVerified);
// Get user by username from the controller
router.get(
  "/username/:username",
  isAuth,
  canSeeUsername,
  UserController.getUserByUsername
);
// Update user by id from the controller
router.put("/:id", isAuth, canUpdate, isAdmin, UserController.updateUserById);
// Delete user by id from the controller
router.delete("/:id", isAuth, isAdmin, UserController.deleteUserById);


// Export the router
module.exports = router;
