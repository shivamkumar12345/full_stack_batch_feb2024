const mongoose = require("mongoose");
const products = require("./models/products");
mongoose.connect("mongodb://127.0.0.1:27017/dbshopping")
.then(()=>{
    console.log("database connected succesfully");
})
.catch(err=>{
    console.log(err, "error occured during connection");
});

module.exports = products;
