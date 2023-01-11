let arr =[1,1,1]
let max =min=arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]<min) min =arr[i]
    else if(arr[i]>max) max=arr[i]
}
console.log(min)
console.log(max)

