const {body}= require('express-validator');
const path = require('path');

const validations = [
    body('firstName')
     .notEmpty().withMessage('Tienes que escribir un nombre').bail()
     .isLength({min:3}).withMessage('minimo 3 caracteres'),
     body('lastName')
     .notEmpty().withMessage('Tienes que escribir un Apellido').bail()
     .isLength({min:3}).withMessage('minimo 3 caracteres'),
    body('userName')
     .notEmpty().withMessage('Tienes que escribir un nombre de usuario').bail()
     .isLength({min:5,max:12}).withMessage('Tienes que escribir un usuario de entre 5 y 12 caracteres'),
    body('email')
     .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
     .isEmail().withMessage('Debes escribir un correo válido'),
    body('password')
     .notEmpty().withMessage('Tienes que escribir una contraseña').bail()
     .isLength({min:8}).withMessage('Tienes que escribir una contraseña de minimo 8 caracteres')
]

module.exports = validations;