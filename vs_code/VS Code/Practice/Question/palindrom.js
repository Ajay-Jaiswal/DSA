function palindromic(str) {
    let revStr = str
    revStr = revStr.split("")
    for (var i = 0; i < revStr.length / 2; i++) {
        [revStr[i], revStr[revStr.length - 1 - i]] = [revStr[revStr.length - 1 - i], revStr[i]]
    }
    revStr = revStr.join("")
    
    if (str === revStr) {
        return "it is palindromic."
    }
    else {
        return "This string is not palindrom."
    }
}
console.log(palindromic("levels"));