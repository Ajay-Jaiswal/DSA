function PrintNumber(start,end){
    console.log(start);
    if(start < end){
        PrintNumber((start + 1),end)
    }
}

PrintNumber(1,100)