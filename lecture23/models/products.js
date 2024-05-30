const mongoose = require("mongoose")

const product = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:0, 
    },
    images:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    stock: {type:Number},
    rating: {type:Number}

})

module.exports = new mongoose.model('Product',product);