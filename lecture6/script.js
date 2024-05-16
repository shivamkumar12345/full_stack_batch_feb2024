const section = document.querySelector("#section");
async function fetchData(){
    
    const raw = JSON.stringify({
        "limit": 10,
        "offset": 0
    });
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:raw,
        };

    const response =await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON",
    {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:raw,
        }
    )
   
     const data = await response.json();
     console.log(data);

     data.jdList.map((item)=>{
        art= document.createElement("article");
        img = document.createElement("img");
        img.src = item.logoUrl;
        art.append(img);

        section.append(art);
     })

};
// fetchData();


let key = "6ccde37623a4415a926c2c9e7048ba2d";
async function fetchAxiosData(){
    // const res =await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-04-15&sortBy=publishedAt&apiKey=${key}`);
    const res= await fetch(`https://api.tvmaze.com/search/shows?q=spider`);
    const data = await res.json(); 
    console.log(data);
}
fetchAxiosData();