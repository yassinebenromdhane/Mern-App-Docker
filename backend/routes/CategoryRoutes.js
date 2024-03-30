const CategoriesController = require("../controllers/CategoriesController");
const router = require("express").Router();

// Apply middleware to check if the user is authenticated
const { isAdmin } = require("../middlewares/AuthMiddleware");

// Get all categories from the controller
router.get("/",/*isAdmin,*/ CategoriesController.getCategories);

// Get category by id from the controller
router.get("/:id", /*isAdmin,*/ CategoriesController.getCategoryById);

// Create category from the controller
router.post("/", /*isAdmin,*/ CategoriesController.createCategory);

// Update category by id from the controller
router.put("/:id", /*isAdmin,*/ CategoriesController.updateCategory);

// Delete category by id from the controller
router.delete("/:id", isAdmin, CategoriesController.deleteCategory);

// Export the router
module.exports = router;
