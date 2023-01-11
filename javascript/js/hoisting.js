// Hoisting
// Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
// Basically, it gives us an advantage that no matter where functions and variables are declared,
// they are moved to the top of their scope regardless of whether their scope is global or local. 

// It allows us to call functions before even writing them in our code. 
// Note: JavaScript only hoists declarations, not the initializations.
// JavaScript allocates memory for all variables and functions defined in the program before execution.

// var--------------------------------------------------------------------------------------------------
// In Case Of Var We Can Access The Memory Location Before Initialization

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.

//let/const--------------------------------------------------------------------------------------------
//In Case Of Let/Const Hoisting Occour But After The Initiallization And Before Declaration

//console.log(x)
let x;//Declaration
console.log(x)
x = 5//Initialization
console.log(x)

//Function-----------------------------------------------------------------------------------------------

console.log(add)
console.log(add())

function add() {
    console.log("Hi There")
}
//In Case Of Arrow And Declaring It In Variable Lets See The Example Below
console.log(call)
//console.log(call())
var call = () => {
    console.log('hi call')
}
call();


//IMPORTANT:- Let And Const are also support hoisting but they are in the Temporal Dead zone.