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
var threeSum = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var threeSum = function(nums) {
  const results = [];
  if (nums.length < 3) return results;
  // Having the numbers in ascending order
  nums = nums.sort((a, b) => a - b);
  let target = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    /* i represents the "left" most number in sorted array.
    once this number hits 0, there's no need to go further since
    positive numbers cannot sum to a negative number */
    if (nums[i] > target) break;
    // we don't want repeats, so skip numbers we've already seen
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // use two sum 2 technique to find the remaining numbers
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        // store the valid threesum
        results.push([nums[i], nums[left], nums[right]]);
        /* continue to increment left and decrement dight as long as 
        those values are duplicated. Skip values we've already seen.*/
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        /* increment left and decrement right for 
        other potential combos where i is the anchor */
        left++;
        right--;
        // if the sum is too small, increment left
      } else if (sum < target) {
        left++;
        // if the sum is too large, decrement right
      } else {
        right--;
      }
    }
  }
  return results;
};`,
  time_complexity: `n<sup>2</sup>`,
  space_complexity: `1`,
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
  starterFunctionName: "threeSum(nums)",
  handlerFunction: handle_threeSum,
};
