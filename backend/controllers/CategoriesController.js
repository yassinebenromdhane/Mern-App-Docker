const Category = require("../models/Category");

// Get all categories
exports.getCategories = async (req, res) => {
  await Category.find()
    .then((categories) => {
      res.status(200).send(categories).populate("campaigns");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories.",
      });
    });
};

// Get category by id
exports.getCategoryById = async (req, res) => {
  await Category.findById(req.params.id)
    .then((category) => {
      if (!category) {
        return res.status(404).send({
          message: "Category not found with id " + req.params.id,
        });
      }
      res.status(200).send(category);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Category not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving category with id " + req.params.id,
      });
    });
};

// Create category
exports.createCategory = async (req, res) => {
  const category = new Category(req.body);
  try {
    const savedCategory = await category.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Update category
exports.updateCategory = async (req, res) => {
  const category = req.body;
  try {
    await Category.findByIdAndUpdate(req.params.id, category);
    res.status(200).json({ message: "Category updated successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Delete category
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
