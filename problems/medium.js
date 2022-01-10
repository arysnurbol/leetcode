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





/**************************************************************** */
/**
 * 56. Merge Intervals
 * 
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 * 
 * Example 2:
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

// let intervals = [[1,3],[2,6],[8,10],[15,18]]; // [[1,6],[8,10],[15,18]]

// let intervals = [[1,4],[4,5]]; // [[1,5]]

// let intervals = [ [1,4], [0,0] ]; // [ [0, 0], [1,4] ];

//let intervals = [[1,4],[0,4]]; // [[0, 4]];

// let intervals = [[1,4],[0,2],[3,5]]; // [ [0, 5] ];

// const merge = function(intervals) {
//     if (intervals.length < 2) return intervals;
  
//   let result = [];
//     intervals.sort((a, b) => a[0] - b[0] );
//     for (let interval of intervals) {
//         if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
//             result.push(interval);
//         } else {
//             result[result.length - 1][1] = Math.max(result[result.length -1][1], interval[1]);
//             result[result.length - 1][0] = Math.min(result[result.length -1][0], interval[0]);
//         }
//     }
//     return result
// };

// console.log(merge(intervals));



/************************************************************************************************ */

/**
 * 209. Minimum Size Subarray Sum
 * 
 * Example 1:
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 * 
 * Example 2:
 * Input: target = 4, nums = [1,4,4]
 * Output: 1
 * 
 * Example 3:
 * Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 * Output: 0
 */
// let target = 7, nums = [2,3,1,2,4,3];
//  var minSubArrayLen = function(target, nums) {
//     let max = -Infinity;
//     let hashMap = {};
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];

//         if (sum === target) {
//             hashMap[i++] = i++;
//             max = Math.max(max, hsahMap[i++]);
//         }
//     }

//     return max;
// };

// console.log(minSubArrayLen(target, nums))


/********************************************************************************** */
/**
 * 48. Rotate Image
 * 
 * Example 1:
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[7,4,1],[8,5,2],[9,6,3]]
 * 
 * Example 2:
 * Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 */

// let matrix = [[1,2,3],[4,5,6],[7,8,9]];

//  var rotate = function(matrix) {
//     let n = matrix.length;
//   for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
//   	for (let j = 0; j < Math.floor(n / 2); j++) {
//     	let temp = matrix[n - 1 - j][i];
//       matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
//       matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 -i];
//       matrix[j][n - 1 - i] = matrix[i][j];
//       matrix[i][j] = temp;
//     }
//   }
  
//   return matrix;
// };

// console.log(rotate(matrix))

/****************************************************************************************** */
/**
 * 1886. Determine Whether Matrix Can Be Obtained By Rotation
 * 
 * Example 1:
 * Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
 * Output: true
 * Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.
 * 
 * Example 2:
 * Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
 * Output: false
 * Explanation: It is impossible to make mat equal to target by rotating mat.
 * 
 * Example 3:
 * Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
 * Output: true
 * Explanation: We can rotate mat 90 degrees clockwise two times to make mat equal target.
 */

// let  mat = [[0,1],[1,0]], target = [[1,0],[0,1]];

// let mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]];

// let mat = [[0,0],[0,1]], target = [[0,0],[1,0]];

let mat = [ [1,2,3], [4,5,6], [7,8,9] ], target = [[7,4,1],[8,5,2],[9,6,3]]; 

 var findRotation = function(mat, target) {
    
    let n = mat.length;
    let rotate = [];
    for (let i = 0; i < n; i++) rotate.push([]);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) { 
            rotate[j].unshift(mat[i][j]);
        }
    }
    console.log(rotate)
    return true;
};

console.log(findRotation(mat, target));