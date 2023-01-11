var arr = [1, 2, 4, 7, 5, 8, 99, 2, 201]

let max = arr[0]
let sMax = arr[1]
let temp;

if (max < sMax) {
    temp = max;
    max = sMax;
    sMax = temp;
}

for (i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        temp = max;
        max = arr[i];
        sMax = temp;
    }

    if (arr[i] < max && arr[i] > sMax) {
        sMax = arr[i]
    }
}
console.log(sMax)