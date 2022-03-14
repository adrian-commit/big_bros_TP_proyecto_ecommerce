const {filter,all} = require("../models/products");
const path = require("path");

module.exports = {
    home: (req, res) =>{
        const {search} = req.query;
        return search ? res.render ('home', {
            title:'Search |'+search, 
            productos:filter('name', search)
            }) : res.render ('home', {
                title:'Home',
                productos:all()
            })
    },
    nosotros: (req,res)=> res.render('nosotros', {title: "Nosotros"})
};