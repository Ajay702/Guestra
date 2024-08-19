const express = require('express');
const { createItem, getAllItems, searchItemByName } = require('../controllers/itemController');

const router = express.Router();

router.post('/items', createItem);
router.get('/items', getAllItems);
router.get('/items/search', searchItemByName);

module.exports = router;
