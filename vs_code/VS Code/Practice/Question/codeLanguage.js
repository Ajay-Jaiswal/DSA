let str = "Hello, World!"   // Output - Uryyb, Jbeyq!
let str1 = "There are 23 Cats"  // Output - Gurer ner 23 Pngf

let output = "";
for (let i = 0; i < str.length; i++) {
    let asciiValue = str.charCodeAt(i)

    if (asciiValue >= 65 && asciiValue <= 77) {
        let asciiChar = String.fromCharCode(asciiValue + 13)
        output = output + asciiChar
    }
    else if (asciiValue >= 78 && asciiValue <= 90) {
        let asciiChar = String.fromCharCode(asciiValue - 13)
        output = output + asciiChar
    }
    else if (asciiValue >= 97 && asciiValue <= 109) {
        let asciiChar = String.fromCharCode(asciiValue + 13)
        output = output + asciiChar
    }
    else if (asciiValue >= 110 && asciiValue <= 122) {
        let asciiChar = String.fromCharCode(asciiValue - 13)
        output = output + asciiChar
    }
    else {
        output = output + str[i]
    }

}
console.log(output)