const express = require('express');
const router = express.Router();
const path = require("path");
router.get("/",(req,res)=> res.sendFile(path.join(__dirname,'../views/home.html')));
router.get("/nosotros",(req,res)=> res.sendFile(path.join(__dirname,'../views/nosotros.html')));
router.get("/productDetail",(req,res)=> res.sendFile(path.join(__dirname,'../views/producDetail.html')));
module.exports = router;