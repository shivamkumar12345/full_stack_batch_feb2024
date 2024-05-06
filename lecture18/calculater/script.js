input = document.querySelector("input");
table = document.querySelector("table");

let num1="", num2="";
let operator ="";
table.addEventListener("click",(event)=>{
    console.log(event.target.innerText);
    const clickedBtn = event.target.innerText;

    if(clickedBtn >= '0' && clickedBtn <= '9'){
        if(operator === ""){
            num1+= clickedBtn;
            input.value = num1;
        }else{
            num2+= clickedBtn;
            input.value = num2;
        }
    }else if(clickedBtn === "+" || clickedBtn === "-" || clickedBtn === "*"){
        operator= clickedBtn;
        input.value = "";
    }else if(clickedBtn == "="){
        let ans=0;
        switch(operator){
            case "+":
                ans = Number(num1) + Number(num2);
                break;
            case "-":
                ans = Number(num1) - Number(num2);
                break;
            case "*":
                ans = Number(num1) * Number(num2);
                break;
        }
      
        input.value = ans;
    }else {
        input.value = "";
        num1="";
        num2="";
        operator="";
    }
})
