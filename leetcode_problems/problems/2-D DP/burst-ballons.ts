import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given n balloons, indexed from <code>0</code> to <code>n - 1</code> . Each balloon is painted with 
a number on it represented by an array <code>nums</code>. You are asked to burst all the balloons.
</p>
<p class='mt-4'>
If you burst the <code>i<sup>th</sup></code> balloon, you will get <code>nums[i - 1] * nums[i] * nums[i + 1]</code> coins. 
If <code>i - 1</code> or <code>i + 1</code> goes out of bounds of the array, then treat it as if there is a 
balloon with a <code>1</code> painted on it.
</p>
<p class='mt-4'>
Return <em>the maximum coins you can collect by bursting the balloons wisely</em>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "nnums = [3,1,5,8]",
    outputText: "167",
    explanation:
      "\nnums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []\ncoins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167",
  },
  {
    id: 2,
    inputText: "nums = [1,5]",
    outputText: "10",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>n == nums.length</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ 300</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ nums[i] ≤ 100</code>
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
var maxCoins = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var maxCoins = function(nums){

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_BurstBalloons = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [3, 1, 5, 8],
      [1, 5],
    ];

    const answers = [167, 10];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("BurstBalloons handler function error");
    throw new Error(error);
  }
};

export const BurstBalloons: Problem = {
  order: 9,
  id: "burst-balloons",
  title: "Burst Balloons",
  difficulty: "Hard",
  category: "2-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "maxCoins(nums)",
  handlerFunction: handle_BurstBalloons,
};
