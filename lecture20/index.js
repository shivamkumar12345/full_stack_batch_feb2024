let {a} = require("./index2.js");
const fs = require("fs");

fs.writeFile("temp.txt","hello world coding block",function (event){
    console.log("done");
});

console.log(a);