const express = require("express")
const Product = require('../models/products')
const Review = require('../models/reviews')
const router = express.Router();

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
         res.render('product-detail',{productDetail})
    }catch(err){
        console.log(err,"error occured during fetch of product detail");
    }
 })

router.get('/add-product',(req,res)=>{
    res.render('add-product');
}) 

router.post("/add-product",async(req,res)=>{
    console.log(req.body);
    try{
        await Product.create(req.body);
        res.redirect('/');

    }catch(err){
        console.log("err occured during insert new product");
    }
})
router.get('/add-review/:id',(req,res)=>{
    const productId = req.params.id;  
    res.render('reviews',{productId});
})
router.post('/add-reviews/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        console.log(req.body);
        await Review.create({productId:id , ... req.body});
        res.redirect('/');
    }catch(err){
        console.log(err,"error occured during review post");
    }
})

module.exports =  router;