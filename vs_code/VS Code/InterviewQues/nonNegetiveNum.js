// "Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index."

let jumpArr = [2,3,1,1,4]

let lastIndex = jumpArr.length-1
let initialPostition = jumpArr[0]

let totalJump = 0;
let sum=0;
for(let i=0;i<jumpArr.length;i=i+jumpArr[i]){
    while(sum<=lastIndex){
        sum = sum+jumpArr[i]
        totalJump++
    }
}
console.log(totalJump)