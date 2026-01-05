const express = require('express');
const { createOrder, getOrderById } = require('../controllers/orderController');
const router = express.Router();
const verifyFirebaseToken = require('../middleware/AuthMiddleware');

router.post('/', verifyFirebaseToken, createOrder); //protected
router.get('/:id', verifyFirebaseToken, getOrderById);
module.exports = router;