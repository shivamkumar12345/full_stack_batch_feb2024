function add(){
    // console.log(2+3);
    return 2+3;
}
console.log(add());

//function with param
function sub(a,b,c =0){ // c is default param of sub fun
    console.log("hi" );
    return a-b-c;
}
console.log(sub(5,2));
