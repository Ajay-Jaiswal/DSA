//wrapping
// nodejs wrapping all there function in this function
/*
(function(exports,require,module,__filename,__dirname){

})*/
console.log(__filename)
console.log(__dirname)
console.log(module)


const path = require('path')
console.log(path.basename("c:\Users\Dell\Desktop\Important\Final interview\wrapper.js"))  //show base name
console.log(path.join(__dirname, 'code')) // join directory
console.log(path.normalize("c:\Users\Dell\Desktop\Important\/////Final interview\wrapper.js"))  // normlize abnormal file
console.log(path.parse("c:\Users\Dell\Desktop\Important\Final interview\wrapper.js"))

console.log(path.isAbsolute(__filename));

