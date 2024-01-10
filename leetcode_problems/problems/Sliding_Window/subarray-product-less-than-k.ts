import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an array of integers <code>nums</code> and an integer <code>k</code>, return the number of contiguous subarrays 
where the product of all the elements in the subarray is strictly less than <code>k</code>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [10,5,2,6], k = 100",
    outputText: "8",
    explanation:
      "The 8 subarrays that have product less than 100 are:\n[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]\nNote that [10, 5, 2] is not included as the product of 100 is not strictly less than k.",
  },
  {
    id: 2,
    inputText: "nums = [1,2,3], k = 0",
    outputText: "0",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 <= nums.length <= 3 * 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>1 <= nums[i] <= 1000</code>
</li> 
<li class='mt-3 text-sm'>
<code>0 <= k <= 10<sup>5</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
var numSubarrayProductLessThanK = function(nums, k) {
  // Write your code here
};`;

const solution = {
  solution: `var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
    let count = 0, product = 1;
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        product *= nums[r];
        while (product >= k) {
            product /= nums[l];
            l++;
        }
        count += r - l + 1;
    }
    return count;
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_SubarrayProductLessThanK = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [10, 5, 2, 6],
      [1, 2, 3],
    ];
    const k = [100, 0];
    const answers = [8, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], k[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("SubarrayProductLessThanK handler function error");
    throw new Error(error);
  }
};

export const SubarrayProductLessThanK: Problem = {
  order: 12,
  id: "subarray-product-less-than-k",
  title: "Subarray Product Less Than K	",
  difficulty: "Medium",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "numSubarrayProductLessThanK(nums, k)",
  handlerFunction: handle_SubarrayProductLessThanK,
};
