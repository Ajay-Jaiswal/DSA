let arr = [1,2,34,4,6]
function printArr(index){
    if(index<arr.length){
        console.log(arr[index])
        index++
        printArr(index)
    }
}
printArr(0)