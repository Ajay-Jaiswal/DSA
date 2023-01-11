// set time out


function a(){
console.log("1")
}
function b(){
console.log("2")
}
function c(){
console.log("3")
}

setTimeout(()=>{
    a()
},2)
b()
c()