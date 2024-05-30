const express = require("express");
const app = express();
const path = require("path")
const router= require('./routers/product')
const products = require('./db')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));

// const dummydata = [
//     {
//         "name": "Wireless Bluetooth Headphones",
//         "description": "High-quality wireless headphones with noise cancellation and long battery life.",
//         "price": 89.99,
//         "category": "Electronics",
//         "stock": 120,
//         "rating": 4.5,
//         "images":"https://images-cdn.ubuy.co.in/63ec2ab159725522bb0a8433-prtukyt-6s-wireless-bluetooth-headphones.jpg",
//     },
//     {
//         "name": "Men's Running Shoes",
//         "description": "Comfortable and durable running shoes designed for optimal performance.",
//         "price": 59.99,
//         "category": "Fashion",
//         "stock": 200,
//         "rating": 4.2,
//         "images": "https://images-cdn.ubuy.co.in/646c9ba2b4780d45967df7e8-motast-smart-watch-2023-watches-for-men.jpg",
//     },
//     {
//         "name": "Smartwatch with Fitness Tracker",
//         "description": "Multifunctional smartwatch with fitness tracking, heart rate monitor, and GPS.",
//         "price": 129.99,
//         "category": "Wearables",
//         "stock": 85,
//         "rating": 4.7,
//         "images":"https://example.com/images/smartwatch2.jpg"
//     },
//     {
//         "name": "Electric Kettle",
//         "description": "Fast-boiling electric kettle with automatic shut-off and stainless steel body.",
//         "price": 29.99,
//         "category": "Home Appliances",
//         "stock": 150,
//         "rating": 4.3,
//         "images":"https://rukminim2.flixcart.com/image/850/1000/xif0q/electric-kettle/r/u/q/multipurpose-electric-kettle-2-ltr-multi-purpose-electric-kettle-original-imagthnjfgdjyrz5.jpeg"
//     },
//     {
//         "name": "Organic Green Tea",
//         "description": "Premium quality organic green tea leaves sourced from sustainable farms.",
//         "price": 14.99,
//         "category": "Groceries",
//         "stock": 300,
//         "rating": 4.8,
//         "images": "https://www.greendna.in/cdn/shop/products/greentea_1136x.jpg?"
       
//     },
//     {
//         "name": "4K Ultra HD Smart TV",
//         "description": "65-inch 4K Ultra HD Smart TV with HDR, built-in streaming apps, and voice control.",
//         "price": 499.99,
//         "category": "Electronics",
//         "stock": 60,
//         "rating": 4.6,
//         "images": "https://electronicparadise.in/cdn/shop/files/71D-2oAb5JL._SL1500.jpg"
//     },
//     {
//         "name": "Stainless Steel Cookware Set",
//         "description": "10-piece stainless steel cookware set with non-stick coating and heat-resistant handles.",
//         "price": 79.99,
//         "category": "Home & Kitchen",
//         "stock": 95,
//         "rating": 4.4,
//         "images":"https://www.thespruceeats.com/thmb/MMMF_c3mDdjurY9XUhJiex866QE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ses-primary-stainless-cookware-sets-rkilgore-01-54cc53feba5748cdab8db4719de942ae.jpg"
//     },
//     {
//         "name": "Portable Charger",
//         "description": "High-capacity portable charger with dual USB ports and fast charging technology.",
//         "price": 24.99,
//         "category": "Accessories",
//         "stock": 180,
//         "rating": 4.5,
//         "images":"https://www.shutterstock.com/image-photo/smartphone-pink-powerbank-on-wood-260nw-274098554.jpg"
//     }
// ]

app.use(router)

app.listen(8000,()=>{
    console.log("app started at 8000 succesfully");
})