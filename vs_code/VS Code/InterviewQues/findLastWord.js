// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.



// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.


let s = "Hello World vacbjcj cbjhcbjh bcahscjascn jchacnakj kjcnjdkcnjk"



// Backward Loop
let word = "";
for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != " ") {
        word = word + s[i]
    }
    else {
        break;
    }
}
console.log(word+" , "+word.length)




// Forward Loop
let word1 = "";
for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
        let j = i + 1;
        while (j < s.length) {
            if (s[j] != " ") {
                word1 = word1 + s[j];
                j++
            }
            else {
                word1 = ""
                break;
            }
        }
    }
}
console.log(word1 + " , " + word1.length)



// inbuild Function
let arr = s.split(" ")
console.log(arr[arr.length-1]+" , "+arr[arr.length-1].length)


