
// function secondLargest(arr){
//     let  largest = arr[0];
//     let secondLargest = arr[arr.length-1];
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]>largest){
//             secondLargest= largest;
//             largest=arr[i]

//         }else if(arr[i]>secondLargest){
//             secondLargest=arr[i]
//         }
//     }
//     return secondLargest+largest;
// }

// console.log(secondLargest([2,5,6,2,3,4,6,7,10,9]))

function secondLargest(arr){
    let largest= arr[0]
    let secondLargest= arr[arr.length-1]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest=largest;
            largest=arr[i]
        }else if(arr[i]>secondLargest){
            secondLargest=arr[i]
        }
    }
    return secondLargest+largest;
}
console.log(secondLargest([40,2,3,4,5,44,3]))