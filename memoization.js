
function data(n){

 var map = new Map()
    
    if(map.has(n)){
    var sum = map.get(n)
    }else{
    var sum = 0
    for(let i=0; i<=n; i++){
    sum += i

    }
    map.set(n,sum)
}
return sum
}



console.time()
console.log(data(5))
console.timeEnd()