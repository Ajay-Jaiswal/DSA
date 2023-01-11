// About JavScript -->
// "Everthing in javascript happens inside an 'EXECUTION CONTEXT' "
// Components of 'EXECUTION CONTEXT'
// 1) Memory :- Variable Enviroment where all Variable and Function store like key and value pair.
// 2) Code  :- "Thread of Execution" that means whole code is executed one line at a time.

// So Carefully --> "JavaScript is 'Synchronus Single-threaded' language" 
// Single Thread :- Only execute One command at a time.
// Synchronous :- that means it can only go to the next line once the current line has been finished executting.
// so JavScript execute in this Specofic Order

// lets take a EX :-

var n = 2
function square(num) { // num is Parameter for function
    var ans = num * num;
    return ans;
}
console.log(square())  // no arguments it return "NaN" because of mathematical operation doesnot work with undefined.

var square2 = square(n); // n is arguments for function
console.log(square2)

var square4 = square(4); // 4 is argument
console.log(square4)

// In this example there are 2 phase as we seen before:-
// 1) Memory Creation Phase - to allocate all variables and functions in Memory.
   // -- IMP --  before Code Execution phase all variables value placehold as a "undefined" and function value placehold as a copy of function code "{.....}".
// 2) Code Execution Phase - check line by line values and replace with placeholder of variable values --- But for the function part it doesnot executed while we doesnot invoke.
//  (line-14 go to code execute in line-19 and a new context execution is created i.e. go to function local space and than code execution phase completion change inside function variables with placeholder after that "return" keyword control come back to global space and than execute code for line-19 and replace placehold with their value)

// Call stack --->
 // "Call stack maintains the 'Order of Execution' of execution contexts".
 // How to Maintain :- whenever any JS program is run this call stack is populated with this Global execution context and whenever a new function is invoked, or a new execution context is created so this Execution Context is put inside the stack once we are done with executing this function, we return the ans and this execution context is popped out of the stack, and the control goes to Global execution context, where it left after that all execution done with program global execution context is also deleted and call stack is empty.
 // So this call stack is only managing these Execution contexts :-
      //  1) whenever an Execution context is created, it is pushed into the Stack
      //  2) and whenever an Execution is deleted, it will move out of the Stack

// "Javascript is Lossly Type Language" OR "Weakly Type Language" due to type casting, type conversion and type coversion.
// let's see Ex:-
var a;
console.log(a);
a = 10  // a is Number
console.log(a);
a = "Hritik" // a is string now
console.log(a);

// Shortest Program in JavaScript is "Empty file" like -- 'index.js' .
  // Because of some Reason :- 
     // 1) At Gloal Space execution context is created as well as 'Global Object' is created.
     // 2) In case of browser "window" is a global object is created by javaScript engine. (inside object some function and variable are stored and also we can access this function and variables this functionallty is given by 'JavaScript Engine')
     // 3) In all case "this" is a global object is created by javaScript engine.
     // 4) At Global level "window === this".  

// undefine vs not define
  // 1) let's a variable is assign but not given any value so execution context created and allocate for this variable memory a specail word "undefine".(also same for when before code is not executed) while in case value is not assign any variable so it gives "not define".
  // 2) undefine take memory while not define is not taking any memory.
  // 3) not define gives Reffrence Error while undefine is a value.
  // 4) undefine is also a placeholder before instailize any value for a variable, after intaillize it repalace with new value.

// 
