const {generate,create} = require('../models/users');
const path = require("path");

module.exports = {
 panelUsuario: (req,res)=> res.render('users/panelUsuario', {title: "Panel de Usuario"}),
        login: (req,res)=> res.render('users/login', {title: "Inicio de Sesion"}),
     register: (req,res)=> res.render('users/register', {title: "Registro"}),
     storage: (req,res) => {
      console.log(req.body);
      console.log(req.files);
      req.body.files = req.files;
      const nuevo = generate(req.body);
      create(nuevo);
      return res.redirect('login');
     }
}