//Bubble Sort (Sorting..)
//A Sorting Algorithm where the largest values bubble up at the last

function bubbleSort(array) {
    for(let i=array.length; i>0; i--){
        //console.log(i);
        let isSwapped;
        for(let j=0; j<i-1; j++){
            if(array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return array;
}
const res = bubbleSort([8,1,2,3,4,5,6,7])
console.log(res)



