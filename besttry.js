// 2 value sum == k  by brute force
/*
function getsum(arr, k){

    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==k){
                return [arr[i],arr[j]]
            }
        }
    }
}

console.log(getsum([-5,-4,-3,-2,-1,0,1,2,3,4,5], 0))
*/

// By using o(n) complexity get sum == k
function getsum2(arr, k){
    let left = 0
    let right = arr.length-1
    while(left<right){
        sum = arr[left]+ arr[right]
        if(sum == k){
            return [arr[left],arr[right]]
        }
        else if(sum>k){
            right--
        }
        else{
            left ++
        }
    }
}

console.log(getsum2([-5,-4,-3,-2,-1,0,1,2,3,4,5], 7))


function isAnagram(s1,s2){
    if(s1.length !== s2.length){
        return false
    }
    let counter = {}
    for(let letter of s1){
        counter[letter] = (counter[letter] || 0) +1
        console.log(counter[letter])
    }
    for(let items of s2){
        if(!counter[items]){
            return false
        }
        counter[items] -= 1
    }
    
    return true   
}

console.log(isAnagram('hello', 'olleh'))

function findlargest(arr, num){
    // arr - num +1
    if(num>arr){
        return "array is less than num"
    }
    else{
        var max = 0
        for(let i=0;i<arr.length-num+1;i++){
            let temp = 0;
            for(let j=0;j<num;j++){
                temp += arr[i+j]
                console.log(temp)
            } 
            if(temp >max){
                max = temp;
            }
        }
    }
    return max
}

console.log(findlargest([2,4,7,8,6,5,8,7,5,6,7], 3))