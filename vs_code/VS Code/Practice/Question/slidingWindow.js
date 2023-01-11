let arr = [1, 2, 3, -1, 5, 3, 6, 7]
let windowSize = 3;
let totalWindow = arr.length - windowSize + 1
let max = arr[0];
let res = [];
let j = 0;


while (j < totalWindow) {
    let i;
    for (i =0; i < windowSize; i++) {
        if (max <= arr[i]) {
            max = arr[i]
        }
    }
    j++;
    windowSize++;
    res.push(max)
}
console.log(res)

