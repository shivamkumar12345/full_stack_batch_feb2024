function OuterFun(){
    
    console.log("outer fun");
    function innerFun(){
        console.log("innerfun");
    }
    return innerFun;
}
const inner = OuterFun();

console.log(inner());