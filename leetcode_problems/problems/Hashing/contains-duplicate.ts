import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `<p class='mt-4'>
Given an integer array <code>nums</code>, return <code>true</code> if any value appears
<strong>at least twice</strong> in the array, and return false if every element is distinct.
</p>`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,2,3,1]",
    outputText: "true",
  },
  {
    id: 2,
    inputText: "nums = [1,2,3,4]",
    outputText: "false",
  },
  {
    id: 3,
    inputText: "nums = [1,1,1,3,3,4,3,2,4,2]",
    outputText: "true",
  },
];

const constraints = `<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 10<sup>5</sup></code>
</li> <li class='mt-3 text-sm'>
<code>-10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @return {boolean}
*/
var containsDuplicate = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var containsDuplicate = function(nums) {
  const myset = new Set();
  for (let i = 0; i < nums.length; i++){
      if (myset.has(nums[i])){
          return true
      }
      myset.add(nums[i])
  }
  return false
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_ContainsDuplicate = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [1, 2, 3, 1],
      [1, 2, 3, 4],
      [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
    ];

    const answers = [true, false, true];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("ContainsDuplicate handler function error");
    throw new Error(error);
  }
};

export const ContainsDuplicate: Problem = {
  order: 1,
  id: "contains-duplicate",
  title: "Contains Duplicate",
  difficulty: "Easy",
  category: "Hashing",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "containsDuplicate(nums)",
  handlerFunction: handle_ContainsDuplicate,
};
