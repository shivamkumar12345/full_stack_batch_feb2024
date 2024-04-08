a=[1,2,3,4,5];

// reduce(prev,curr, idx,arry)
let sum =a.reduce(function(prev,curr){
    prev+=curr;
    
    return prev;
},0);
console.log(sum);

// push method at last index
a.push(6);
console.log(a);
a.pop(); //remove last element


//sort method
a= [5,2,6,9,0];

a.sort(function(a,b){
    return b-a; // for descending order
});
console.log(a);
