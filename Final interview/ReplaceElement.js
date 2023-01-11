function replace(arr){
    let map = {}
    for(let el of arr){
        map[el]= map[el]+1 || 1
    }
    for(let i=0;i<arr.length;i++){
        arr[i] = arr.length - map[arr[i]]
    }
    return arr
}

console.log(replace([1,2,3,4,5,6,7,8,9],5))