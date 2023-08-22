import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an integer array <code>nums</code>, find the subarray with the largest sum, 
and return <em>its sum</em>.
</p>`;

const examples = [
  {
    id: 1,
    inputText: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    outputText: "6",
    explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
  },
  {
    id: 2,
    inputText: "nums = [1]",
    outputText: "1",
    explanation: "The subarray [1] has the largest sum 1.",
  },
  {
    id: 3,
    inputText: "nums = [5,4,-1,7,8]",
    outputText: "23",
    explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 10<sup>5</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> ≤ nums[i] ≤ 10<sup>4</sup></code>
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var maxSubArray = function(nums) {
  let max = nums[0];
  let cur = 0;
  for(let i = 0; i < nums.length; i++) {
    cur += nums[i];  
    if(cur > max) max = cur
    if(cur < 0) cur = 0
  }
  return max;    
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_MaximumSubarray = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [[-2, 1, -3, 4, -1, 2, 1, -5, 4], [1]];

    const answers = [6, 1];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("MaximumSubarray handler function error");
    throw new Error(error);
  }
};

export const MaximumSubarray: Problem = {
  order: 1,
  id: "maximum-subarray",
  title: "Maximum Subarray",
  difficulty: "Medium",
  category: "Greedy",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "maxSubArray(nums)",
  handlerFunction: handle_MaximumSubarray,
};
