import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an integer array <code>nums</code>, return <code>true</code> <em>if you can partition the array 
into two subsets such that the sum of the elements in both subsets is equal or</em> <code>false</code> <em>otherwise</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,5,11,5]",
    outputText: "true",
    explanation: "The array can be partitioned as [1, 5, 5] and [11].",
  },
  {
    id: 2,
    inputText: "nums = [1,2,3,5]",
    outputText: "false",
    explanation: "The array cannot be partitioned into equal sum subsets.",
  },
];

const constraints = `

<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 200</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ nums[i] ≤ 100</code>
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @return {boolean}
*/
var canPartition = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var canPartition = function(nums) {
  // Find the sum
  const sum = nums.reduce((a, b) => a + b, 0);
	// If the sum cannot be divided by 2, that means the array cannot be divided into 2 subsets, too.
  if (sum % 2) return false;
  // Find the half of the sum. This would be the sum of the elements of the either of the subsets.
  const half = sum / 2; 
	// If any of the elements is greater than the half of the sum, then equal subsets are not possible.
  if (Math.max(...nums) > half) return false;
	// If any of the elements is equal to the half of the sum, then the rest of the elements can make up the 2nd subset.
  if (Math.max(...nums) === half) return true;
	// This array will keep track of the sums that can be reached by the numbers.
  const reach = new Array(half + 1).fill(false);
	// You can reach the sum of 0 by adding nothing, therefore, reach[0] = true.
  reach[0] = true;
	// Iterate over the nums array
  for (let num of nums) {
    // We need to check if half of the sum can be reached or not
    for (let i = half; i >= num; i--) {
		  // If the sum without the current number can be reached, then the sum with the number can be reached, too.
      if (reach[i - num]) {
        reach[i] = true;
        // If half of the sum can be reached, return true.
        if (reach[half]) {
          return true;
        }
      }
    }
  }
  // If half of the sum can be reached, return false.
  return false;
};`,
  time_complexity: `n * sum(nums)/2`,
  space_complexity: `sum(nums)/2`,
};

// checks if the user has the correct code
const handle_PartitionEqualSubsetSum = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [1, 5, 11, 5],
      [1, 2, 3, 5],
    ];

    const answers = [true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("PartitionEqualSubsetSum handler function error");
    throw new Error(error);
  }
};

export const PartitionEqualSubsetSum: Problem = {
  order: 12,
  id: "partition-equal-subset-sum",
  title: "Partition Equal Subset Sum",
  difficulty: "Medium",
  category: "1-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "canPartition(nums)",
  handlerFunction: handle_PartitionEqualSubsetSum,
};
