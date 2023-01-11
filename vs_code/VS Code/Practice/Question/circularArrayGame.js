let arr = [1, 2, 3, 4, 5, 6, 7]
let length = arr.length;
// if(length ==1) {
//     console.log(arr);
// }

for (let i = 0; i < length - 1; i++) {
    arr.shift();
    arr.push(arr[0]);
    arr.shift();

}
console.log(arr)




function game(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }

    let length = arr.length - 1;
    for (let i = 0; i < length; i++) {
        arr.shift();
        arr.push(arr[0]);
        arr.shift()
    }
    return arr
}
console.log(game(5))
