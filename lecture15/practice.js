function OuterFun(){
    let a=10;
    function innerFun(){
        let b=20;
        console.log(b);
    }
    console.log(a);
    return innerFun;
}

const f1 = OuterFun();

console.log(f1());