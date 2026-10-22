/*
Problem: Contains Duplicate
Platform: LeetCode
Topic: Arrays, Hash sets
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/contains-duplicate/description/

Goal:
Return true if any element appears more than once.
Return false if all elements are distinct.

Approach:
SET - optimized approach

// APPROACH : Set
// Time Complexity: O(n)
// Space Complexity: O(n)

*/

var containsDuplicate = function(nums) {
    let noDuplicates = new Set(nums);
    if(nums.length == noDuplicates.size){
        return false
    }
    else{
        return true
    }};

// TEST EXAMPLE:
const nums = [2,7,7,4];
console.log(containsDuplicate(nums)); // true
