const express = require("express")
const router = express.Router();
const Review = require("../models/reviews")
router.post('/add-reviews/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        await Review.create({productId:id , ... req.body});
        res.redirect(`/product/detail/${id}`);
    }catch(err){
        console.log(err,"error occured during review post");
    }
})

module.exports = router;