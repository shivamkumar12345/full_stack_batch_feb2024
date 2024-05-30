const mongoose = require("mongoose");

const review = new mongoose.Schema({
    rating:{
        type:Number,
        min:0,
        max:5,
        required:true
    },
    comments:{
        type:String
    },
    productId:{
        type: mongoose.Schema.ObjectId,
        ref: 'products',
        required:true
    }
})
module.exports = mongoose.model('Review', review);