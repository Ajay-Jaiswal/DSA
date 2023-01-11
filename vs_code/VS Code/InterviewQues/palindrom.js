// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = ""A man, a plan, a canal: Panama""
// Output: true
// Explanation: ""amanaplanacanalpanama"" is a palindrome.

let s = "A man, a plan, a canal: Panama";
let mainStr = "";


for (let i = 0; i < s.length; i++) {
    let asciiCode = s.charCodeAt(i)
    if ((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)) {
        mainStr = mainStr + s[i]
    }
}
mainStr = mainStr.toLocaleLowerCase()

function palindrom(str) {
    let revStr = str
    revStr = revStr.split("")
    for (var i = 0; i < revStr.length / 2; i++) {
        [revStr[i], revStr[revStr.length - 1 - i]] = [revStr[revStr.length - 1 - i], revStr[i]]
    }
    revStr = revStr.join("")

    if (str === revStr) {
        return "It is palindrom."
    }
    else {
        return "This string is not palindrom."
    }
}
// console.log(palindrom(mainStr));


let arr = ["a","b","c","d"]
let Output ="a"
function palindromic(arr){
    if(arr.length == 0) return arr
    return (palindromic(arr.splice(1))+Output)
}
console.log(palindromic(arr)
)

