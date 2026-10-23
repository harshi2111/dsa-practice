/*
Problem: Rotate Array
Platform: LeetCode
Topic: Arrays
Difficulty: Medium

Problem Link: 
https://leetcode.com/problems/rotate-array/

Goal:
Rotate the array to the right by k steps, where k is a non-negative integer.

// Time Complexity: O(n)
// Space Complexity: O(n)

*/
var rotate = function(nums, k) {
    // Handle cases where k is bigger than the array length
    k = k % nums.length;
    nums.unshift(...nums.splice(-k))
    return nums
};
// TEST EXAMPLE:
const nums = [1,2,3,4,5,6,7], k = 3
console.log(rotate(nums, k); // [5,6,7,1,2,3,4]
