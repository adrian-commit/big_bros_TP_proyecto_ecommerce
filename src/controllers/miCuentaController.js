const path = require("path");

module.exports = {
 panelUsuario: (req,res)=> res.render('users/panelUsuario'),
        login: (req,res)=> res.render('users/login'),
     register: (req,res)=> res.render('users/register')
};