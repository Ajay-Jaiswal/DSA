//  let str = "aA bB cC dD"
// Output = "Aa Bb Cc Dd"

let str = "aA bB cC dD"
let arr = str.split("")
let alphabets = "abcdefghijklmnopqrstuvwxyz"
let outputStr=""

for(let i=0;i<arr.length;i=i+3){
    if(alphabets.includes(arr[i])){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] =temp
    }
}
console.log(arr.join(""))