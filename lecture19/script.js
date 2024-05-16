const section = document.querySelector("#section");
const button = document.querySelector("button");
const input = document.querySelector("input");

let key = "6ccde37623a4415a926c2c9e7048ba2d";

async function fetchData(query="iron-man"){

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    
    const data = await response.json();

    console.log(data);
 
    if(data){
        section.innerHTML ="";
        data.map((item)=>{
            if(item.show.image !==null){
                const article= document.createElement("article");
                    article.innerHTML =`
                    <img src=${item.show.image.medium}></img>
                    <h1>${item.show.name}</h1>
                    <p>${item.show.summary.substring(0,200)}</p>
                    
                    `;

                section.append(article);
            }
            
        })
    }
}

fetchData();


button.addEventListener("click",(event)=>{
    if(input.value !== ""){
        fetchData(input.value);
    }
})