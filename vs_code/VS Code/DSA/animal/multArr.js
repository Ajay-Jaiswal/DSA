function calculateTotalSum(banks){
    let totalAmounts=0;
    for(let balence of banks){
        totalAmounts+=balence;
    }
    return totalAmounts
}

function calculateRichestPerson(accounts){
    let maxAmount=-Infinity;
    for(let customer of accounts){
        maxAmount = Math.max(calculateTotalSum(customer),maxAmount)
    }
    return maxAmount;
}

console.log(calculateRichestPerson([[2,8,1],[7,1,10],[1,9,5]]))