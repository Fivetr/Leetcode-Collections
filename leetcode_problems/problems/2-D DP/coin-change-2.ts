import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an integer array <code>coins</code> representing coins of different denominations 
and an integer <code>amount</code> representing a total amount of money.
</p>
<p class='mt-4'>
Return <em>the number of combinations that make up that amount</em>. If that amount of money 
cannot be made up by any combination of the coins, return <code>0</code>.
</p>
<p class='mt-4'>
You may assume that you have an infinite number of each kind of coin.
</p>
<p class='mt-4'>
The answer is <strong>guaranteed</strong> to fit into a signed <strong>32-bit</strong> integer.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "amount = 5, coins = [1,2,5]",
    outputText: "4",
    explanation:
      "there are four ways to make up the amount:\n5=5\n5=2+2+1\n5=2+1+1+1\n5=1+1+1+1+1",
  },
  {
    id: 2,
    inputText: "amount = 3, coins = [2]",
    outputText: "0",
    explanation: "the amount of 3 cannot be made up just with coins of 2.",
  },
  {
    id: 3,
    inputText: "amount = 10, coins = [10]",
    outputText: "1",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ coins.length ≤ 300</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ coins[i] ≤ 5000</code>
</li>  
<li class='mt-3 text-sm'>
All the values of <code>coins</code> are <strong>unique</strong>.
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ amount ≤ 5000</code>
</li>  
`;

const starterCode = `/**
* @param {number} amount
* @param {number[]} coins
* @return {number}
*/
var change = function(amount, coins) {
  // Write your code here
};`;

const solution = {
  solution: `var change = function(amount, coins) {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_CoinChange2 = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const amounts = [5, 3, 10];
    const coins = [[1, 2, 5], [2], [10]];

    const answers = [4, 0, 1];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < amounts.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(amounts[i], coins[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("CoinChange2 handler function error");
    throw new Error(error);
  }
};

export const CoinChange2: Problem = {
  order: 4,
  id: "coin-change-2",
  title: "Coin Change 2",
  difficulty: "Medium",
  category: "2-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "change(amount, coins)",
  handlerFunction: handle_CoinChange2,
};
