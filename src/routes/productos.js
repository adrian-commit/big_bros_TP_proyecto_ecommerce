const express = require('express');
const router = express.Router();
const {productCar,productDetail} = require('../controllers/productosController');

router.get("/productCar", productCar);
router.get("/productDetail", productDetail);

module.exports = router;