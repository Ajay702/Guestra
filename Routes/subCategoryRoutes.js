const express = require('express');
const {
    createSubCategory,
    getAllSubCategories,
    getSubCategoriesByCategory,
} = require('../controllers/subCategoryController');

const router = express.Router();

router.post('/subcategories', createSubCategory);
router.get('/subcategories', getAllSubCategories);
router.get('/categories/:categoryId/subcategories', getSubCategoriesByCategory);

module.exports = router;
