// given arr count negative numbers

function countNegative(arr){
    let count=0;
    for(let elem of arr){
        if(elem<0){
            count++;
        }
    }
    console.log(count)
}

countNegative([1,3,5,-3,-2,5]);