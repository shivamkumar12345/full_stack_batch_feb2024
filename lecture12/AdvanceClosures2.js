function add(val){
    if(typeof val == 'undefined' )return 0;
    function Sum(value){
        if(typeof value == 'undefined' )return val;
        val += value;
        return Sum;
    }
    return Sum;
}


console.log(add()); //0
console.log(add(1)()); //1
console.log(add(1)(2)()); //3
console.log(add(1)(2)(3)()); //6
console.log(add(1)(2)(3)(4)()); //10