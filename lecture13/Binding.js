console.log(this);//window

function solve(){
    console.log(this); //window
}
solve();

obj ={
    key1: "hello",
    fun:this //window
}
console.log(obj.fun);

//implicit binding
let obj2 = {
    key1:"hello",
    fun:function(){
        this.key1 = "world";
        console.log(this);//obj2
    }
}
console.log(obj2.fun());


//explicit binding
function Fun(a,b){
    console.log(this.coding + a +", " + b );
}

const obj3 = {
    coding:"Coding Blocks"
}
Fun("Lucknow","Noida");
//call method
Fun.call(obj3,"Lucknow","Noida");

//apply method[array pass]
Fun.apply(obj3,["Lucknow", "Noida"]);

//example qn
let a= function(){
    console.log(2);
}
let b= function(){
    console.log(2);
}
b=a;
console.log(a===b);

let arr1= [2,3,4,5];
let arr2= [2,3,4,5];
let arr3= arr1;

console.log(arr1 === arr2);
console.log(arr3 === arr1);
arr3[0]=5;
console.log(arr1[0]);