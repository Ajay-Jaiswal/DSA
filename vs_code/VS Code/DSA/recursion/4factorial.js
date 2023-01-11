function factorial(n){
    if(n===1 || n===0){
        return 1
    }
    let nFact= n*factorial(n-1)
    return nFact;
};
console.log(factorial(3))