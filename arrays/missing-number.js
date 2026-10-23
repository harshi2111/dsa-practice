/*
Problem: Missing Number
Platform: LeetCode
Topic: Arrays
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/missing-number/description/

Goal:
Given an array nums containing n distinct numbers from the range [0,n], return the only number in the range that is missing from the array.

// Time Complexity: O(n)
// Space Complexity: O(1)

*/
var missingNumber = function(nums) {
    let range = nums.length
    let totalSum = [range * (range+1)]/2;
    let sum = 0;
    for(let i = 0;i<range;i++){
        sum+= nums[i];
    }
    return totalSum - sum;
    
};
// TEST EXAMPLE:
const nums = [9,6,4,2,3,5,7,0,1]
console.log(missingNumber(nums); // 8
