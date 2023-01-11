//find duplicate elements in an array

// const arr = [1,4,3,2,5,6,7,1,2,3,4,5]

// function returnDuplicates(arr){

//     let map = new Map();
//     for(let i=0; i<arr.length; i++){
        
//         if(map.get(arr[i])===undefined){
//             map.set(arr[i],1)
//         }else{
//             map.set(arr[i],map.get(arr[i])+1)
//         }
//     }
//     let result=[]
//     for(let item of map){
//         if(item[1]>1){
//             result.push(item[0])
//         }
//     }
// }
// returnDuplicates(arr)


function duplicates(arr){
    let freq = new Map()

    for(let i=0; i<arr.length; i++){
        if(freq.get(arr[i]) == undefined){
             freq.set(arr[i],1)
    }else{
        freq.set(arr[i], freq.get(arr[i])+1)
    }
    }

    let res = [];
    for(let pairs of freq){
        if(pairs[1] > 1)
        res.push(pairs[0])
    }
    return res
}

let c = duplicates([2,4,5,5,6,3,3,3,2])
console.log(c)
