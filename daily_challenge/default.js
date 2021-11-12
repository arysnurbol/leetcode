//Unique Email Addresses
// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each email[i], return the number of different addresses that actually receive mails.

 
//Example 1:
// Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

//Example 2:
// Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// Output: 3

/**
 * @param {string[]} emails
 * @return {number}
 */
//  var numUniqueEmails = function(emails) {
//     let arr = [];
// 	for (let i = 0; i < emails.length; i++) {
//   	arr.push(emails[i].split('@'));
//   }
  
//   let set = new Set();
//   for (let i = 0; i < arr.length; i++) {
    
//     let s = valid(arr[i][i - i]);
//     let r = removeDot(s);
//     let email = r + '@' + arr[i][arr[i].length -1 ];
//     set.add(email);
//   }
  
//   function valid(str){
  
//   let isPlus = str.indexOf('+');
//   if (isPlus !== -1) {
//   	for (let i = 0; i < str.length; i++) {
//     	if (str[i] === '+') {
//       	return str.substring(0, i);
//       }
//     }
//   }else {
//   	return str;
//   }
  	
//   }
  
//   function removeDot(str) {
//     let isYesDot = str.indexOf('.');
    
//     if (isYesDot !== -1) {
//       return str.replace(/\./g, '');
//     }else {
//       return str;
//     }
//   }

// 	return set.size;
// };



/***************************************************************************************************** */
//21.10.2021
///380. Insert Delete GetRandom O(1)
//Medium

// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

//Example 1:
// Input:
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

const RandomizedSet = function() {
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
 RandomizedSet.prototype.insert = function(val) {
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
 RandomizedSet.prototype.remove = function(val) {
    
};

/**
 * @return {number}
 */
 RandomizedSet.prototype.getRandom = function() {
    
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

