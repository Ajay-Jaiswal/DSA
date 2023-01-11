
// function counting(array){
//     let map = {}
//     for(let i=0;i<array.length;i++){
//         if(map[array[i]]==undefined){
//         map[array[i]] = 1
//         }
//         else{map[array[i]] += 1}
//     }
//     return map
// }

// console.log(counting(['a','b','c','d','e','a','b','c','a']))


function calculateTotal(banks){
    let totalAmount = 0;
    for(let balance of banks){
        totalAmount +=balance;
    }
    return totalAmount;
}

function calculateRichestPerson(accounts){
    let maxAmount =-Infinity;

    for(let customer of accounts){
        maxAmount = Math.max(calculateTotal(customer),maxAmount);
    }
    return maxAmount;
}
console.log(calculateRichestPerson([1,2,3],[3,2,4],[4,5,6]))