/*
Problem: Valid Anagram
Platform: LeetCode
Topic: Strings
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/valid-anagram/description/

Goal:
Given two strings s and t, return true if t is an anagram of s and false otherwise.

Approaches:
1.Sorting(split, sort, join) - my initial approach
2.Hash Map - optimized approach

// APPROACH 1: SORTING
// Time Complexity: O(n log n)
// Space Complexity: O(n)
*/

var isAnagram = function(s, t) {

    if(s.split('').sort().join('') == t.split('').sort().join('')){
        return true
    }
    else{
        return false
    }
};

// APPROACH 2: HASH MAP
// Time Complexity: O(n)
// Space Complexity: O(1)

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);
    const charCodeA = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - charCodeA]++;
        count[t.charCodeAt(i) - charCodeA]--;
    }

    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) return false;
    }

    return true;
};

// TEST EXAMPLE:
let s = 'car', t = 'rat';
console.log(isAnagram(s,t)); // false
