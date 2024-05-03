//bind function

function example(){
    console.log(this.key1 + " " + this.key2);
}

const obj1 = {
    key1:"coding",
    key2:"blocks"
}
const fun =example.bind(obj1);
fun();

// myBind function

Function.prototype.myBind = function(obj){

    const originalFun = this;

    return function (){
        originalFun.call(obj);
    }
}
const obj2= {
    key1:"JavaScript",
    key2:"PollyFills"
}
const fun1 =example.myBind(obj2);

fun1();
