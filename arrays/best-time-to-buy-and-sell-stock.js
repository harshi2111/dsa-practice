/*
Problem: Best Time to Buy and Sell Stock
Platform: LeetCode
Topic: Arrays
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/2178920592/

Goal:
Given an array of stock prices, find the maximum profit possible by buying on one day and selling on a later day.
If no profit possible, return 0.

// Time Complexity: O(n)
// Space Complexity: O(1)

*/
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } 
        else {
            let currentProfit = prices[i] - minPrice;
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }

    return maxProfit;
};
// TEST EXAMPLE:
const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices)); // 5
