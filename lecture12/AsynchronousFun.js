 let currTime = new Date().getTime();
 console.log(currTime);

// SynChronous operation
function WaitFun(delay){
    const startTime=  new Date().getTime();

    while(new Date().getTime() < (startTime + delay))continue;
} 

function VideoDownload(){
    WaitFun(5000);
    console.log("Video downloaded");
}
function MusicDownload(){
    WaitFun(2000);
    console.log("Music downloaded");
}
// VideoDownload();
// console.log(2+3);


// Asynchrounous operation

//setTimeOut

// setTimeout(function (){
//     VideoDownload();
// },5000);

// setTimeout(function (){
//     MusicDownload();
// },2000);
// console.log(2+3);

//setInterval
let x= setInterval(function(){
    console.log(new Date().getDate());
    console.log(new Date().getHours());
},2000);

setTimeout(function (){

    return clearInterval(x);

},5000);


// setTimeout(function(){
//     let x=  setInterval(function(){
//         console.log(2+3);

//     },2000);
//     return clearInterval(x);
// },5000);