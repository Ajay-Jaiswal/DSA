
function st(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr
}
console.log(st([2,3,4,5,6,8,7,1]))

let ab = [1,2,3,4,5,6,6,7,7,7,8,8]

function duplicate(arr){
    let map = {}
    for(let i=0; i<arr.length;i++){
        if(map[arr[i]] === undefined){
            map[arr[i]] = 1
        }else{
            map[arr[i]] += 1
        }
    }
    var result = []
    for(i in map){
      if(i[1]> 1){
        result.push(i[0])
      }
    }
    return result
}

console.log(duplicate(ab))