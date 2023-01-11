
// function sumDigits1(num){
//     if(num<10){
//         return num
//     }
//     console.log(num)
//     return num%10 + sumDigits1(parseInt(num/10))
// }
// console.log(sumDigits1(1012346855))

function sumDigits2(num){
    let sum = 0;
    while(num != 0){
    sum += num%10
    num = parseInt(num/10)
    }
    return sum;
}

const result = sumDigits2(97384)
console.log(result)