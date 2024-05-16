// grand = document.querySelector(".grand_parent");
// parent = document.querySelector(".parent");
// child = document.querySelector(".child");

// grand.addEventListener("click",(event)=>{
//     console.log(event);
//     if(event.target.className ==="child" || event.target.className === "parent"){
//         event.stopPropagation();
//     }else{

//         console.log("clicked on grand");
//     }
// });


// parent.addEventListener("click",(event)=>{
//     if(event.target.className === "child"){
//         event.stopPropagation();
//     }else{

//         console.log("clicked on parent");
//     }
// });

// child.addEventListener("click",(event)=>{
//     console.log("clicked on child");
// });

$(".child").on("click",(event)=>{
    // $(".parent").on("click",(event)=>event.stopPropagation());
    console.log("clicked on child");
})
$(".parent").on("click",(event)=>{
    $(".child").on("click",(event)=>event.stopPropagation());
    console.log("clicked on parent");
})