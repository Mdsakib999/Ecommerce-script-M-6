const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const verifyFirebaseToken = require('../middleware/AuthMiddleware');
const isAdmin = require('../middleware/isAdmin');
const upload = require('../middleware/uploadMiddleware');

router.get('/', getProducts);

// Admin routes
router.route('/:id')
    .get(getProductById)
    .put(verifyFirebaseToken, isAdmin, upload.single('image'), updateProduct)
    .delete(verifyFirebaseToken, isAdmin, deleteProduct)

router.post('/', verifyFirebaseToken, isAdmin, upload.single('image'), createProduct);

module.exports = router;