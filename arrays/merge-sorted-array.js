/*
Problem: Merge Sorted Array
Platform: LeetCode
Topic: Arrays
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/merge-sorted-array/

Goal:
Merge two sorted arrays nums1 and nums2 into nums1 in sorted order.

// Time Complexity: O((m + n)log(m + n))
// Space Complexity: O(m+n)

*/
var merge = function(nums1, m, nums2, n) {
let sortedarray = [...nums1.slice(0,m),...nums2]
sortedarray.sort((a,b)=>a-b);

nums1.length =0;
for(let i =0;i<m+n;i++){

nums1.push(sortedarray[i])
}

    return nums1
};
// TEST EXAMPLE:
const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
console.log(merge(nums1, m, nums2, n)); // [1,2,2,3,5,6]
