/*
Problem: Plus One
Platform: LeetCode
Topic: Arrays
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/plus-one/description/

Goal:
Given an array of digits representing a non-negative integer, increment the integer by one and return the resulting array of digits.

// Time Complexity: O(n)
// Space Complexity: O(n)

*/
var plusOne = function(digits) {
    let aa = BigInt(digits.join('')) + 1n;
    digits = String(aa).split('').map(Number)
    return digits
};
// TEST EXAMPLE:
const digits = [4,3,2,1]
console.log(plusOne(digits); // [4,3,2,2]
