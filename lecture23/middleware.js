const express = require("express")
const router = express.Router()

const Joi = require('joi')

const productSchema = Joi.object({
    name: Joi.string().min(3).required(),

    price: Joi.number().min(0).required(),


    image:  Joi.string().min(3).required(),

    description: Joi.string().min(10).required()
});

const productValidate = async(req,res,next)=>{
    const {name, price, image, description} = req.body;
    const  { error,value} = productSchema.validate( {name, price, image, description});

    if(error){
        console.log("there is some issue in input data");
        res.render('error',{msg:error});
    }else{
        next();
    }
}

module.exports = productValidate;

