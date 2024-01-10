import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an array of positive integers <code>nums</code> and a positive integer <code>target</code>, return the <strong>minimal length</strong> of a 
subarray whose sum is greater than or equal to <code>target</code>. If there is no such subarray, return <code>0</code> instead.
<p class='mt-4'>

`;

const examples = [
  {
    id: 1,
    inputText: "target = 7, nums = [2,3,1,2,4,3]",
    outputText: "2",
    explanation:
      "The subarray [4,3] has the minimal length under the problem constraint.",
  },
  {
    id: 2,
    inputText: "target = 4, nums = [1,4,4]",
    outputText: "1",
  },
  {
    id: 3,
    inputText: "target = 11, nums = [1,1,1,1,1,1,1,1]",
    outputText: "0",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 <= target <= 10<sup>9</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>1 <= nums.length <= 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>1 <= nums[i] <= 10<sup>4</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number} target
* @param {number[]} nums
* @return {number}
*/
var minSubArrayLen = function(target, nums) {
  // Write your code here
};`;

const solution = {
  solution: `var minSubArrayLen = function(target, nums) {
    let minLen = Number.MAX_VALUE
    let sum = 0
    let l = 0
    for(let r = 0; r < nums.length; r++){
        sum += nums[r]
        while(sum >= target){
            minLen = Math.min(minLen, r - l + 1)
            sum-= nums[l]
            l++
        }
    }
    return minLen == Number.MAX_VALUE ? 0 : minLen
}`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_MinimumSizeSubarraySum = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [2, 3, 1, 2, 4, 3],
      [1, 4, 4],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ];
    const target = [7, 4, 11];
    const answers = [2, 1, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(target[i], nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("MinimumSizeSubarraySum handler function error");
    throw new Error(error);
  }
};

export const MinimumSizeSubarraySum: Problem = {
  order: 8,
  id: "minimum-size-subarray-sum",
  title: "Minimum Size Subarray Sum",
  difficulty: "Medium",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "minSubArrayLen(target, nums)",
  handlerFunction: handle_MinimumSizeSubarraySum,
};
