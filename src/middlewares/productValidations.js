const {body}= require('express-validator');
const path = require('path');

const validations = [
    body('name')
     .notEmpty().withMessage('Tienes que escribir un nombre').bail()
     .isLength({min:5}).withMessage('minimo 5 caracteres'),
     body('description')
     .notEmpty().withMessage('Tienes que añadir una descripción').bail()
     .isLength({min:20}).withMessage('minimo 20 caracteres'),
    body('price')
     .notEmpty().withMessage('Tienes que añadir un precio'),
    body('amount')
    .notEmpty().withMessage('Tienes que añadir una cantidad'),
    body('product').custom((value, { req }) => {
        let file = req.files[0];
        console.log(file);
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {       
                throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);  
            }               
        }
        return true;
    })
]

module.exports = validations;