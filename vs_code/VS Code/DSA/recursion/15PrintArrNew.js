const arr= [2,3,4,5] //=2,3,4,5
function printArrayRecusive(arr,index){
    if(index>=arr.length){
        return 
    }
    console.log(arr[index])
    index=index+1
   printArrayRecusive(arr,index)
}
printArrayRecusive(arr,0)




const arr= [2,3,4,5] //5,4,3,2
function printArrayRecusive(arr,index){
    if(index>=arr.length){
        return 
    }
    index=index+1
   printArrayRecusive(arr,index)
   console.log(arr[index-1])
}
printArrayRecusive(arr,0)