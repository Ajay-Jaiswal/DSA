// Simplest and popular sorting algorithm
function bubbleSort(arr){
    for(let i = 0; i<=arr.length-1; i++){
        let swap = false
        for(let j = 0; j<=arr.length-2; j++){
            if(arr[j] > arr[j+1]){

                // swap
                arr[j] = arr[j] + arr[j+1]
                arr[j+1] = arr[j] - arr[j+1]
                arr[j] = arr[j] - arr[j+1]
                swap = true
            }
        }
        if(swap == false) break
    }
    return arr
}

console.log(bubbleSort([4, 1, 7, 5, 2, 6, 8]))

// TC=> best case:  O(n)
// worst case & average case: O(n^2)