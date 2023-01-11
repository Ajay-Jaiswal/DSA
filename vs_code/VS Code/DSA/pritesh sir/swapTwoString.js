//Swap 2 strings without using a third variable 
let x= "something";
let y = "good";
console.log(x,y)

x = x.concat(y) // somethinggood
y= x.slice(0,-y.length) //something
x=x.slice(y.length)
console.log(x,y);