// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// ------------------------------------------------------------------- 

let nums = [2,2,1,3];
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

let min = 999999999;
for(let value of map.values()){
    if(value<min){
        min =value
    }
}

for(let [key,value] of map.entries()){
    if(value == min ){
        console.log(`Unique Value in this arr is ${key}`)
    }
}