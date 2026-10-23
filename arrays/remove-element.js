/*
Problem: Remove Element
Platform: LeetCode
Topic: Arrays
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/remove-element/description/

Goal:
Remove all occurrences of a given value from the array in-place and return the number of remaining elements.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

*/
var removeElement = function(nums, val) {
    
    for(let i =nums.length-1; i>=0;i--){
        if(nums[i] == val){
            nums.splice(i, 1)
        }
    }
    return nums.length
};
// TEST EXAMPLE:
const nums = [0,1,2,2,3,0,4,2]
console.log(removeElement(nums, 2)); // [0,1,3,0,4]
