const arr= ["cat","dog","rat"] //=>[ 'Cat', 'Dog', 'Rat' ]
function capitalizeElem(arr,index){
    if(index<arr.length){
        arr[index]=arr[index][0].toUpperCase()+arr[index].slice(1)
        capitalizeElem(arr,index+1)
    }
}
capitalizeElem(arr,0);
console.log(arr);  


// const arr= ["cat","dog","rat"] //=>[ 'Cat', 'Dog', 'Rat' ]

// function capitalizeElem(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
//     }
//     return arr
// }
// console.log(capitalizeElem(arr))