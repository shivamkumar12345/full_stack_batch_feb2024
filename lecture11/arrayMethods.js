a=[1,2,3,4];

// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }
// for(let i in a){
//     console.log(a[i]);
// }

//forEach
function myFun(value,index,arr){
    console.log("value at "+ index + " is " + value);
}
a.forEach(myFun);

//2nd method
a.forEach(function(val,idx){
    console.log("value of a at "+ idx + " is "+ val);
})

//map method
a1= a.map(function(val,idx,arr){
    return val*2;
});
console.log(a1);

//filter method
let a2 = a.filter(function(val,idx){
    return val%2==0;
});
console.log(a2);

a=[1,5,8,2,9,6];

let ans =a.filter(function(val){
    return val%2==0;
});
let multiply =ans.reduce(function(mul,val){
    mul*= val;
    return mul;
},1);

console.log(ans);