function add(val){
    let sum =val;
    function Add(v){
        if(v == undefined){
            return sum;
        }
        sum+=v;
        return Add;
    }
    return Add;
}
// console.log(add(1)());
// console.log(add(1)(2)());
console.log(add(1)(2)(3)());

const sub =function(fun){
    console.log("hi" + fun());
}
const mul = function(){
    console.log("mul");
}
console.log(sub(mul));

function outerFun(){
    function innerFun(){
        console.log("inside higher order");
    }
    return innerFun;
}
const y =outerFun();
console.log(typeof y);

s= "coding blocks ";
console.log(s.includes("b"));
s= s.replaceAll(" ",",");
console.log( s.toUpperCase() );