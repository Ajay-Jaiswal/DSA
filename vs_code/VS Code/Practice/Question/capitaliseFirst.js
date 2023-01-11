let arr = ["amir", "tabish", "aafrin"]

function capitalisedFirstLetter(arr) {
    let result = []
    if(arr.length == 0) return result;
    let word = arr[0][0].toUpperCase() + arr[0].slice(1)
    result.push(word)
    return result.concat(capitalisedFirstLetter(arr.slice(1)))
}
console.log(capitalisedFirstLetter(arr))