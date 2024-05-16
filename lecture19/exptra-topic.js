// spread operator ...

let arr = [1,2,3,4,5,6];

const [a,b,...c]= arr;

console.log(a,b,c,arr);

//destructure
const obj = {
    key1:"hello",
    key2:"world",
    key3:123,
    key4:[1,3,4,5]
}
const {key1,key2}= obj;
console.log(key1,key2);