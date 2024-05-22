const express = require("express");
const ejs=  require("ejs");
const  path = require("path");
const bodyParser = require('body-parser')

const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: true }))

// creating array
const fruits = ["apple","orange","grapes"];

const data= {name:"", comments:""};
app.get("/",(req,res)=>{
    const {query} = req;
    // console.log(query,req,res);
    res.render('index',{query,fruits});
});

app.post("/post-comment",(req,res)=>{
    console.log(req,"post comment");
    res.redirect("/");
    
})
app.get("/add-comments",(req,res)=>{
    
    res.render('form',{data});
})






app.listen(8000,()=>{
    console.log("server started at 8000");
});