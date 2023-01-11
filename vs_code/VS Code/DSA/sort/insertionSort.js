function insertionSort(arr){

    for(let i= 1; i < arr.length; i++){
        let curr = i;

        while(curr>=1 && arr[curr - 1] > arr[curr]){

            [arr[curr - 1], arr[curr]] = [arr[curr], arr[curr-1]];
            curr--;
        }
    }
}
const arr = [7,9,8,5,6,3,4,2,1,6]  
insertionSort(arr)                    

console.log(arr)