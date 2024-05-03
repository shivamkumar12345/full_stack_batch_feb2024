//pollyfills of map function

const arr= [1,2,3,4,5];

const newArr = arr.map(  (val,idx,arr)=>{  return val*3;}     );



Array.prototype.myMap = function(callbackFn){
    const newArr = [];

    let originalArray = this;
    for(let i=0;i<originalArray.length;i++){
       newArr[i] = callbackFn(originalArray[i], i,originalArray); //val,idx,arr
    }

    return newArr;

};

const newArr1 = arr.myMap((val,idx,arr)=>{
    return val*val;
})
console.log(newArr1);