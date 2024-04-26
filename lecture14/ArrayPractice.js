const a=[3,6,9,0,2,1];

// a.forEach(
//     function(val,idx){
//         console.log(val+ " "+ idx);
//     }
// );
function swap(arr,idx1,idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
swap(a,0,3);
console.log(a);

const student = [{
    Name:"ram",
    Age:21,
    Marks:89
},{
    Name:"shyam",
    Age:16,
    Marks:93
},{
    Name:"gita",
    Age:25,
    Marks:85
},{
    Name:"sita",
    Age:20,
    Marks:86
},{
    Name:"rahul",
    Age:10,
    Marks:90
}];

// let x= student.filter(function(val){
//     if(val.Marks >=85)return true;
//     return false;
// });

// const y =x.map(function(val){
//     return val.Name;
// })
// console.log(y);


//filter student on marks>=85 and age<=20
let x= student.filter(function(val){
    if(val.Marks >=85 && val.Age<=20)return true;
    return false;
});
const y =x.map(function(val){
        return val.Name;
    }).sort(function(a,b){
      return a.localeCompare(b);
    })
console.log(y);

//filter student on marks>=90 and Add Distinction  
const st= student.filter(function(val){
    if(val.Marks >=90 )return true;
    return false;
});
const dis =st.map(function(val){
        return {...val, Distinction:true};
    })
console.log(dis);