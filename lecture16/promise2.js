function runVideo(){

    return new Promise((resolve,reject)=>{

    })
}



v = runVideo();
let isLoading =true;

v.then((res)=>{
        console.log("running video "+ res);
}).catch((err)=>{
    console.log("error occured");
})

if(isLoading){
    console.log("loading...");
}