console.log('medium');

// 540. Single Element in a Sorted Array

//Example 1:
// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// let nums = [1,1,2,3,3,4,4,8,8];

// Example 2:
// Input: nums = [3,3,7,7,10,11,11]
// Output: 10


// var singleNonDuplicate = function(nums) {
//     let obj = {};
    
//     for (let i = 0; i < nums.length; i++) {
//     	if (obj[nums[i]] === nums[i]) {
//       	delete obj[nums[i]];
//       } else {
//       	obj[nums[i]] = nums[i];
//       }
//     }
    
//    return Object.values(obj)[0];
// };

// console.log(singleNonDuplicate(nums));