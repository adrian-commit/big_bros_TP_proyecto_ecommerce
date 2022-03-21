const {generate,create,match} = require('../models/users');
const {validationResult} = require('express-validator');
const path = require("path");
const model = require('../models/users');

module.exports = {
 panelUsuario: (req,res)=> res.render('users/panelUsuario', {title: "Panel de Usuario"}),
        login: (req,res)=> res.render('users/login', {title: "Inicio de Sesion"}),
     register: (req,res)=> res.render('users/register', {title: "Registro"}),
     storage: (req,res) => {
      req.body.files = req.files;
      const resultVs = validationResult(req);
      
      let userInDb = model.match('email', req.body.email);

      if(userInDb) {
         return res.render('users/register' , {
            errors: {
               email: {
                  msg: 'Este email ya esta registrado'
               }
            },
            oldData: req.body
         });
      }

      if(resultVs.errors.length > 0) {
         return res.render('users/register' , {
            errors: resultVs.mapped(),
            oldData: req.body
         });
      } else {
         const nuevo = generate(req.body);
         create(nuevo); 
         res.redirect('login');
      }
   },

   loginAccess: (req,res) => {
      return res.send(req.body);
   }
}