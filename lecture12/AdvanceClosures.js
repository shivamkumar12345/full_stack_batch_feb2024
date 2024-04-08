
function outerFun(){
    let x=0;
    function newFun(){
        ++x;
        function newerFun(){
            ++x;
            return x;
        }
        return newerFun;
    }
    return newFun;
}
f1 = outerFun();
f11 = f1();
f12 = f1();

console.log(f11()); //1
console.log(f11()); //2
console.log(f12()); //1
console.log(f11()); //3