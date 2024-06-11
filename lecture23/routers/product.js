const express = require("express")
const Product = require('../models/products')
const Review = require('../models/reviews')
const router = express.Router();

const productValidate = require("../middleware");

router.get('/',async(req,res)=>{
    try{
        const products = await Product.find();
        console.log(products);
        res.render('index',{products})
    }catch(err){
        console.log(err,"error occured during render index.ejs");
    }
})

router.get('/product/detail/:id',async(req,res)=>{
    const {id} = req.params;
    try{
         const productDetail = await Product.findById(id);

         const reviews =  await Review.find({productId:id});
        
         res.render('product-detail',{productDetail,reviews})
    }catch(err){
        console.log(err,"error occured during fetch of product detail");
    }
 })

router.get('/add-product',(req,res)=>{
    res.render('add-product');
}) 

router.post("/add-product",productValidate,async(req,res)=>{

    console.log(productValidate);
    console.log(req.body);
    try{
        await Product.create(req.body);
        res.redirect('/');

    }catch(err){
        console.log("err occured during insert new product");
    }
})


module.exports =  router;