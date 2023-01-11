nums = [-2,1,-3,4,-1,2,1,-5,4]

let sum = nums[0];
let maxSum = nums[0];

for(let i = 1; i < 9; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    console.log(sum)
    maxSum = Math.max(sum, maxSum);
    console.log(maxSum)
}