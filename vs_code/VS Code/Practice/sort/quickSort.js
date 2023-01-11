var arr = [10, 16, 8, 12, 15, 6, 3, 9, 5];

function partition(l, h, arr) {
    let pivot = arr[l];
    let i = l, j = h;
    while (i < j) {
        do {
            i++
        }
        while (arr[i] <= pivot);

        do {
            j--
        }
        while (arr[j] > pivot);

        let temp
        if (i < j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    temp = arr[j];
    arr[j] = arr[l];
    arr[l] = temp;

    return j;
}

function quickSort(l, h, arr) {

    if (l < h) {
        let j = partition(l, h, arr);
        quickSort(l, j, arr);
        quickSort(j + 1, h, arr)
    }
    return arr
}

console.log(quickSort(0, arr.length, arr))
