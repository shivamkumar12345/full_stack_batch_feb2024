const example1 =()=>{
    return new Promise(
        (resolve,reject)=>{
            setTimeout(()=>{
                console.log(new Date().getTime());
                if(new Date().getTime() %10 !=0){
                    reject("its rejected");
                }else{
                    resolve("its resolved");
                }
            },2000)
        }
    )
}

ex1 = example1();

ex1.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
