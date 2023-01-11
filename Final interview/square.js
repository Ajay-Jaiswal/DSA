function square(array1,array2){
    debugger
    
    for(let i=0;i<array1.length;i++){

        for(let j=0;j<array2.lenght;j++){
            let isSquare = false

        if(array1[i]*array1[i] === array2[j]){
         isSquare =  true
        }
        if(j === array2.length -1){
            if(!isSquare){
                return false
            }
        }
    }
}
return true
}


console.log(square([1,2,3,4],[1,4,9,25]))