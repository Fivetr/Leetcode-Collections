import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an integer array <code>nums</code> that may contain duplicates, return 
<em>all possible subsets (the power set)</em>.
<p class='mt-4'>
The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,2,2]",
    outputText: "[[],[1],[1,2],[1,2,2],[2],[2,2]]",
  },
  {
    id: 2,
    inputText: "nums = [0]",
    outputText: "[[],[0]]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 10</code>
</li>  
<li class='mt-3 text-sm'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number[][]}
*/
var subsetsWithDup = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var subsetsWithDup = function(nums) {
  const res = []
  nums.sort((a, b) => a - b)
  const backtrack = (i, subset) => {
    if (i == nums.length) return res.push(subset.slice())
    subset.push(nums[i])
    acktrack(i + 1, subset)
    subset.pop()
    while (i + 1 < nums.length && nums[i] == nums[i + 1]) i++
    backtrack(i + 1, subset)
  }
  backtrack(0, [])
  return res
};`,
  time_complexity: `n * 2<sup>n</sup>`,
  space_complexity: `n * 2<sup>n</sup>`,
};

// checks if the user has the correct code
const handle_Subsets2 = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [[1, 2, 2], [0]];

    const answers = [
      [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]],
      [[], [0]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]).sort();
      assert.deepStrictEqual(result, answers[i].sort());
    }
    return true;
  } catch (error: any) {
    console.log("Subsets2 handler function error");
    throw new Error(error);
  }
};

export const Subsets2: Problem = {
  order: 2,
  id: "subsets-2",
  title: "Subsets 2",
  difficulty: "Medium",
  category: "Backtracking",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "subsetsWithDup(nums)",
  handlerFunction: handle_Subsets2,
};
