//pollyfills of map function

const arr= [1,2,3,4,5,9];

const sum = arr.reduce(  (prev,curr,idx,arr)=>{  prev+=curr; return prev; },  0   );



Array.prototype.myReduce = function(callbackFn,inital){
    let prev = inital;

    let originalArray = this;
    for(let i=0;i<originalArray.length;i++){
       prev = callbackFn(prev,originalArray[i], i,originalArray); //prev, val,idx,arr
    }

    return prev;

};

const total = arr.myReduce((prev,val,idx,arr)=>{
    prev += val;
    return prev;
},0)
console.log(total);