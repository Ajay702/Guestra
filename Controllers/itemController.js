const Item = require('../models/Item');
const SubCategory = require('../models/SubCategory');

// Create a new item under a sub-category or category
exports.createItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        const subCategory = await SubCategory.findById(req.body.subCategory);
        subCategory.items.push(item._id);
        await item.save();
        await subCategory.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Search for an item by name
exports.searchItemByName = async (req, res) => {
    try {
        const items = await Item.find({ name: { $regex: req.query.name, $options: 'i' } });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Other CRUD operations...
