const {Product,Category,Product_image} = require('../database/models');
const { Op } = require("sequelize");
const path = require("path");
const {validationResult} = require('express-validator');

module.exports = {

    productCar: (req,res) => res.render('products/productCar'),

    search: async (req, res) => {
     try {
         let {search} = req.query;
         let result = await Product.findAll({
             where: {
                 name: {[Op.like]:'%' + search + '%'}
             },
             include:['product_image','product_category']
         });
         return res.render('products/productDetail',{
            title:'Resultados',
            productos: result
          });
        } catch (error) {
            return res.render('error', {error: error});
        }
    }, 


    productDetail: async (req, res) => {
        try { 
            let all = await Product.findAll({include:{all:true}});
             return res.render('products/productDetail',{
                title:'Productos',
                productos: all
                });  
        } catch (error) {
            return res.render('error', {error: error});
        }
    },

    show: async (req, res) => {
        try {
            let producto = await Product.findByPk(req.params.id, {include:{all:true}});
             return res.render('products/show', {
                title: 'Producto', 
                producto: producto
            }); 
        } catch (error) {
            return res.render('error', {error: error});
        }
    },    

    
    create: async (req,res) => {
        try {
            res.render('products/create', {title: "Nuevo Producto"})
        } catch (error) {
            return res.render('error', {error: error});
        }
    },

    storage: async (req, res) => {
        try {
            const results = validationResult(req);
            if (results.errors.length > 0) {
                return res.render('products/create', {
                    errors: results.mapped(),
                    oldData: req.body
                })
            } else {
                let image = null;
            if(req.files && req.files.length > 0){
                image = await Product_image.create({
                    url: req.files[0].filename
                })
            }
            let newProduct = await Product.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                amount: req.body.amount,
                stock: req.body.stock,
                category: req.body.category,
                image: image != null ? image.id : image
            });
            return res.redirect('/productos/' + newProduct.id);
            }
        } catch (error) {
            return res.render('error', {error: error});
        }
    },


    update: async (req, res) => {
        try {
            let producto = await Product.findByPk(req.params.id, {include:{all:true}});
            return res.render('products/update', {
                title: 'Actualizando', 
                   producto: producto
               })
        } catch (error) {
            return res.render('error', {error: error});
        }
    },
    
    modify: async (req, res) => {
        try {
            const results = validationResult(req);
            if (results.errors.length > 0) {
                return res.render('products/create', {
                    errors: results.mapped(),
                    oldData: req.body
                })
            } else {
                let producto = await Product.findByPk(req.params.id);
                let image = null;
                
                if(req.files && req.files.length > 0 && producto.image != null){
                    await Product_image.update({
                        url: req.files[0].filename
                    }, {where:{
                        id: producto.image
                    }})
                    image = producto.image;
                };
                if(req.files && req.files.length > 0 && producto.image == null){
                    image = await Product_image.create({
                        url: req.files[0].filename
                    }) 
                    image = image.id;
                };
                if(producto.image){
                    image = producto.image
                }
                await producto.update({
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    amount: req.body.amount,
                    stock: req.body.stock,
                    category: req.body.category,
                    image: image 
                });
                return res.redirect('/productos/' + producto.id);
            }
            
        } catch (error) {
            return res.render('error', {error: error});
        }
    },

    trash: async (req,res) => {
        try {
            let productDelete = await Product.findByPk(req.body.id);
            await productDelete.destroy();
            return res.redirect('/productos/productDetail'); 
        } catch (error) {
            return res.render('error', {error: error});
        }
    }
};