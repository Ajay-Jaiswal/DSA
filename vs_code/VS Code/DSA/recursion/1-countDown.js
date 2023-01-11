function countDown(count){
    if(count==0){
        return
    }
    count--
    countDown(count)
    console.log(count)
}
countDown(9)