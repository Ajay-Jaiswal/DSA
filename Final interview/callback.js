// call back
function create(callback){
setTimeout(function(){
    console.log('create Account')
    callback()
},6000)
}


function login(callback){
setTimeout(function(){
    console.log('login')
    callback()
},5000)
}

function post(callback){
setTimeout(function(){
    console.log('post')
    callback()
},4000)
}


function update(callback){
setTimeout(function(){
    console.log('Update Profile')
    callback()
},3000)
}

function request(){
setTimeout(function(){
    console.log('send Friend Request')
    
},2000)
}

// create()
// login()
// post()
// update()
// request()


//callback hell
 create(function(){
    login(function(){
        post(function(){
            update(function(){
                request();
            })
        })
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////
//promises

function first(){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            console.log('first call')
            resolve()
        },10000)
    })
}
function second(){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            console.log('second call')
            resolve()
        },9000)
    })
}

function third(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('third call')
            resolve()
        },8000)
    })
}

function fourth(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('fourth call')
            resolve()
        },7000)
    })
}

first().then(second).then(third).then(fourth)


///////////////////////////////////
//Async Await
function aaf(){
    setTimeout(function(){
        console.log('async await first')
    },15000)
}

function aas(){
    setTimeout(function(){
        console.log('async await second')
    },14000)
}

function aat(){
    setTimeout(function(){
        console.log('async await third')
    },13000)
}

function aafo(){
    setTimeout(function(){
        console.log('asyn await fourth')
    },12000)
}

async function aa(){
    await aaf()
    await aas()
    await aat()
    await aafo()
}

aa()
