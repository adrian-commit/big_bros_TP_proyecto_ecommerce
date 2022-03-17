const {generate,create} = require('../models/users');
const {validationResult} = require('express-validator');
const path = require("path");

module.exports = {
 panelUsuario: (req,res)=> res.render('users/panelUsuario', {title: "Panel de Usuario"}),
        login: (req,res)=> res.render('users/login', {title: "Inicio de Sesion"}),
     register: (req,res)=> res.render('users/register', {title: "Registro"}),
     storage: (req,res) => {
      req.body.files = req.files;
      const nuevo = generate(req.body);
      create(nuevo);
      const resultVs = validationResult(req);
      console.log(resultVs);

      if(resultVs.errors.length > 0) {
         return res.render('users/register' , {
            errors: resultVs.mapped(),
            oldData: req.body
         });
      } else { 
         res.redirect('login');
      }
       
     }
}