const {Product,Category,Product_image} = require('../database/models');
const { Op } = require("sequelize");
const {list,all,filter,match,generate,create,update,trash, file} = require('../models/products');
const path = require("path");


module.exports = {
    productCar: (req,res)=> res.render('products/productCar'),


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
            let all = await Product_image.findAll();
            let newProduct = await Product.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                amount: req.body.amount,
                stock: req.body.stock,
                category: req.body.category,
                image: all.length + 1
            });
            let file = await req.files.map(file => file.filename);
            console.log(file);
            let newImage = await Product_image.create({
                url: file
            });      
            return res.send(newProduct);
        } catch (error) {
            return res.render('error', {error: error});
        }
    },

    /* storage: (req,res) => {
        //console.log(req.files);
        req.body.files = req.files;
        const nuevo = generate(req.body);
        create(nuevo);
        return res.redirect('/productos/'+nuevo.id);
    }, */

    update:(req, res) => {
        const {id} = req.params;
        let producto = id ? match('id', id) : null;
        return producto ? res.render('products/update', {
         title: 'Actualizando', 
            producto: producto
        }): res.render('error', {title:"Error", error:"No se encontró ningún producto"})
    },

modify:(req, res) => {
    req.body.files = req.files;
    update(req.body);
     return res.redirect('/productos/'+req.body.id);
},

trash:(req,res) => {
     trash(req.body.id);
     return res.redirect('/productos/productDetail'); 
 }
};