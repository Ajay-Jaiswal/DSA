let array = ["ram", "sham", "vinod", "ram", "sham", "vindod", "ram", "sham","ram", "sham","ram"]

function secondHeihest(arr){
    debugger;
    let obj = {}
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]=== undefined){
            obj[arr[i]] = 1
        }
        else{
            obj[arr[i]] += 1
        }
        var first = 0
        var second = 0
        if(first<obj[arr[i]]){
            first = obj[arr[i]]
            second = first
        }
        if(obj[arr[i]]>second && obj[arr[i]]<first){
            console.log(obj[arr[i]])
            second = obj[arr[i]]
        }
    }
    
   
    return second
}
console.log(secondHeihest(array))



function getSecondHighest(arrCheck){
    var first=0,second=0;
    for(var i=0;i<arrCheck.length;i++){
        if(arrCheck[i] > first){
            second = first;
            first = arrCheck[i];
            //console.log(second)
        }
        else if(arrCheck[i]>second && arrCheck[i]<first){
            second = arrCheck[i];
           // console.log(second)
       } 
    }
    return second;
}
console.log(getSecondHighest([2,5,6,7,8,9,7,8,9,7,4,5,8,4,5,4,5,1,4,22,5,5,6,4,6,7,89,52,3,5,41]))