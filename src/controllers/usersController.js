const {generate,create,match} = require('../models/users');
const {validationResult, body} = require('express-validator');
const {compareSync} = require('bcrypt');
const path = require("path");
const model = require('../models/users');
const session = require('express-session');

module.exports = {

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
      let userLogin = model.match('email', req.body.email);
     

      if(userLogin){
         let userPassword = compareSync(req.body.password, userLogin.password); 
         if(userPassword) {
            delete userLogin.password;
            req.session.userLogged = userLogin;
            return res.redirect('panelUsuario');
         }
         return res.render('users/login', {
            errors: {
               email: {
                  msg: 'Las credenciales son invalidas.'
               }
            }
         });
      }
      return res.render('users/login', {
         errors: {
            email: {
               msg: 'Este email no esta registrado'
            }
         }
      });
   },

   panelUsuario: (req,res)=> {
      console.log(req.session);
      res.render('users/panelUsuario', {
         title: "Panel de Usuario",
         user: req.session.userLogged
      })
   },

   check: (req, res) => {
      if(req.session.userLogged == undefined) {
         res.send('no estas logueado')
      } else {
         res.send('el usuario logueado es' + req.session.userLogged.email);
      }
   }
}