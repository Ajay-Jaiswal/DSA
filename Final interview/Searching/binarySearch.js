// it is devide devide in two part then find its time complexity is best case O(1) and worst case is O(n)

/*
let arr = [1,2,3,45,6,7,89,8]
let k = 45
function binarySearch(arr,left,right, k){
    var mid = 0
    
        mid = (left + right)/2
    
    if(k == arr[mid]){return mid}

    else if(k > arr[mid]){
        return binarySearch(arr, mid-1,right,k)
    }
    else if(k<arr[mid]){
        return binarySearch(arr, left,mid+1,k)
    }

    return false
}
console.log(binarySearch([1,2,3,4,5,6],4))
*/

function binary(arr,num){
    debugger
    let min = 0
    let max = arr.length
    while(min<=max){
        let midIndex = Math.floor((min+max)/2)
        if(arr[midIndex]<num){
            min = midIndex + 1
        }
        else if(arr[midIndex]>num){
            max = midIndex - 1
        }
        else{
            return midIndex
        }
    }
    return -1
}
console.log(binary([1,2,3,4,5,6,7,8,9,10],8))
