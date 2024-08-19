const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

// Create a new sub-category under a category
exports.createSubCategory = async (req, res) => {
    try {
        const subCategory = new SubCategory(req.body);
        const category = await Category.findById(req.body.category);
        category.subCategories.push(subCategory._id);
        await subCategory.save();
        await category.save();
        res.status(201).json(subCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all sub-categories
exports.getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find().populate('items');
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get sub-categories under a specific category
exports.getSubCategoriesByCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId).populate('subCategories');
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json(category.subCategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Other CRUD operations...
