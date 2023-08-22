import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an array <code>prices</code> where <code>prices[i]</code> 
is the price of a given stock on the <code>ith</code> day.
</p>
<p class='mt-4'>
You want to maximize your profit by choosing a <strong>single day</strong> to 
buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.
</p>
<p class='mt-4'>
Return <em>the maximum profit you can achieve from this transaction</em>. 
If you cannot achieve any profit, return <code>0</code>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "prices = [7,1,5,3,6,4]",
    outputText: "5",
    explanation:
      "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. \nNote that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
  },
  {
    id: 2,
    inputText: "prices = [7,6,4,3,1]",
    outputText: "0",
    explanation:
      "In this case, no transactions are done and the max profit = 0.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ prices.length ≤ 10<sup>5</sup></code>
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
  let minPrice = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
      /* find the current minimum price p, since any prices after it that is 
         not less than p with have higher profit that previous min price*/
      minPrice = Math.min(minPrice, prices[i]);
      /* Since time can not go backward, we need to record the 
         maximum profit of each min price we encoutered*/
      profit = Math.max(profit, prices[i] - minPrice);
  }
  return profit;  
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
      [7, 6, 4, 3, 1],
    ];

    const answers = [5, 0];

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

export const BestTimeToBuyAndSellStock: Problem = {
  order: 1,
  id: "best-time-to-buy-and-sell-stock",
  title: "Best Time to Buy and Sell Stock",
  difficulty: "Easy",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "maxProfit(prices)",
  handlerFunction: handle_maxProfit,
};
