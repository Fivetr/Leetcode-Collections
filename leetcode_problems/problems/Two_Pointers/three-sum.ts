import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> of 
such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, 
and <code>nums[i] + nums[j] + nums[k] == 0</code>.
</p>
<p class='mt-4'>
Notice that the solution set must not contain duplicate triplets.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [-1,0,1,2,-1,-4]",
    outputText: "[[-1,-1,2],[-1,0,1]]",
    explanation:
      "\nnums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. \nnums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.\nnums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.\nThe distinct triplets are [-1,0,1] and [-1,-1,2].\nNotice that the order of the output and the order of the triplets does not matter.",
  },
  {
    id: 2,
    inputText: "nums = [0,1,1]",
    outputText: "[]",
    explanation: "The only possible triplet does not sum up to 0.",
  },
  {
    id: 3,
    inputText: "nums = [0,0,0]",
    outputText: "[[0,0,0]]",
    explanation: "The only possible triplet sums up to 0.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>3 ≤ nums.length ≤ 3000</code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup5</sup> ≤ nums[i] ≤ 10<sup>5</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number[][]}
*/
function threeSum(nums) {
  // Write your code here
};`;

const solution = {
  solution: `function threeSum(nums) {

};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_threeSum = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [-1, 0, 1, 2, -1, -4],
      [0, 1, 1],
      [0, 0, 0],
    ];

    const answers = [
      [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
      [],
      [[0, 0, 0]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("threeSum handler function error");
    throw new Error(error);
  }
};

export const ThreeSum: Problem = {
  order: 3,
  id: "three-sum",
  title: "Three Sum",
  difficulty: "Medium",
  category: "Two Pointers",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function threeSum(",
  handlerFunction: handle_threeSum,
};
