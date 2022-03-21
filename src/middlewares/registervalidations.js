const {body}= require('express-validator');
const path = require('path');

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('userName').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    body('email')
     .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
     .isEmail().withMessage('Debes escribir un correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('telephone').notEmpty().withMessage('Tienes que escribir un número de teléfono válido'),
    body('birthDate').notEmpty().withMessage('Tienes que indicar una fecha'),
    body('address').notEmpty().withMessage('Tienes que escribir una dirección'),
    /*body('avatar').custom((value, { req }) => {
        let file = req.files;
        console.log(file);
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {       
                throw new Error('Las extensiones permitidas son ${acceptedExtensions.join(', ')}');
            }               
        }
        return true;
    })
    */
]

module.exports = validations;