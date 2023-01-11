//  Infinte Carrying 
//  console.log(add(5)(6)(7)(8)())



function add(a){
    return function (b){
        if(b){
            return add(a+b)
        }
        return a
    }
}
console.log(add(5)(10)(30)(40)(50)(100)(1)(2)())


function apple(a,arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i]
    }
    if(sum%5 !=0){
        return "No"
    }

    let average = sum/a;
    let arr1 = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]<average){
            let dif = average-arr[i]
            arr1.push(dif)
        }
        if(arr[i]>average){
            let dif = arr[i] - average
            arr1.push(dif)
        }
    }

    for(let i=0;i<arr1.length-1;i++){
        if(arr1[i]!=arr1[i+1]){
            return "Yes"
        }
    }
    return "No"
} 
console.log(apple(5,[1,2,3,4,5]))
