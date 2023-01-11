let arr = [1,2,3,3,4,5,6,7,7,7]

function duplicate(arr){
   var aj = {}
   for(let i=0;i<arr.length;i++){
    if(aj[arr[i]] === undefined){
        aj[arr[i]] = 1
    }
    else{
        aj[arr[i]] += 1
    }
}

}

console.log(duplicate(arr))
