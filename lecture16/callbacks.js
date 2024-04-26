function download(greetMessage){
    console.log("downloading video");

    greetMessage();

}

//download(greetMessage);
download(function greetMessage(){
    console.log("Hey, great, you video Downloaded successfully");
});

const arr=[1,2,3,4,5];
arr.map((val,idx)=>{
    return val*val;
})