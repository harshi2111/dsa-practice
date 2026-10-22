/*
Problem: Single Number
Platform: LeetCode
Topic: Arrays
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/single-number/submissions/2178944162/

Goal:
Given a non-empty array of integers, every element appears twice except for one element that appears exactly once.
Return the element that appears only once.

// Time Complexity: O(n)
// Space Complexity: O(n)

*/
var singleNumber = function(nums) {
    const map = new Map();
    for(let i = 0; i<nums.length; i++){
        if(map.has(nums[i])){
            map.delete(nums[i])
        }
        else{
            map.set(nums[i], i)
        }
    }
 return map.keys().next().value;
};
// TEST EXAMPLE:
const  nums = [4,1,2,1,2]
console.log(singleNumber(nums)); // 4
