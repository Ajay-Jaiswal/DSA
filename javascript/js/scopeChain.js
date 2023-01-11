// 'Scope Chain' is directly propotional to "Lexical Enviorment".
     
// Scope :-
  // where you can access a specific vaiable or a function in our code.

// Lexical Enviorment :-
  // Lexical terms means in Sequence, hierarchy. 
  // when ever a "Execution Context" is created a "Lexical Enviorment" is also created.
  // Lexical Enviorment is a local memory along with the Lexical Enviorment of its Parents. 
  // LE = local memory + Lexical enviorment memory of parents

//Scop Chain :-
     // the way and the mechanism to finding the variables.
     // the chain when all the Lexical Enviorment and their parant references.

// Let as take EX:-

function a(){  // "a" is parent of "c" (and Global Execution Context is parent of "a")  
    var b = 10;
    c();
    function c(){  
    console.log(b)
    }
}
a();
//console.log(b)

// In this Example:-
  // 1) when we access "b" inside "c" than it gives value of b.(line-21) that mean "b" is in scope due to parent of "c" content memory for "b".
  // 2) while if we access "b" from global place, it gives Error 'not define'(line-25) that means "b" is not in scope due to in call stack there is no parent of Global Execution context that is "null" OR not content memory for "b".

   