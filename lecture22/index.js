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
    // console.log(query,req,res);
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
    // console.log(data);
    res.redirect("/");
    
})
app.get("/myblog/:id",async(req,res)=>{
    const {id} = req.params;

    const myblog = await User.findOne({_id:id});
    console.log(myblog);

    res.render('myblog',{myblog})

})
app.get("/add-comments",(req,res)=>{
    
    res.render('form',{data});
})

app.get('/edit/blog/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id);  
    const myblog = data.filter(item=> item.id == id)[0];
    res.render('edit',{myblog})    

})
app.patch("/edit-comment",(req,res)=>{
    const {id} = req.body;

//   console.log(userComments,"edit commit");
    data = data.filter(item => {
        if(item.id == id){
                return false;
        }else{
            return true;
        }
    });

    data.push(req.body);
  
    res.redirect("/");
    
})
app.delete('/blog/delete/:id',(req,res)=>{
    const {id} = req.params;
   
    data = data.filter(item=> item.id != id);
    res.redirect('/');
})




