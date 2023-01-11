// let arr = [1,2,0,0]  //1200
// arr = arr.map(String)


// function numberGenerate(arr) {
//     let num=arr[0];
//     if(arr.length ==1) return num

//     return num.concat(numberGenerate(arr.slice(1)))
// }
// console.log(Number(numberGenerate(arr)))



// let arr1 = [1,2,3] //123
// console.log(Number(arr1.join("")))


// let arr = [1,2,3,4,5]  = 1*10000   + 2*1000 + 3*100 +   4*10  + 5*1

// function NumberGenerate(arr){
//     let length = arr.length-1
//     let num =0;
//     let i =0

//     while(i<arr.length  && length !=-1){
//         let mul = Math.pow(10,length)
//         num = arr[i]*mul  + num
//         i++;
//         length--;
//     }
//     console.log(num)
// }
// NumberGenerate(arr)




// // A = [1,2,0,0]   //Number 1200
// // B = [3,4,0,0]   //Number 3400
// // o/p
// // C = [4,6,0,0]   //Number 4600


let A = [1, 8, 9, 0]
let B = [3, 9, 9, 0]

// C = [5,7,0,0]
let C = []
let carry = 0
for (let i = A.length - 1; i >= 0; i--) {
    let num = A[i] + B[i] + carry

    if (num > 10) {
        carry = parseInt(num / 10)
        num = num % 10;
        C.unshift(num)
    }
    else{
        C.unshift(num)
    }
    console.log(C)
}

