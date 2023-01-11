// function getSumPairZero(arr){
//     let left=0;
//     let right = arr.length-1;
//     while(left<right){
//         sum=arr[left]+arr[right];
//         if(sum==0){
//             return [arr[left],arr[right]]
//         }else if(sum>0){
//             right--;
//         }else{
//             left++
//         }
//     }
//     return -1 
// }
// console.log(getSumPairZero([-5,-4,-3,-2,0,3,4,5,6,8]))




function getSumPairZero(arr){
    let i =0;
    let j=arr.length-1;
    while(i<j){
        sum=arr[i]+arr[j]
        if(sum===0){
            return [arr[i],arr[j]]

        }else if(sum>0){
            j--
        }else{
            i++
        }
    }
}

console.log(getSumPairZero([-5,-4,-3,-2,0,3,4,5,6,8]))