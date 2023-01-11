//divide and conquer
//technique in which we divide problem into sub problem and solve the sub problems

//recursion (function calling itself with some termination condition)

//divide the problem into sub problem
//recursively solve the sub problems
//conquer (by combining their answers);

const arr = [1, 9, 6, 2, 7, 6, 3, 4, 6, 8, 9];

function mergeSort(arr, left, right) {

    if (left >= right) {
        return;
    }

    const mid = parseInt((left + right)/2);

    mergeSort(arr, left, mid);
    mergeSort(arr, mid+1, right);
    merge(arr, left, mid, right); //mid is actually divide array into two half logically one array is (left, mid) another is (mid+1, right)

}

function merge(arr, left, mid, right) {

    let n1 = mid - left + 1;
    let n2 = right - mid;

    const arr1 = new Array(n1);
    const arr2 = new Array(n2);

    for (let i = 0; i < n1; i++) {
        arr1[i] = arr[left + i];
    }

    for (let i = 0; i < n2; i++) {
        arr2[i] = arr[mid + i + 1];
    }

    let l_i = 0; r_i = 0;
    
    while (l_i < n1 && r_i < n2) {
        if (arr1[l_i] > arr2[r_i]) {
            arr[left] = arr2[r_i];
            r_i++;
        } else {
            arr[left] = arr1[l_i];
            l_i++;
        }
        left++;
    }

    //either arr1 exhaust or arr_2

    //if arr1 is empty  
    while (r_i < n2) {
        arr[left] = arr2[r_i];
        left++;
        r_i++;
    }

    //if arr2 is empty
    while (l_i < n1) {
        arr[left] = arr1[l_i];
        left++
        l_i++
    }
}

mergeSort(arr, 0, arr.length - 1);

console.log(arr);


//Time Complexity => O(n log n) //array divide ho rha hai 2 se //array divide ho rha hai log n times.