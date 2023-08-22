import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an array <code>nums</code> of distinct integers, return <em>all the possible permutations</em>.
 You can return the answer in <strong>any order</strong>.</p>`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,2,3]",
    outputText: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
  },
  {
    id: 2,
    inputText: "nums = [0,1]",
    outputText: "[[0,1],[1,0]]",
  },
  {
    id: 3,
    inputText: "nums = [1]",
    outputText: "[[1]]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 6</code>
</li>  
<li class='mt-3 text-sm'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li>  
<li class='mt-3 text-sm'>
All the integers of <code>nums</code> are <strong>unique</strong>.
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number[][]}
*/
var permute = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var permute = function(nums) {
  const result = [];
  const backtrack = (nums, path) => {
      if (nums.length === 0) {
        result.push(path);
        return;
      }
      for (let i = 0; i < nums.length; i++) {
        backtrack([...nums.slice(0, i), ...nums.slice(i + 1)], [...path, nums[i]]);
      }
  };
  backtrack(nums, []);
  return result;
};`,
  time_complexity: `n * n!`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_Permutations = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [[1, 2, 3], [0, 1], [1]];

    const answers = [
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
      [
        [0, 1],
        [1, 0],
      ],
      [[1]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Permutations handler function error");
    throw new Error(error);
  }
};

export const Permutations: Problem = {
  order: 5,
  id: "permutations",
  title: "Permutations",
  difficulty: "Medium",
  category: "Backtracking",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "permute(nums)",
  handlerFunction: handle_Permutations,
};
