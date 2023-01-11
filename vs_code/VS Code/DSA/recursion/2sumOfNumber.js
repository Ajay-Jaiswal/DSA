function sumOfNumber(n){
    if(n===0){
        return 0
    }
    return n+sumOfNumber(n-1)
}
console.log(sumOfNumber(10))