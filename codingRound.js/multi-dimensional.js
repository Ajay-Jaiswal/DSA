let array = [[],[],[]]
array[0][0] = 'fun'
array[0][1] = 'gun'
array[0][2] = 'run'

console.log(array)


function getdata(arr){
    let array = []
    var obj = {}
    for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]===undefined){
        obj[arr[i]] = 1
    }else{
        obj[arr[i]] += 1
    }
}
for(let i=0;i<obj.length;i++){
    console.log(obj[arr[i]] )
        if(obj[arr[i]] !== 1){
            array.push(arr[i])
        }
    }
    
    return array
}

console.log(getdata([1,2,3,4,5,6,7,9,8,8,8]))