const {body}= require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('userName').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('telephone').notEmpty().withMessage('Tienes que escribir un número de teléfono válido'),
    body('birthDate').notEmpty().withMessage('Tienes que indicar una fecha'),
    body('address').notEmpty().withMessage('Tienes que escribir una dirección'),
    body('avatar').notEmpty().withMessage('')

]

module.exports = validations;