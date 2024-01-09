import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an array <code>prices</code> where <code>prices[i]</code> 
is the price of a given stock on the <code>ith</code> day.
</p>
<p class='mt-4'>
On each day, you may decide to buy and/or sell the stock. You can only hold <strong>at most</strong> one 
share of the stock at any time. However, you can buy it then immediately sell it on the <strong>same day</strong>.
</p>
<p class='mt-4'>
Find and return <em>the <strong>maximum</strong> profit you can achieve</em>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "prices = [7,1,5,3,6,4]",
    outputText: "7",
    explanation:
      "Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.\nThen buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.\nTotal profit is 4 + 3 = 7.",
  },
  {
    id: 2,
    inputText: "prices = [1,2,3,4,5]",
    outputText: "4",
    explanation:
      "Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.\nTotal profit is 4.",
  },
  {
    id: 3,
    inputText: "prices = [7,6,4,3,1]",
    outputText: "0",
    explanation:
      "There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ prices.length ≤ 3 * 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>0 ≤ prices[i] ≤ 10<sup>4</sup></code>
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
    let profit = 0;
    for (i = 1; i< prices.length; i++){
        // we make profit when we buy on low sell on high
        // prices[i - 1] < price[i]
        if(prices[i-1] < prices[i]){
            profit  += prices[i] - prices[i-1]
        }
    }
    return profit
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_maxProfit = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const prices = [
      [7, 1, 5, 3, 6, 4],
      [1, 2, 3, 4, 5],
      [7, 6, 4, 3, 1],
    ];

    const answers = [7, 4, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < prices.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(prices[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("maxProfit handler function error");
    throw new Error(error);
  }
};

export const BestTimeToBuyAndSellStock2: Problem = {
  order: 4,
  id: "best-time-to-buy-and-sell-stock-2",
  title: "Best Time to Buy and Sell Stock 2",
  difficulty: "Medium",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "maxProfit(prices)",
  handlerFunction: handle_maxProfit,
};
