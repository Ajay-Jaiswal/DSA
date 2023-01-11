// in a given string, reverse the first and the last word of that string
// let str = "i am nasri"  // string immutable hoti hai taki koi data change na kr de

function reverseString(str){
    let arr = str.split("")
    let left =0,right=arr.length-1;
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++;
        right--
    }
    return arr.join('')

}

function reverseFirstAndLastWord(str){
    let arr= str.split(" ");
    arr[0] = reverseString(arr[0]);
    arr[arr.length-1] = reverseString(arr[arr.length-1])
    return arr.join(' ')

}
console.log(reverseFirstAndLastWord("this is nasir")) // siht is risan

