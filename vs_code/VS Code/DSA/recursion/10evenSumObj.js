function evenSum(obj){
    let sum=0;
    for(let key in obj){
        if(obj[key]!==null && typeof(obj[key])=== "object"){
            sum+=evenSum(obj[key])
        }
        else if(typeof(obj[key])==="number"){
            if(obj[key]%2===0){
                sum+=obj[key]
            }
        }
    }
    return sum
}

let obj= {
    outer:2,
    obj:{
        inner:2,
        otherObj:{
            superNubmer:8,
            notNumber:true,
            notEven:7
        }
    }
}
console.log(evenSum(obj));
