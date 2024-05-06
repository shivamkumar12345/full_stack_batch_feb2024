const inputItem = document.querySelector("input");
const list = document.querySelector("#list");
const btn = document.querySelector("button");
function addItem(){
    console.log(inputItem.value);

    const li = document.createElement('li'); //list bna rhe hain
    li.innerText = inputItem.value; //us list me input hua value assign kr rhe hain
    list.appendChild(li); //apeend bna hua list ko
    inputItem.value = ''; //input ko khali kr rhe hain

}

btn.addEventListener("click",addItem);

let count =0;
document.addEventListener("keypress",(event)=>{
    console.log(event.key);
    if(count >=1){
        event.stopPropagation();
    }else if(event.key === "Enter"){
        console.log(count);
        addItem();
        
        count ++;
    }
})
// document.addEventListener("mousemove",(event)=>{
//     console.log(event);
// })
btn.addEventListener("mouseleave",(event)=>{
    console.log(event);
    btn.style.backgroundColor="red";
})