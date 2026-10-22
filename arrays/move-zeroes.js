/*
Problem: Move Zeroes
Platform: LeetCode
Topic: Arrays
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/move-zeroes/description/

Goal:
Given an integer array nums, move all zeroes to the end of array while maintaining the relative order of the non-zero elements.
The operation must be performed in-place.

// Time Complexity: O(n)
// Space Complexity: O(1)

*/
var moveZeroes = function(nums) {
    let insertIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertIndex] = nums[i];
            insertIndex++;
        }
    }

    for (let i = insertIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};
// TEST EXAMPLE:
const nums = [0,1,0,3,12];
console.log(moveZeroes(nums)); // [1,3,12,0,0]
