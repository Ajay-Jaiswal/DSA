let arr = [1, 2, 3, 17, 59, 14, 13, 19, 22]
let primeArr = []

for (let i = 0; i < arr.length; i++) {

    let isPrime = true;
    if (arr[i] < 2) {
        isPrime = false
    }

    for (let j = 2; j < arr[i] / 2; j++) {
        if (arr[i] % j == 0) {
            isPrime = false;
        }
    }

    if (isPrime == true) {
        primeArr.push(arr[i])
    }
}

console.log(primeArr)