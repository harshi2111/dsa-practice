/*
Problem: Majority Element
Platform: LeetCode
Topic: Arrays
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/majority-element/description/

Goal:
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than floor(n/2) times;
You may assume that the majority element always exists in the array.

// Time Complexity: O(n log n)
// Space Complexity: O(1)

*/
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    
    return nums[Math.floor(nums.length / 2)];
};
// TEST EXAMPLE:
const nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums)); // 2
