import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an integer array nums consisting of n elements, and an integer <code>k</code>.</p>
<p class='mt-4'>
Find a contiguous subarray whose <strong>length is equal</strong> to <code>k</code> that has the maximum average 
value and return this value. Any answer with a calculation error less than 
<code>10<sup>-5</sup></code> will be accepted.</p>
`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,12,-5,-6,50,3], k = 4",
    outputText: "12.75000",
    explanation: "Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75.",
  },
  {
    id: 2,
    inputText: "nums = [5], k = 1",
    outputText: "5.00000",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
n == nums.length
</li> 
<li class='mt-3 text-sm'>
<code>1 <= k <= n <= 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
var findMaxAverage = function(nums, k) {
  // Write your code here
};`;

const solution = {
  solution: `var findMaxAverage = function(nums, k) {
    let maxAvg = -Number.MAX_VALUE
    let l = 0
    let sum = 0
    for(let r = 0; r < nums.length; r++){
        sum += nums[r]
        if(r - l + 1 > k){
            sum -= nums[l]
            l++
        }
        if(r - l + 1 == k){
            maxAvg = Math.max(maxAvg, sum/k)
        }
    }
    return maxAvg
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_MaximumAverageSubarray = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [[1, 12, -5, -6, 50, 3], [5]];
    const k = [4, 1];
    const answers = [12.75, 5];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], k[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("MaximumAverageSubarray handler function error");
    throw new Error(error);
  }
};

export const MaximumAverageSubarray: Problem = {
  order: 3,
  id: "maximum-average-subarray",
  title: "Maximum Average Subarray",
  difficulty: "Easy",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "findMaxAverage(nums, k)",
  handlerFunction: handle_MaximumAverageSubarray,
};
