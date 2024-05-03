// document.getElementById('h1_id').innerHTML ="Coding Page";

const h1= document.querySelector('h1');


//classList, add,remove
// setTimeout(()=>{
//     h1.classList.add('h1_red');
// },3000);
// setTimeout(()=>{
//     h1.classList.to('h1_red');
// },5000);
count =0;
let x= setInterval(()=>{
    if(count%3 ==0){
        h1.classList.remove('h1_red');
        h1.classList.add('h1_green');
    }else if(count %3==1){
        h1.classList.remove('h1_green');
        h1.classList.add('h1_red');
    }else{
        h1.classList.remove('h1_red');
        h1.classList.remove('h1_green');
    }
    count =(count+1)%3;
},800);

function stopAnimation(){
    console.log("i am going to stop animation");
    clearInterval(x);
}