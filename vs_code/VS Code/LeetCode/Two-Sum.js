// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

// let arr = [2,7,9,10,11];
// let target = 19;

// function sum(arr, target){
//     let a = []
//     for(let i = 0;i<arr.length;i++){
//         let element =  arr[i]
//         a[element] = i
//         console.log(a)
//         if(a[target-element]!=null){
//             return [a[target-element],i]
//         }
//     }
// }
// console.log(sum(arr,target))


// let a = []
// for(let i=0;i<arr.length;i++){
//     secElement = target-arr[i]
//     if(arr.includes(secElement)){
//         a.push(i)
//     }
// }

// console.log(a)

var twoSum = function (nums, target) {
    var map = new Map();

    for (var i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        else{
            map.set(nums[i], i)
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 22))

