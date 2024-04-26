d= [
    {Name:"Mater Paneer ",
    discription:"onion"
    },
    "Alu Subji",
    "Gobi Manchurian",
    "Momos",
    "Sambar",
    "Chicken Biryani ",
    "Hyderabadi chicken Biryani",
    "Mango Chutney",
    "Butter Chicken",
    "fish curry"
];

novVeg = d.filter(function(val,idx){
    if(val.toLowerCase().includes("chicken") || val.toLowerCase().includes("fish")){
        return true;
    }else{
        return false;
    }
});
console.log(novVeg);
veg = d.filter(function(val,idx){
    if(val.toLowerCase().includes("chicken") || val.toLowerCase().includes("fish")){
        return false;
    }else{
        return true;
    }
});
console.log(veg);
