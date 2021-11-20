console.log('easy')

//1. Two Sum

//Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// let nums = [2,7,11,15], target = 9;

//Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// var twoSum = function(nums, target) {
//     let indxs = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             let a = target - nums[i];
            
//             if (nums[j] === a) {
//                 indxs.push(i,j);
//             }
//         }
//     }
    
//     return indxs;
// };

// console.log(twoSum(nums, target));