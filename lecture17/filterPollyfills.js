//pollyfills of filter function

const arr= [1,2,3,4,5];

const newArr = arr.filter(  (val,idx,arr)=>{  
    if(val%2==0)return true; 
    return false;
});



Array.prototype.myFilter = function(callbackFn){
    const newArr = [];

    let originalArray = this;
    for(let i=0;i<originalArray.length;i++){
       const isFilter = callbackFn(originalArray[i], i,originalArray); //val,idx,arr
       if(isFilter){
        newArr.push(originalArray[i]);
       }
    }

    return newArr;

};

const newArr1 = arr.myFilter((val,idx,arr)=>{
    if(val%2==0){
        return true;
    }
    return false;
})
console.log(newArr1);