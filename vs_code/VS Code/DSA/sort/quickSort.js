

// function partition(arr, low, high) {
//     let pivot = arr[high];
//     let i = low - 1;
//     for (let j = low; j < high; j++) {
//         if (arr[j] <= pivot) {
//             i++;
//             let tmp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = tmp;
//         }
//     }
//     let tmp = arr[i+1];
//     arr[i+1] = arr[high];
//     arr[high] = tmp;;
//     return i + 1;
// }




function partition(arr,low,high){
    let left=low;
    let right=high;
    let pivot=arr[high]
    
    while(left<right){

        while(left<right && arr[left]<pivot){       
            left++;
        }

        while(left<right && arr[right]>=pivot){
            right--;
        }
        if(left<right){
            [arr[left],arr[right]]=[arr[right],arr[left]]
        }
    }
    [arr[left],arr[high]]=[arr[high],arr[left]]
    return left;
}


function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low <= high) {
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}
let arr=[5, 9, 2, 0, 4, 1, 3,11,2,0]
console.log(quickSort(arr,0,arr.length-1));