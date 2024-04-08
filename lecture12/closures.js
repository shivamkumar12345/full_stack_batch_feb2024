function outerFun(){
    let x=0;
    function innerFun(){
        x+=2;
        return x;
    }
    return innerFun;
}
let f1= outerFun();
let f2= outerFun();

console.log(f1());
console.log(f1());

console.log(f2());
console.log(f2());
console.log(f2());