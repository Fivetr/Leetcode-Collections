import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an integer array <code>nums</code> and an integer <code>target</code>.
</p>
<p class='mt-4'>
You want to build an <strong>expression</strong> out of nums by adding one of 
the symbols <code>'+'</code> and <code>'-'</code> before each integer in nums and then concatenate all the integers.
</p>
<p class='mt-4'>
For example, if <code>nums = [2, 1]</code>, you can add a <code>'+'</code> before 2 and a <code>'-'</code> before 1 and 
concatenate them to build the expression <code>"+2-1"</code>.
</p>
<p class='mt-4'>
Return the number of different <strong>expressions</strong> that you can build, which evaluates to <code>target</code>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,1,1,1,1], target = 3",
    outputText: "5",
    explanation:
      "There are 5 ways to assign symbols to make the sum of nums be target 3.\n-1 + 1 + 1 + 1 + 1 = 3\n+1 - 1 + 1 + 1 + 1 = 3\n+1 + 1 - 1 + 1 + 1 = 3\n+1 + 1 + 1 - 1 + 1 = 3\n+1 + 1 + 1 + 1 - 1 = 3",
  },
  {
    id: 2,
    inputText: "nums = [1], target = 1",
    outputText: "1",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 20</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ nums[i] ≤ 1000</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ sum(nums[i]) ≤ 1000</code>
</li>  
<li class='mt-3 text-sm'>
<code>-1000 ≤ target ≤ 1000</code>
</li>  

`;

const starterCode = `/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var findTargetSumWays = function(nums, target {
  // Write your code here
};`;

const solution = {
  solution: `var findTargetSumWays = function(nums, target {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_TargetSum = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [[1, 1, 1, 1, 1], [1]];
    const targets = [3, 1];

    const answers = [5, 1];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], targets[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("TargetSum handler function error");
    throw new Error(error);
  }
};

export const TargetSum: Problem = {
  order: 5,
  id: "target-sum",
  title: "Target Sum",
  difficulty: "Medium",
  category: "2-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "findTargetSumWays(nums, target)",
  handlerFunction: handle_TargetSum,
};
