let s="coding blocks";
console.log(typeof s);

// for(let i=0;i<s.length;i++){
//     console.log(s[i]);
// }

//substring(start,end_idx)
console.log(s.substring(2,6));

//substr(from,length)
console.log(s.substr(2,6));

//indexOf
console.log(s.indexOf("h"));

//replace(), replaceAll()
s1= s.replace("coding","hacker")
console.log(s1);

//trim()
let t="  hello  ";
t =t.trim("");
console.log(t);

//includes(substr,search_index=0)
console.log (s.includes("cod",1));

//toUpperCase()
s=s.toUpperCase();
console.log(s);

s="abc@gmail.com";
console.log( s.endsWith("@gmail.com"));

//toString
let a=[1,2,3,4];
console.log(typeof a.toString());

function add(){
    return 2+3;
}
console.log( add.toString());