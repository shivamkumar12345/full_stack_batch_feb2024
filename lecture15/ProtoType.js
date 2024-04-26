const obj = {
    "a":1,
    "b":2,
    func: function(){
        console.log(this.a + this.b );
    }
}
const obj1 = Object.create(obj);
console.log(obj1);
console.log(obj1.a);

console.log(obj1.__proto__.hasOwnProperty('a'));

Array.prototype.rotate = (arr,idx)=>{
    let mid = arr.length - idx;
    let h= arr.length;
    let l= 0;
    for(let i=0,j=mid-1;i<j;i++,j--){
        let temp =arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for(let i=mid,j=h-1;i<j;i++,j--){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for(let i=0,j=h-1;i<j;i++,j--){
        let temp =arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
arr = [1,2,3,4,5,6,7];
console.log(arr.rotate(arr,3));
console.log(arr.__proto__.hasOwnProperty('rotate'));