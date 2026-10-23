/*
Problem: Remove Duplicates from Sorted Array
Platform: LeetCode
Topic: Arrays
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

Goal:
Given a sorted array nums, remove duplicates in-place so that each unique element appears only once.
Return k, the number of unique elements.
The first k positions of nums must contain the unique elements in their original sorted order.

// Time Complexity: O(n)
// Space Complexity: O(n)

*/
var removeDuplicates = function(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], true);
    }
    let index = 0;
    for (let key of map.keys()) {
        nums[index] = key;
        index++;
    }
    return map.size;
};
// TEST EXAMPLE:
const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums)); // 5 , [0,1,2,3,4,_,_,_,_,_]
