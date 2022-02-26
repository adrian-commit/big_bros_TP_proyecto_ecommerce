const express = require('express');
const router = express.Router();
const {productCar,productDetail,create,update,show,storage,modify,trash} = require('../controllers/productosController');

router.get("/productDetail", productDetail);
router.get("/productCar", productCar);
router.get('/nuevo', create);
router.get('/editar/:id', update);
router.get('/:id', show);

router.post('/guardar', storage);

router.put('/actualizar', modify);

router.delete('/borrar', trash);


module.exports = router;