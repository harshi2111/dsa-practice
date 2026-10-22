/*
Problem: Two Sum
Platform: LeetCode
Topic: Arrays
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/two-sum/

Goal:
Given an array of integers nums and an integer target, return the indices of two distinct elements whose sum equals the target.

Approaches:
1.Brute Force - my initial approach
2.Hash Map - optimized approach

Key Learning:
The brute-force approach checks pairs of elements.
The hash map approach uses previously seen numbers to find the complement more efficiently
*/

// APPROACH 1: BRUTE FORCE
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var twoSumBruteForce = function(nums, target) {
    let len = nums.length
    if(len<2){
        return []
    }
    let sum = 0;
    for(let i = 0; i<nums.length;i++){
        sum += nums[i]+nums[i+1];
        if(sum == target){
            return [i, i+1]
        }else{
            sum = 0;
            for(let y = i+1; y<nums.length;y++){
                sum+= nums[y] +nums[y+1]
                if(sum == target){
                    return [y, y+1]
                }}}}};

// APPROACH 2: HASH MAP
// Time Complexity: O(n)
// Space Complexity: O(n)

var twoSumHashMap = function(nums, target) {
    const map = new Map();  
  // Stores numbers we've seen as keys, and their indices as values
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // What number do we need to reach the target?

        If the complement is already in our map, we found our pair!
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        Otherwise, store the current number and its index, then keep moving forward
        map.set(nums[i], i)}};

// TEST EXAMPLE:
const nums = [2,7,11,15];
const target = 9;

console.log(twoSumBruteForce(nums, target)); // [0,1]
console.log(twoSumHashMap(nums, target)); // [0,1]
