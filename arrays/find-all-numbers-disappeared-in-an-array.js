/*
Problem: Find All Numbers Disappeared in an Array
Platform: LeetCode
Topic: Arrays
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

Goal:
Given an array of nums of n integers where each integer is in the range [1,n], return all integers in the range [1,n]
that do not appear in nums.

// Time Complexity: O(n)
// Space Complexity: O(n)

*/
var findDisappearedNumbers = function(nums) {
    
    const map = new Map();
    let missingNumbersArray = [];
    let range = nums.length;
    for(let i = 0;i<range;i++){
        map.set(nums[i], true);
    }
    for(let i=1; i<=range;i++){
        if(!map.has(i)){
            missingNumbersArray.push(i)
        }
    }
    return missingNumbersArray
};
// TEST EXAMPLE:
const nums = [4,3,2,7,8,2,3,1]
console.log(findDisappearedNumbers(nums); // [5,6]
