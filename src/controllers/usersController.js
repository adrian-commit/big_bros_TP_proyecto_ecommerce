const {generate,create,match} = require('../models/users');
const {User, User_image, Comment} = require('../database/models');
const {validationResult, body} = require('express-validator');
const {hashSync, compareSync} = require('bcrypt');
const path = require("path");
const model = require('../models/users');
const session = require('express-session');

module.exports = {

   login: (req,res)=> res.render('users/login', {title: "Inicio de Sesion"}),
   
   register: (req,res)=> res.render('users/register', {title: "Registro"}),
     
   
   storage: async (req, res) => {
      try {
      /* req.body.files = req.files; */
      const resultVs = validationResult(req);
      let userInDb = await User.findAll({where:{email: req.body.email}});
      if(userInDb != "") {
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
         await User.create({
            first_name: req.body.firstName,
            last_name:req.body.lastName,
            user_name:req.body.userName,
            email:req.body.email,
            password: hashSync(req.body.password, 10),
         });
         res.render('users/login', {title: "Inicio de Sesion"});
      }
      } catch (error) {
         return res.render('error', {error});
      }
   },
   
   loginAccess: async (req,res) => {
      try {
         let userLogin = await User.findOne({where:{email: req.body.email}});
         if(userLogin){
            let userPassword = compareSync(req.body.password, userLogin.password); 
            
            if(userPassword) {
               delete userLogin.password;
               req.session.userLogged = userLogin;
               
            if(req.body.recordarme) {
               res.cookie('email', req.body.email, {
                  maxAge: (1000 * 60) *2
               })
            }

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
               msg: 'Email no registrado'
            }
         }
      });
      } catch (error) {
         return res.render('error', {error});
      }
   },

   panelUsuario: (req,res)=> {
      res.render('users/panelUsuario', {
         title: "Panel de Usuario",
         user: req.session.userLogged
      })
      console.log(req.session.userLogged);
   },

   logout: (req, res) => {
      req.session.destroy();
      return res.redirect('/');
   },

   comments: (req, res) => {
      return res.render('users/comments', {
         title: "Comentario",
         user: req.session.userLogged
      })
   },

   createComment: async (req, res) => {
      try {
         let comment = await Comment.create({
            title: req.body.title,
            comment: req.body.comment,
            userId: req.body.userId
         });
         return res.redirect("panelUsuario");
      } catch (error) {
         return res.render('error', {error});
      }
   },

   listComments: async (req, res) => {
      try {
         let comment = await Comment.findAll({include:{all:true}});
         return res.send(comment);
      } catch (error) {
         return res.render('error', {error});
      }
   }

   
}