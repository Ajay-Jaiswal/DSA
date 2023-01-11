let arr = [10,-2,2,-2,12,14,-8,8,5]
let min = 999999999999999
let a;
for(let i=0;i<arr.length;i++){
    if(Math.abs(arr[i])<=min){
        min = Math.abs(arr[i]);
        a=arr[i]
    }
}
if(arr.includes(-a)){
    console.log(-a)
}
console.log(a)