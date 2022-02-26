const {list,all,filter,match,generate,create,update,trash} = require('../models/products');
const path = require("path");

module.exports = {
    productCar: (req,res)=> res.render('products/productCar'),
 productDetail: (req, res) =>{
    const {search} = req.query;
    return search ? res.render ('products/productDetail', {
        title:'Search |'+search, 
        productos:filter('name', search)
        }) : res.render ('products/productDetail', {
            title:'Product List', 
            productos:all()
        })
},
show: (req, res) => {
    const {id} = req.params;
    let producto = id ? match('id', id) : null;
    return producto ? res.render('products/show', {
        title: 'Producto', 
        producto: producto
    }) : res.render('error', {title:"Error", error:"No se encontró ningún producto"})
},
create: (req,res)=> res.render('products/create', {title: "Nuevo Producto"}),
storage: (req,res) => {
    const nuevo = generate(req.body);
    create(nuevo);
    return res.redirect('/productos/'+nuevo.id);
},
update:(req, res) => {
    const {id} = req.params;
    let producto = id ? match('id', id) : null;
    return producto ? res.render('products/update', {
        title: 'Actualizando', 
        producto: producto
    }) : res.render('error', {title:"Error", error:"No se encontró ningún producto"})
},
modify:(req, res) => {
    update(req.body);
     return res.redirect('/productos/'+req.body.id);
},
trash:(req,res) => {
     trash(req.body.id);
     return res.redirect('/productos/productDetail'); 
 }
};