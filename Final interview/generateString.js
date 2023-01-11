function generate(number){

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let finalStr = ''
    let currIndex = 0
    while(currIndex < number){
        finalStr += alphabet[currIndex%26]
        currIndex++
    }
    return finalStr
}

console.log(generate(28))

function encodedNumberWithCharacter(arr){
    let c = []
    for(let i=0;i<arr.length;i++){
       c.push(generate(arr[i]))
    }
    return c
}
console.log(encodedNumberWithCharacter([1,9]))


// function encodedNumberWithCharacter(arr){
//     let maxNumber = Math.max(...arr);
//     let encodeArray=['']
//     for(let i=1;i<maxNumber;i++){
//         encodeArray.push(generate(i))
//     }
//     for(let i=0;i<arr.length;i++){
//         arr[i]=encodeArray[arr[i]]
//     }
// }

// console.log(encodedNumberWithCharacter([2,5,4,6,7,8]))