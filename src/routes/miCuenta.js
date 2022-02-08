const express = require('express');
const router = express.Router();
const {panelUsuario,login,register} = require('../controllers/miCuentaController');

router.get("/panelUsuario", panelUsuario);
router.get("/login", login);
router.get("/register", register);

module.exports = router;