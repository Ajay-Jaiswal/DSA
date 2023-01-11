let arr = [-1, 0, -2, 1, 0, 9, -7, 0, 1, 5, 0]


function moveZeroLast(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] != 0) {
                    let temp;
                    temp = arr[j]
                    arr[j] = arr[i]
                    arr[i] = temp
                }
            }
        }
    }
    return arr
}
console.log(moveZeroLast(arr))


function moveZeroFirst(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] != 0) {
                    let temp;
                    temp = arr[j]
                    arr[j] = arr[i]
                    arr[i] = temp
                }
            }
        }
    }
    return arr
}
console.log(moveZeroFirst(arr))

