/*function isValid(s) {
    debugger
    const pairs = {
         ')' : '(',
         '}' : '{',
         ']' : '[',
     }
     const stack = [];
     const stringArr = s.split('');
     
     for (let i = 0; i < stringArr.length; i++) {
         if ('({['.includes(stringArr[i])) {
             stack.push(stringArr[i]);
         } else if (pairs[stringArr[i]] !== stack.pop()) {
             return false;
         }
     }
     
     return !stack.length;
 };

 console.log(isValid("()"))*/

 let x = [1,-2,3]
 console.log(x.sort())