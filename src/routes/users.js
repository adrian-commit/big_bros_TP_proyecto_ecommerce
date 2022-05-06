const {panelUsuario,login,register,storage, loginAccess,logout} = require('../controllers/usersController');
const express = require('express');
const router = express.Router();

/---multer config.---/
const multer = require('multer');
const folder = require('../middlewares/register');
const upload = multer({ storage: folder('users')});

/---middlewares---/
const validations = require('../middlewares/registervalidations');
const loggedMiddleware = require('../middlewares/loggedMiddleware');
const authMiddleware = require('../middlewares/authMiddleware'); 



/---rutas GET---/
router.get("/panelUsuario", authMiddleware, panelUsuario);
router.get("/login", loggedMiddleware, login);
router.get("/register", loggedMiddleware, register);
router.get("/logout", logout);

/---rutas POST---/
router.post('/guardar', [upload.any()], validations, storage);
router.post('/acceder', loginAccess);

module.exports = router;