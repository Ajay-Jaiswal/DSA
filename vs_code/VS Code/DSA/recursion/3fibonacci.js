//FIBONACCI :- previous 2 number sumation

//0,1,1,2,3,5,8         fibonacci number  3 = f2 + f1
//                    f(n) = f(n-1) + f(n-2)

function fibonacci(n){
    if(n==0){
        return 0
    }
    if(n==1|| n==2){
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(6))