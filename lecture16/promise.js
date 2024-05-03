async function download(){
    return new Promise(
        (resolve,reject)=>{
            let x= setTimeout(()=>{
                resolve("hey your video downloaded");
            },2000);
            
            clearTimeout(x,1000);
            // 
            // reject(" its reject");
        }
    )
}

const p = await download();

p.then((res)=>{
    console.log("thanks " +res);
}).catch((err)=>{
    console.log("Ohk "+ err);
});
