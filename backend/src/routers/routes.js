const express = require('express');
const productRoutes =require('../controllers/productController');
const orderRouters =require('../controllers/orderController');
let router = express.Router();

router.use('/products', productRoutes);
router.use('/orders', orderRouters);

module.exports=router;