// Reverse Array(number) without using extra array (temp arr)

// let arr = [1,2,3,4,5]  // => [5,4,3,2,1]
// // pointer use kr ke swap krenge 1 ke jagah 5 aur vice versa;
// function reverse(arr){
//     let i=0;
//     let j=arr.length-1 //  5
//     while(i<j){
//         //keep swapping
//         arr[i]=arr[i] +arr[j] //1+5 || 2+4
//         arr[j]=arr[i] -arr[j] //6-5 || 6-4
//         arr[i]=arr[i]-arr[j]  //6-1 || 6-2
//         i++
//         j--
//     }
//     return arr
// }
// const reversArr =reverse(arr)
// console.log(reversArr)



// Using temp variable.
// let arr = [1,2,9,3,4,5]; //=>[5,4,3,2,1]

// function reversArr(arr){
//     let i=0;
//     let j= arr.length-1;
//     while(i<j){
//         let temp=arr[i]; //1
//         arr[i]=arr[j] // index 0 = 5
//         arr[j]=temp  // last index = 1
//         i++
//         j--
//     }
//     return arr
// }
// const ans = reversArr(arr)
// console.log(ans)


