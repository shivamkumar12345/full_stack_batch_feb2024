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

let data= [];

app.get("/",(req,res)=>{
    const {query} = req;
    // console.log(query,req,res);
    res.render('index',{data})
});

app.post("/post-comment",(req,res)=>{
    const userComments = req.body;

    data.push({...userComments, id: Math.floor(Math.random()*100000)});
    // console.log(data);
    res.redirect("/");
    
})
app.get("/myblog/:id",(req,res)=>{
    const {id} = req.params;

    const myblog = data.filter(item=> item.id == id)[0];

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
app.post("/edit-comment",(req,res)=>{
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




app.listen(8000,()=>{
    console.log("server started at 8000");
});