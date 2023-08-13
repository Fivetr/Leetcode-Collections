import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an array of integers <code>nums</code> which is sorted in ascending order, 
and an integer <code>target</code>, write a function to search <code>target</code> 
in nums. If <code>target</code> exists, then return its index. Otherwise, 
return <code>-1</code>.
</p>
<p class='mt-4'>
You must write an algorithm with <code>O(log n)</code> runtime complexity.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "nums = [-1,0,3,5,9,12], target = 9",
    outputText: "4",
    explanation: "9 exists in nums and its index is 4",
  },
  {
    id: 2,
    inputText: "nums = [-1,0,3,5,9,12], target = 2",
    outputText: "-1",
    explanation: "2 does not exist in nums so return -1",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> ≤ nums[i], target ≤ 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
All the integers in <code>nums</code> are <strong>unique</strong>.
</li> 
<li class='mt-3 text-sm'>
<code>nums</code> is sorted in ascending order.
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
function search(nums, target) {
  // Write your code here
};`;

const solution = {
  solution: `function search(nums, target) {

};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_search = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [-1, 0, 3, 5, 9, 12],
      [-1, 0, 3, 5, 9, 12],
    ];

    const targets = [9, 2];

    const answers = [9, 2];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], targets[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("search handler function error");
    throw new Error(error);
  }
};

export const BinarySearch: Problem = {
  order: 1,
  id: "binary-search",
  title: "Binary Search",
  difficulty: "Easy",
  category: "Binary Search",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function search(",
  handlerFunction: handle_search,
};
