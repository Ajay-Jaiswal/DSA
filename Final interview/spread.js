// Spread Operator :-  Expand Array or object list
//spread in array
let a = [1,2,3]
let b = [...a,4,5,6]
console.log(b)

//Spred in Object
let c = {
    name : 'Aj',
    lname : 'Jay'
}
let d = {
    ...c,
    age : 25
}
console.log(d)

// Rest Oprator :- function to get all the parameters or may be rest of the parameters
// rest in  parameters
 function sum(b,...a){
    console.log(b)
    console.log(a)
 }
 sum(5,6,7)