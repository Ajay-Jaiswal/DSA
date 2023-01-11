let arr = [1, 2, 3, 10, 20, 30, 40, 50, 60, 70]
let num = 10;

const binarySearch = function (arr, num) {
    let min = 0;
    let max = arr.length - 1;


    while (min <= max) {
        let mid = Math.floor((min + max) / 2)
        if (num < arr[mid]) {
            max = mid - 1
        }
        else if (num > arr[mid]) {
            min = mid + 1;
        }
        else {
            return `The index of the element is -----> ${mid}`;
        }
    }
    return -1;
}
console.log(binarySearch(arr, num))