let cd = [1,2,3,4,5,6,7,8,9,7,5,7,9,1,3,7,5,7,9,5,6]

function mapA(arr){
    var map = new Map()
    for(let i=0; i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i] , 1)
        }
    }
    var arr = []
    map.forEach((value,key)=>{
        if(value > 1){
            arr.push(key)
        }
    })
    return arr
}
console.log(mapA(cd))

