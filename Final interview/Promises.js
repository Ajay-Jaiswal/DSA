function promises1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promises1 resolved')
        },5000)
    })
}

function promises2(){
    return new promises1((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promises2 resolved')
        },1000)
    })
}

promises1().then(res1=>{
    console.log('res1 resolved',res1)
    promises1().then(res2=>{
        console.log('res2 resolved', res2)
    })
})

async function myAsyncAwait(){
    const res1 = await promises1()
    console.log('res1',res1)
    const res2 = await promises2()
    console.log('res2', res2)
}








