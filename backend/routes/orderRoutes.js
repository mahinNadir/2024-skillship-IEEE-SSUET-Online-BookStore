const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderControllers');
const {protect} = require('../middleware/authmiddleware');

router.post('/order', protect, orderController.createOrder)//create order

router.get('/get/all/order', protect, orderController.getAllOrder)//get user order

module.exports = router;