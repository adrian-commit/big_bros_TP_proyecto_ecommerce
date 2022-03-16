const express = require('express');
const router = express.Router();
const multer = require('multer');
const {panelUsuario,login,register,storage} = require('../controllers/usersController');
const validations = require('../middlewares/registervalidations');
const folder = require('../middlewares/register');
const upload = multer({ storage: folder('users')}); 


router.get("/panelUsuario", panelUsuario);
router.get("/login", login);
router.get("/register", register);

router.post('/guardar', [upload.any()], validations, storage);

module.exports = router;