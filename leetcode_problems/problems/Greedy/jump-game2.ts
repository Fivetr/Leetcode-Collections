import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given a <strong>0-indexed</strong> array of integers <code>nums</code> of length <code>n</code>. You are 
initially positioned at <code>nums[0]</code>.
</p>
<p class='mt-4'>
Each element <code>nums[i]</code> represents the maximum length of a forward jump from 
index <code>i</code>. In other words, if you are at <code>nums[i]</code>, you can jump to any <code>nums[i + j]</code> where:
</p>
<p class='mt-4'>
<code>0 <= j <= nums[i]</code> and
</p>
<p class='mt-4'>
<code>i + j < n</code>
</p>
<p class='mt-4'>
Return <em>the minimum number of jumps to reach</em> <code>nums[n - 1]</code>. 
The test cases are generated such that you can reach <code>nums[n - 1]</code>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [2,3,1,1,4]",
    outputText: "2",
    explanation:
      "The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.",
  },
  {
    id: 2,
    inputText: "nums = [2,3,0,1,4]",
    outputText: "2",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 10<sup>4</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ nums[i] ≤ 1000</code>
</li>  
<li class='mt-3 text-sm'>
It's guaranteed that you can reach <code>nums[n - 1]</code>.
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
var jump = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var jump = function(nums) {
    let current = -1, next = 0, ans = 0
    for (let i = 0; next < nums.length - 1; i++) {
      // Check if index were not between the current index (i) and i + N[i]
      if (i > current){
        ans++
        current = next
      }
      next = Math.max(next, nums[i] + i)
    }
    return ans
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_JumpGame2 = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [2, 3, 1, 1, 4],
      [2, 3, 0, 1, 4],
    ];

    const answers = [2, 2];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("JumpGame2 handler function error");
    throw new Error(error);
  }
};

export const JumpGame2: Problem = {
  order: 3,
  id: "jump-game-2",
  title: "Jump Game 2",
  difficulty: "Medium",
  category: "Greedy",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "jump(nums)",
  handlerFunction: handle_JumpGame2,
};
