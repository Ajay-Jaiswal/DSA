
// function reverseString(arr,left,right){
//     if(left<right){
//         let temp = arr[left]
//         arr[left]= arr[right]
//         arr[right]=temp
//         reverseString(arr,left+1,right-1)
//     }
// }
// let str = "abcdefg";
// let arr = str.split("")
// reverseString(arr,0,arr.length-1)
// str= arr.join("")
// console.log(str)


// function reverseString(arr,left,right){
//     if(left<right){
//         let temp = arr[left]
//         arr[left]= arr[right]
//         arr[right]=temp
//         reverseString(arr,left+1,right-1)
//     }
//     return arr.join("")

// }
// let str = "abcdefg";
// let arr = str.split("")
// console.log(reverseString(arr,0,arr.length-1))


let str = "abcdefg";
let arr = str.split("")
function reverseString(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp;
        i++;
        j--;
    }
    // console.log(arr)
    return arr.join("") 
}
const ans = reverseString(arr)
console.log(ans)

