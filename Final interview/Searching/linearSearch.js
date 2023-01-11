// it is search one by one its time complexity at best case is O(1) and worst case is O(n)
let arr =  [1,2,3,4,5,6,7,8,9]

function linearSearch(arr,k){
for(let i=0;i<arr.length;i++){
    if(arr[i]==k){
        return i
    }
}
return false
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,15],5))