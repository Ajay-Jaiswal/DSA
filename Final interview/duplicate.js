let ar = [1,2,3,4,5,4,7,5,8,8,8]

function findduplicate(arr){
    let m = new Map()
    for(let i=0;i<arr.length;i++){
        if(m.get(arr[i])===undefined){
            m.set(arr[i],1)
        }else{
            m.set(arr[i],m.get(arr[i])+1)
        }
    }
    let result =[]
    for(let item of m){
        if(item[1]>1){
            result.push(item[0])
        }
    }
    return result
}
console.log(findduplicate(ar))