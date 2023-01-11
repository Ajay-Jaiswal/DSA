//Function Statement & Function Declarartion--------------------------------------------------------------
function a() {
    console.log("a callled")
}

//The main difference between function statement and function expression is Hoisting

//Function Expression
var b = function () {
    console.log("b called")
}


//Anonymous Function--------------------------------------------------------------------------------------
//A function with out name is anonymous function
eg: -
    function () {

    }
//You Can use a anonymous function as value Like,
var fn = function () {

}

//Named Function Expression--------------------------------------------------------------------------------
//If we gave a name to a function expression it is known as Named function expression
//We can call the function by writing c()
//But if we do add()-->it will throw an error of reference error
//We can use the function inside the function only
var c = function add() {
    console.log(add)
}

//Difference Between Parameters and Argument---------------------------------------------------------------
//Parameter->
function substract(parameter) {
    console.log(parameter)
}
//Argument->
//substract(argument)

//First Class Function-------------------------------------------------------------------------------------
//the ability to use a function as value is first class function
//it means a function can be passed as a argument to another function or can be returned from a function .
//First Class Citizen

var b = function (param) {
    console.log(param)
    return function () {
    }
}
function xyz() {

}

b(xyz);
b();

//Arrow Function-------------------------------------------------------------------------------------------
//it is a new way of declaring function
//its like we are storing the function inside a variable

var x=()=>{

}