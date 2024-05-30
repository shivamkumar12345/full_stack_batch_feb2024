const express = require("express");
const  path = require("path");
const bodyParser = require('body-parser')
const methodOverride = require("method-override")
const mongoose = require("mongoose");
const User = require("./models/userModel");
const app = express();

// add database connection
mongoose.connect("mongodb://127.0.0.1:27017/blogs")
.then((res)=>{
    console.log("connected with database successfully");
    app.listen(8000,()=>{
        console.log("server started at 8000");
    });
})
.catch(err=>{
    console.log(err,"got err during conection with database");
});


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))



// creating array
let data= [];

app.get("/",async (req,res)=>{
    const {query} = req;
    const data = await User.find();
    res.render('index',{data})
});

app.post("/post-comment",async (req,res)=>{
    const userComments = req.body;
    
    try{   
        await User.create(userComments);
    }catch(err){
        console.log(err ,"not abled to insert data");
    }
    res.redirect("/");
    
})
app.get("/myblog/:id",async(req,res)=>{
    const {id} = req.params;

    const myblog = await User.findOne({_id:id});
   

    res.render('myblog',{myblog})

})
app.get("/add-comments",(req,res)=>{
    
    res.render('form',{data});
})

app.get('/edit/blog/:id',async(req,res)=>{
    const {id} = req.params;
    console.log(id);  
    try{

        const myblog = await User.findById(id);
        res.render('edit',{myblog})    
    }catch(err){
        console.log(err);
    }
 

})
app.patch("/edit-comment",async(req,res)=>{
    const {id,name,comments} = req.body;
=
    try{
        await User.findByIdAndUpdate(id,{name,comments});
        res.redirect("/");
    }catch(err){
        console.log(err);
    }  
});

app.delete('/blog/delete/:id',async(req,res)=>{
    const {id} = req.params;
   
    try{
       await User.findByIdAndDelete(id);
       res.redirect('/');
    }catch(err){
        console.log(err);
    }
})




