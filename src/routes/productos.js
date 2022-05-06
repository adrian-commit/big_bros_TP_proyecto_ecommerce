const express = require('express');
const router = express.Router();
const multer = require('multer');
const {productCar,search,productDetail,create,update,show,storage,modify,trash} = require('../controllers/productosController');
const folder = require('../middlewares/storage');
const upload = multer({ storage: folder('products')}); 


router.get("/productDetail", productDetail);
router.get("/productCar", productCar);
router.get('/nuevo', create);
router.get('/search', search);
router.get('/editar/:id', update);
router.get('/:id', show);

router.post('/guardar', [upload.any()], storage);

router.put('/actualizar', [upload.any()], modify);

router.delete('/borrar', trash);


module.exports = router;