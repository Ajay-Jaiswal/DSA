//checks whether a number is prime or not 
// prome number (a number divided by itself and 1 only is prime) (2,3,5,7,11,13,17...)

function isPrime(number){
    for(let i=2; i<=parseInt(Math.sqrt(number));i++){
        if(number%i===0){
            return false
        }
    }
    return true;
}
// console.log(isPrime(326736736547), Marh.sqrt(326736547))

// we need to print first thousand prime number;
 
// function first1000PrimeNumber(){
//     let count =0;
//     let number=2;
//     while(count<20){
//         if(isPrime(number)){
//             count++;
//             console.log(`${count} prime number is ${number}`)
//         }
//         number++
//     }
// }
// first1000PrimeNumber()

//time complexity (time taking to run the code )
// space compesity (over all space taken by the algoritm code or funciton )

function first1000PrimeNumber(){
    let num = 2;
 for(let i=1;i<20;i++){
     if(isPrime(num)){
         console.log(`${num}`)
       i++
     }
     i--
    
     num++
 }
    
}
first1000PrimeNumber()