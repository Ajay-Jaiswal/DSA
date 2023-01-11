// Output based question based on event loop

function A(){ console.log("A")}
function B(){ console.log("B")}
function C(){ console.log("C")}
function D(){ console.log("D")}




A()
setTimeout(B,0)
Promise.resolve(C).then((res)=>res())
D()