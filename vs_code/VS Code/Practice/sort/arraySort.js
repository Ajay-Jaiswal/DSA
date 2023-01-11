let arr =[1,4,54,8,96,0]
let rev= []
for(let i=arr.length-1;i>=0;i--){
    // rev.push(arr[i])
    rev[rev.length] = arr[i]
}
console.log(rev)