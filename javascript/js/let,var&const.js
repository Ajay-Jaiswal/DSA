// "Let & Const declarations are 'Hoisted'".

//Temporal Dead Zone:-
  // 1) It is the time since when "let" variable was hoisted and till it is initaillise some value, the time between them is 'Temporal Dead Zone'.
  // 3) Occur due to 'Let' & 'Const' variables has allocated memory in seprated memory(Script) apart from global memory(Global Object).
  // 2) In Temporal Dead Zone access any variable it gives Refference Error.

// Let as see EX:-
  // for Let
//console.log(a); // "a" is in Temporal Dead zone befor initiallise.(gives Refference Error)

let a;          // "a"  will be change after declaration. 
a=10
console.log(a);   // "a" printed the value in console

   // for var
console.log(b);  // "b" will print specail key word "undefine" due to Global Zone.

var b;
b=100
console.log(b);    // "b" printed the value in console
 
   // for const
//console.log(c);   // "c" is in Temporal Dead zone befor initiallise.(gives Refference Error)

const c = 1000;   // correct way to declare "const".
// const c;          // incorrect due to would not be change after assign.
// c=1000           
console.log(c);

// Errors -->
  // 1) Refference Error:-
      // 1) In Temporal Dead Zone (before intiallize access variable) Note :- only in 'Let' & 'Const'.
      // 2) Access a variable which is not in memory allocated. 
  // 2) Syntax Error:-
      // 1)Redeclaration or duplicate of variable with same name.(in let and Const)
      // 2) No any code be execute. that means does not reach a single line of code in whole code.
      // 3) In 'Same Scope' also be not redeclare with one is 'Let' and other is 'Var'.
  // 3) Type Error:-
      // 1) Type of variable be Like "Const".
      // 2) When change Value with same variable. 

 // Ex:-
    // 1) Refference Error:-
//console.log(x) // Refference Error

//console.log(d)  
 let d;
 d = 50

   // 2) Syntax Error:- 
// let e = 10;
// let e = 100; 

// let f = 1000;
// var f = 5000;   // syntax error due to 'Same Scope' in variables 'var' & 'let'.

// const g;
// g = 10000;    // syntax error due to missing initialize in 'Const'.(syntax is wrong to initaillize)
     
    // 3) Type Error:-
// const h = 1000000;
// h = 100    // Type of vaiable is "Const" and it Doesnot be change value.
