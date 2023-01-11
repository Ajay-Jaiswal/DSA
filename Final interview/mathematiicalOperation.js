
// Checking is prime number or Not
function isPrime(n){

    for(let i=2;i<parseInt(n/2);i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

console.log(isPrime(7))


// function isPrime2(number){
//     for(let i=2;i<Math.sqrt(number);i++){
//         if(number%i===0){
//             return false
//         }
//     }
// }

// // upto 1000 prime number
// function first1000PrimeNumber(){
//     let count = 0
//     let number = 2
//     while(count<1000){
//         if(isPrime(number)){
//         count++
//         console.log(`${count} prime number is ${number}`)
//         }
//         number++
//     }
    
// }
// first1000PrimeNumber()



// // find largest Number  

// function findLargest(arr){
//     for(let i=0;i<arr.length;i++){
//         var max = []
//         if(max<arr[i]){
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(findLargest([2,3,4,5,6,7,8,9,10,1,4,,15]))


// // find second largest Number
// function findSecondLargest(arr){
//     let max = []
//     let seconMax = []

//     for(let i=0;i<arr.length;i++){
       
//         if(max<arr[i]){
//             seconMax = max
//             max = arr[i]
//         }
//         else if(arr[i]>seconMax){
//             seconMax = arr[i]
//         }
//     }
//     return seconMax
// }

// console.log(findSecondLargest([2,3,4,5,6,7,8,9,10,1,4,,15]))

// function numPrimeArrangements(n) {
//     if(n==1 || n==0){
//         return 1
//     }
//     return n * numPrimeArrangements(n-1)
// };
// console.log(numPrimeArrangements(100))

// // is valid Number 
//  function isValidNumber(input=''){
//     let isNumber=true

//     for(let i=0;i<input.length;i++){
//         if(input[i]>='0' && input[i]<='9'){
//             continue;
//         }
//         else{
//             isNumber=false;
//             break;
//         }
//     }
//     return isNumber
//  }

//  console.log(isValidNumber("123456897454751256"))

//  function isValidNumberRegex(input=''){
//  const regex = new RegExp('^[0-9]+$')
//  return regex.test(input)
//  }

//  console.log(isValidNumber('12345678'))


// function removeDuplicates(arr){
//     const set = new Set(arr);
//     return [...set]
// }

// console.log(removeDuplicates([1,2,4,5,8,9,7,6,45,6,74,5,5,7]))


function isPrime(n){
    let arr = []
for(let j=2;j<n.length;j++){
    let curr = 2
    let s = j
   while(curr <  s){
    if(s%curr !== 0){
        arr.push(s)
    }
   }

}
return arr
}

console.log(isPrime(10))