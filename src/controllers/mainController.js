const {Product,Category,Product_image} = require('../database/models');
const { Op } = require("sequelize");
const {filter,all} = require("../models/products");
const path = require("path");
const { productCar } = require('./productosController');

module.exports = {

    search: async (req, res) => {
        try {
            let {search} = req.query;
            let result = await Product.findAll({
                where: {
                    name: {[Op.like]:'%' + search + '%'}
                },
                include:['product_image','product_category']
            });
            return res.render('home',{
               title:'Resultados',
               productos: result
             });
           } catch (error) {
               return res.render('error', {error: error});
           }
       },

    home: async (req, res) =>{
         try {
            let all = await Product.findAll({include:{all:true}}); 
            res.render ('home', {
                title:'Home',
                productos:all
            })
         } catch (error) {
            return res.render('error', {error});
         }
    },

    nosotros: (req,res)=> res.render('nosotros', {title: "Nosotros"})
};