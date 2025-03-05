const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Create Category
router.post('/', categoryController.createCategory);

// Get All Categories
router.get('/', categoryController.getAllCategories);

// Update Category
router.put('/:id', categoryController.updateCategory);

// Get Category by ID
router.get('/:id', categoryController.getCategoryById);

// Delete Category
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
