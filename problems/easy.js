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

/***************************************************************** */

//5201. Watering Plants
//Example 1:
// Input: plants = [2,2,3,3], capacity = 5
// Output: 14

//Example 2
// Input: plants = [1,1,1,4,2,3], capacity = 4
// Output: 30

//Example 3:
// Input: plants = [7,7,7,7,7,7,7], capacity = 8
// Output: 49

// var wateringPlants = function(plants, capacity) {
//     let len = plants.length;
//   let t = capacity;
  
//   let step = 0;
//   let flag = false;
//     for (let i = 0; i < len; i++) {
//     if (capacity < plants[i]) {
//     	flag = true;
//       capacity = t;
//     }
//   	if (flag) {
//     	step = step + (i + 1) + i;
//       flag = false;
//     } else {
//     	step++;
//     }
//     capacity = capacity - plants[i];
    
//   }
  
// 	return step;
// };

// console.log(wateringPlants(plants, capacity));


/*************************************************************** */
/**
 * 1614. Maximum Nesting Depth of the Parentheses
 * 
 * Example 1:
 * Input: s = "(1+(2*3)+((8)/4))+1"
 * Output: 3
 * Explanation: Digit 8 is inside of 3 nested parentheses in the string.
 * 
 * Example 2:
 * Input: s = "(1)+((2))+(((3)))"
 * Output: 3
 */

// let s = "(1+(2*3)+((8)/4))+1"; // 3
//  var maxDepth = function(s) {
//     let res = 0;
//     let count = 0; 
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == '(') count++;
//         if (s[i] == ')') count--;
        
//         res = res > count ? res : count;
//     }
    
//     return res;
// };

// console.log(maxDepth(s))