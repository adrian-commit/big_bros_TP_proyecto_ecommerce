const {panelUsuario,login,register,storage, loginAccess,logout, comments, createComment, listComments} = require('../controllers/usersController');
const express = require('express');
const router = express.Router();

/---multer config.---/
const multer = require('multer');
const folder = require('../middlewares/register');
const upload = multer({ storage: folder('users')});

/---middlewares---/
const registervalidations = require('../middlewares/registervalidations');
const loggedMiddleware = require('../middlewares/loggedMiddleware');
const authMiddleware = require('../middlewares/authMiddleware'); 



/---rutas GET---/
router.get("/panelUsuario", authMiddleware, panelUsuario);
router.get("/login", loggedMiddleware, login);
router.get("/register", loggedMiddleware, register);
router.get("/logout", logout);
router.get("/comments", authMiddleware, comments);
router.get("/listComments", listComments);

/---rutas POST---/
router.post('/guardar', [upload.any()], registervalidations, storage);
router.post('/acceder', loginAccess);
router.post('/createComment', createComment);

module.exports = router;