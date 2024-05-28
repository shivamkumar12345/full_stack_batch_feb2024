const mongoose = require("mongoose");

const user =new  mongoose.Schema({
    name: {type:String, required:true},
    comments:{type:String}
});
module.exports = new mongoose.model('User',user);
