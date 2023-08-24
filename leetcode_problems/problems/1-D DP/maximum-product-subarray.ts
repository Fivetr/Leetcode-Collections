import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an integer array <code>nums</code>, find a <strong>subarray</strong> that has the 
largest product, and return <em>the product</em>.
</p>
<p class='mt-4'>
The test cases are generated so that the answer will fit in a <strong>32-bit</strong> integer.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "nums = [2,3,-2,4]",
    outputText: "6",
    explanation: `[2,3] has the largest product 6.`,
  },
  {
    id: 2,
    inputText: "nums = [-2,0,-1]",
    outputText: "0",
    explanation: "The result cannot be 2, because [-2,-1] is not a subarray.",
  },
];

const constraints = ` 
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 2 * 10<sup>4</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li>  
<li class='mt-3 text-sm'>
The product of any prefix or suffix of <code>nums</code> is 
<strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
var maxProduct = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var maxProduct = function(nums) {
  var ans = nums[0];
  var maxp = nums[0];
  var minp = nums[0];
  for (var i = 1; i < nums.length; i++) {
    var temp = Math.max(nums[i], maxp * nums[i], minp * nums[i]);
    minp = Math.min(nums[i], maxp * nums[i], minp * nums[i]);
    maxp = temp;
    ans = Math.max(maxp, ans);
  }
  return ans;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_MaximumProductSubarray = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [2, 3, -2, 4],
      [-2, 0, -1],
    ];

    const answers = [6, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("MaximumProductSubarray handler function error");
    throw new Error(error);
  }
};

export const MaximumProductSubarray: Problem = {
  order: 9,
  id: "maximum-product-subarray",
  title: "Maximum Product Subarray",
  difficulty: "Medium",
  category: "1-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "maxProduct(nums)",
  handlerFunction: handle_MaximumProductSubarray,
};
