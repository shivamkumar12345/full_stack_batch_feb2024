const math =function(fun){
    console.log("hey this is a math fun" + fun());
}

const add = function(){
    console.log("addition of two no" + 2+3);

}
const sub = function(){
    console.log("sub of 2 no "+ 8);
}

math(add);
math(sub);