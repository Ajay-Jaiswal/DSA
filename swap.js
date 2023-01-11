//a= 10 , b = 4
function swap(a,b){
    return [a,b] = [b,a]
}
console.log(swap(10,4))


// swap array

function arrswap(arr){
    let left = 0
    let right = arr.length-1

    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]]

        left++
        right--
    }
     return arr
}
console.log(arrswap([2,4,5,8,7,6,8,4,9]))