 const express  = require("express");

 const app = express();


//  app.use("/home",(req,res)=>{
//     console.log(req._parsedUrl.pathname);
//     // console.log(res);

//     const {query ,params} = req;
//     console.log(query,params);
//     res.send("hey welcome");
//  });

app.get("/home",(req,res)=>{
    console.log("its home");
    res.send("welcoe to home");
})

app.get("/search/id=:val",(req,res)=>{
    console.log("its search",req);
    res.send(`welcome to search id = ${req.params.val}`)
})
app.get("/",(req,res)=>{
    res.send("its default route")
})

app.get("*",(req,res)=>{
    res.send("page not found");
})

 app.listen(8000,()=>{
    console.log("server started successfully at 8000");
 });