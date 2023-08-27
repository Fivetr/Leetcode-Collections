import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an array prices where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.
</p>
<p class='mt-4'>
Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:
</p>
<p class='mt-4'>
After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
</p>
<p class='mt-4'>
<strong>Note</strong>: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "prices = [1,2,3,0,2]",
    outputText: "3",
    explanation: "transactions = [buy, sell, cooldown, buy, sell].",
  },
  {
    id: 2,
    inputText: "prices = [1]",
    outputText: "0",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ prices.length ≤ 5000</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ prices[i] ≤ 1000</code>
</li>  
`;

const starterCode = `/**
* @param {number[]} prices
* @return {number}
*/
var maxProfit = function(prices) {
  // Write your code here
};`;

const solution = {
  solution: `var maxProfit = function(prices) {
  // initializaiton
  let [coolDown, sell, hold] = [0, 0, Number.NEGATIVE_INFINITY];
  for( let stockPrice_Day_i of prices){
    let [prevCoolDown, prevSell, prevHold] = [coolDown, sell, hold];
    // Max profit of cooldown on Day i comes from either cool down of Day_i-1, or sell out of Day_i-1 and today Day_i is cooling day
    coolDown = Math.max(prevCoolDown, prevSell);
    // Max profit of sell on Day_i comes from hold of Day_i-1 and sell on Day_i
    sell = prevHold + stockPrice_Day_i;
    //  Max profit of hold on Day_i comes from either hold of Day_i-1, or cool down on Day_i-1 and buy on Day_i
    hold = Math.max( prevHold, prevCoolDown - stockPrice_Day_i );
  }
  // The action of final trading day must be either sell or cool down
  return Math.max(sell, coolDown);
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_BestTimeToBuyAndSellStockWithCooldown = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const prices = [[1, 2, 3, 0, 2], [1]];

    const answers = [3, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < prices.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(prices[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("BestTimeToBuyAndSellStockWithCooldown handler function error");
    throw new Error(error);
  }
};

export const BestTimeToBuyAndSellStockWithCooldown: Problem = {
  order: 3,
  id: "best-time-to-buy-and-sell-stock-with-cooldown",
  title: "Best Time to Buy and Sell Stock with Cooldown",
  difficulty: "Medium",
  category: "2-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "maxProfit(prices)",
  handlerFunction: handle_BestTimeToBuyAndSellStockWithCooldown,
};
