const express = require('express');
const router = express.Router();
const multer = require('multer');
const {panelUsuario,login,register,storage, loginAccess, check} = require('../controllers/usersController');
const validations = require('../middlewares/registervalidations');
const loggedMiddleware = require('../middlewares/loggedMiddleware');
const folder = require('../middlewares/register');
const upload = multer({ storage: folder('users')}); 


router.get("/panelUsuario", panelUsuario);
router.get("/login", loggedMiddleware, login);
router.get("/register", loggedMiddleware, register);
router.get("/check", check);

router.post('/guardar', [upload.any()], validations, storage);
router.post('/acceder', loginAccess);

module.exports = router;