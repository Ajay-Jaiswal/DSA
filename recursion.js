// recursion for division by 7
function divBy7(arr){
    if(arr.length==0) return 1
    else{
        let ele = arr.pop()
        if(ele % 7 ==0){console.log(ele + ' : ' + "yes")}
        else {console.log(ele + ' : ' +'no')}
        divBy7(arr)
    }
}

divBy7([14,12,67,70,77,101,7,42,45])


//recursion for sum of n number
function sum(num){
    if(num == 1){return 1}
    return   num + sum(num-1)
}
console.log(sum(15))

//RECURSION SUM OF N EVEN NUMBER
function EvenSum(n){
    if(n === 1){ return 0}
    else if(n <= 0){
        return "No Sum"
    }
    return 2*n-2 + EvenSum(n -1)
}

const result = EvenSum(5)
console.log(result)

//factorization 
function fact(n){
    if(n==1) return 1
    return n*fact(n-1)
}
console.log("factorization " + fact(5))




// recurssion for fibonacci
function fibo(n){
    if(n <= 2) return 1
    return fibo(n-1)+ fibo(n-2)
}
console.log( fibo(5))


// recursion  in  reverse string
function reverse(str){
    if(str.length<= 1) return str
    return reverse(str.slice(1)) + str[0]
}
console.log(reverse('Ajay'))


// recursion for is palindrom checking
function isPlr(str){
    if(str.length <= 1)return true
    return (str[0] == str.slice(-1) && isPlr(str.slice(1, -1)))
}
console.log(isPlr('madam'))


// recursion for flattenArr
function flattenArr(arr){
    let flat = []
    for (var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i]) == false) flat.push(arr[i])
        else flat = flat.concat(flattenArr(arr[i]))
    }
    return flat
}   
console.log(flattenArr([1,2,4,[5,4,[7,8,9,[7,8]]]]))

// swap let a= 10 b= 4
function swap(x,y){
    x= y + x  //14
    y = x - y  //10
    x = x-y
    return (x, " ",  y)
}
console.log(swap(10,4))

// swap 2 
function swap(a,b){
   
    return [a,b] = [b,a]
}
console.log(swap(10,4))