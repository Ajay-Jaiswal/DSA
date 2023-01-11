// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.


// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2

let nums = [1,3,4,2,2];
let map = new Map();


for(let i=0;i<nums.length;i++){
    let freq=1;
    if(!map.has(nums[i])){
        map.set(nums[i],freq)
    }
    else{
        freq++
        map.set(nums[i],freq)
    }
}
console.log(map)

let max = 0;
for(let value of map.values()){
    if(value>max){
        max = value
    }
}

for(let [key,value] of map.entries()){
    if(value == max ){
        console.log(`Repeated Value in this arr is ${key}`)
    }
}

