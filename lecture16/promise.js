function download(){
    return new Promise(
        (resolve,reject)=>{
            setTimeout(()=>{
                resolve("hey your video downloaded");
            },2000);
            // 
            // reject(" its reject");
        }
    )
}

const p =download();

p.then((res)=>{
    console.log("thanks " +res);
}).catch((err)=>{
    console.log("Ohk "+ err);
});
