//arrow fun
const fun = (params)=>{

    return params;
}

//inline arrow fun
const add = (a,b) => a+b;
console.log(add(2,3));

const arr =[1,2,3,4];

const newArr = arr.map((val,idx)=>val*2);
console.log(newArr);
