let str = 'cbatvnmnhbatuyritnbatmoip'
let word = 'bat'



//With inbuild function
let count =0
for(let i=0;i<str.length;i++){
    for(let j=i;j<str.length;j++){
        let s = str.substring(i,j)
        if(word == s){
            count++
        }
    }
}
// console.log(count)





// Without inbuild function
function containsString(str, word) {
    let match = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < word.length; j++) {
            if (str[i++] == word[j]) {
                match++;
            }
            else{
                break;
            }
        }
    }

    if (match != word.length) {
        return `${word} is not present in the given string`;
    }
    
    return `"${word}" is present in the string "${str}" ${match} times`;
}

console.log(containsString(str, word))







// //Without inbuild function
// function containsString(str, word) {
//     let match = 0;
//     for (let i = 0; i < str.length - word.length + 1; i++) {
//         for (let j = 0; j < word.length; j++) {
//             if (str[i + j] == word[j]) {
//                 match++;
//             }
//             else{
//                 break;
//             }
//         }
//     }

//     let count = match/word.length;
//     if (count != word.length) {
//         return `${word} is not present in the given string`;
//     }
    
//     return `"${word}" present in the string "${str}" is ${count} times`;
// }

// console.log(containsString(str, word))