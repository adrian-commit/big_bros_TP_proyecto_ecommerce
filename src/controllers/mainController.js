const {filter,all} = require("../models/products");
const path = require("path");

module.exports = {
    home: (req, res) =>{
        const {search} = req.query;
        return search ? res.render ('products/productDetail', {
            title:'Search |'+search, 
            productos:filter('name', search)
            }) : res.render ('home', {
                title:'Product List', 
                productos:all()
            })
    },
    nosotros: (req,res)=> res.render('nosotros')
};