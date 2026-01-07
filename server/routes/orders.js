const express = require('express');
const { createOrder, getOrderById, getAllOrders, updateToDelivered } = require('../controllers/orderController');
const router = express.Router();
const verifyFirebaseToken = require('../middleware/AuthMiddleware');
const isAdmin = require('../middleware/isAdmin');

router.post('/', verifyFirebaseToken, createOrder); //protected
router.get('/', verifyFirebaseToken, isAdmin, getAllOrders); // Admin only
router.put('/:id/deliver', verifyFirebaseToken, isAdmin, updateToDelivered); // Admin only
router.get('/:id', verifyFirebaseToken, getOrderById);
module.exports = router;