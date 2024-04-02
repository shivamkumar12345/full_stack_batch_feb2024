let a= [1,2,3,4];
let str =""
for(let i=0;i<a.length;i++){
    str+= a[i] + " ";
}
console.log(str);

for( let x in a){
    console.log(a[x]);
}
let myObj = {
    key1:10,
    key2:"hello",
    key3:true,
    key4: {
        "shivam":"tripathi"
    }
}
for(let key in myObj){
    console.log(myObj[key]);
}
const s= "coding blocks";
// for(let i =0;i<s.length;i++){
//     console.log(s[i]);
// }
let i=0;
while(i<s.length){
    console.log(s[i]);
    i++;
}