const inputItem = document.querySelector("input");
const list = document.querySelector("#list");

function addItem(){
    console.log(inputItem.value);

    const li = document.createElement('li'); //list bna rhe hain
    li.innerText = inputItem.value; //us list me input hua value assign kr rhe hain
    list.appendChild(li); //apeend bna hua list ko
    inputItem.value = ''; //input ko khali kr rhe hain

}