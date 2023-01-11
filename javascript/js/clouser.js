//What It Clouser?

// A closure is the combination of a function bundled together (enclosed)
// with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

// Example:-1

// function call(a) {
//     let b = 2;
//     return function callback(c) {
//         return a + b + c
//     }
// }


// let save = call(1)//it returns the function callback with its lexical scope
// console.log(save)
// console.log(save(3))

//The Function Will Return A function Ok So To Save The Returned value We Have To Store it In A Variable
//In Other Language If The Function is Called Once The value Doesnt Retain But It Still Remain In JS. 

//Example:-2
// function sum(a, b, c) {
//     return {
//         getsumTwo: function () {
//             return a + b;
//         },
//         getsumThree: function () {
//             return a + b + c;
//         }
//     }
// }

// let here = sum(1, 2, 3)
// console.log(here.getsumTwo())
// console.log(here.getsumThree())


//The Unused Variable are later on Removed By Garbage Collecter Default Property Of Engiene

//ADVANTAGES:-
//With The Clouser The Main Advantage Is Data Hiding Because The Data Is Present In Side A function Means Enclosed
//So That They Are Not Easily Accessable

//DIS-ADVANTAGES:-
//After The Function Execution The Memory Allocation Also Fades But Due To Clouser The variable present inside the lexical environment
//Does not fade away