import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an integer array <code>coins</code> representing coins of different denominations 
and an integer <code>amount</code> representing a total amount of money.
</p>
<p class='mt-4'>
Return <em>the fewest number of coins that you need to make up that amount</em>. 
If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.
</p>
<p class='mt-4'>
You may assume that you have an infinite number of each kind of coin.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "coins = [1,2,5], amount = 11",
    outputText: "3",
    explanation: "11 = 5 + 5 + 1",
  },
  {
    id: 2,
    inputText: "coins = [2], amount = 3",
    outputText: "-1",
  },
  {
    id: 3,
    inputText: "coins = [1], amount = 0",
    outputText: "0",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ coins.length ≤ 12</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ coins[i] ≤ 2<sup>31</sup> - 1</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ amount ≤ 10<sup>4</sup> - 1</code>
</li>  
`;

const starterCode = `/**
* @param {number[]} gas
* @param {number[]} cost
* @return {number}
*/
var coinChange = function(coins, amount) {
  // Write your code here
};`;

const solution = {
  solution: `var coinChange = function(coins, amount) {
  const dp = Array(amount+1).fill(amount+1);
  dp[0] = 0;
  for( let coin of coins ){
    for( let i = coin ; i <= amount ; i++ ){
      dp[i] = Math.min(dp[i] , dp[i-coin] + 1);
    }
  }
  const ans = dp[dp.length - 1];
  return ans == amount+1 ? -1 : ans;
};`,
  time_complexity: `n*amount`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_CoinChange = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const coins = [[1, 2, 5], [2], [1]];
    const amounts = [11, 3, 0];

    const answers = [3, -1, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < coins.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(coins[i], amounts[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("CoinChange handler function error");
    throw new Error(error);
  }
};

export const CoinChange: Problem = {
  order: 8,
  id: "coin-change",
  title: "Coin Change",
  difficulty: "Medium",
  category: "1-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "coinChange(coins, amount)",
  handlerFunction: handle_CoinChange,
};
