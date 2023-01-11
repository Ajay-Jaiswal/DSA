
let arr = [10,2,45,1,21,14,1,1,0,23]

function merge(A, B) {
    let C = []
    let i = 0, j = 0, k = 0;
    let m = A.length, n = B.length

    while (i < m && j < n) {
        if (A[i] < B[j]) {
            C[k++] = A[i++];
        }
        else
            C[k++] = B[j++];
    }
    for (; i < m; i++) {
        C[k++] = A[i];
    }
    for (; j < n; j++) {
        C[k++] = B[j];
    }
    return C
}
// console.log(merge(left, right))

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = parseInt(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    return merge(left, right)
}
console.log(mergeSort(arr))