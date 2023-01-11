// find second largest value in array

function secondLargest(arr){
    let  largest = arr[0];
    let secondLargest = arr[arr.length-1];
    for(let i=0; i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest= largest;
            largest=arr[i]

        }else if(arr[i]>secondLargest){
            secondLargest=arr[i]
        }
    }
    return secondLargest;
}
console.log(secondLargest([2,5,6,2,3,4,9,6,7,10]))