const {productCar,search,productDetail,create,update,show,storage,modify,trash} = require('../controllers/productosController');
const express = require('express');
const router = express.Router();

//--MULTER config.--//
const multer = require('multer');
const folder = require('../middlewares/storage');
const upload = multer({ storage: folder('products')}); 

//--Middlewares--//
const productValidations = require('../middlewares/productValidations');


router.get("/productDetail", productDetail);
router.get("/productCar", productCar);
router.get('/nuevo', create);
router.get('/search', search);
router.get('/editar/:id', update);
router.get('/:id', show);

router.post('/guardar', [upload.any()], productValidations, storage);

router.put('/actualizar/:id', [upload.any()], productValidations, modify);

router.delete('/borrar', trash);


module.exports = router;