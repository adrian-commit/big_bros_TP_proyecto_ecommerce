const path = require("path");

module.exports = {
 panelUsuario: (req,res)=> res.render('panelUsuario'),
        login: (req,res)=> res.render('login'),
     register: (req,res)=> res.render('register')
};