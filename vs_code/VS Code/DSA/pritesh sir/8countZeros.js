// count zero without inbuild method and conditional operator
// let arr = [0,0,1,1,0,0];
// function countZeros(arr){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     return arr.length-sum
// }
// console.log(countZeros(arr))


let arr = [0,0,2,2,0,0];
function countZeros(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return arr.length-sum/2
}
console.log(countZeros(arr))



// [3,3,2,2,3,3] numbers of two?