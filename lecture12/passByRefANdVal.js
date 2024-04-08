function swap(a,b){
    let temp =a;
    a=b;
    b=temp;
    console.log(a,b);
}
let a= 5;
let b= 10;
console.log(swap(a,b));
console.log(a,b);

//array & object pass by reference
function swapByRef(obj){
    let temp = obj.a;
    obj.a= obj.b;

    obj.b =temp;
}


let obj1 = {
    a:5,
    b:10
}
console.log(obj1);
swapByRef(obj1);
console.log(obj1);


// array pass by ref
function SquareArrayElem(arr){
    // for(let i in arr){
    //     arr[i] = arr[i] * arr[i];
    // }

    // arr.map(function(val,idx,arr){
    //     arr[idx] = arr[idx] * arr[idx];
    // });


    arr.forEach(function(val,idx){
       arr[idx] = arr[idx]*arr[idx]; 
    });

}
a= [1,2,3,4,5];
SquareArrayElem(a);
console.log(a);