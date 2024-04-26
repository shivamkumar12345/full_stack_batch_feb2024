if(true){
    let x= 10;
}
{
    let y=10;
}
// console.log(y);

function scope(){
    const y=20;
    if(true){
        const y=50;
        console.log(y);
    }
    console.log(y);
}
scope();
// console.log(y);

function fun(){
    var x=10;
    console.log(x);
    if(true){
        var x= 20;
        console.log(x);
    }
    console.log(x);
}
fun();