import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an integer array <code>nums</code>, return <em>the length of the longest <strong>strictly increasing subsequence</strong></em>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "nums = [10,9,2,5,3,7,101,18]",
    outputText: "4",
    explanation:
      "The longest increasing subsequence is [2,3,7,101], therefore the length is 4.",
  },
  {
    id: 2,
    inputText: "nums = [0,1,0,3,2,3]",
    outputText: "4",
  },
  {
    id: 3,
    inputText: "nums = [7,7,7,7,7,7,7]",
    outputText: "1",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 2500</code>
</li>  
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> ≤ nums[i] ≤ 10<sup>4</sup></code>
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
var lengthOfLIS = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var lengthOfLIS = function(nums) {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_MultiplyString = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [10, 9, 2, 5, 3, 7, 101, 18],
      [0, 1, 0, 3, 2, 3],
      [7, 7, 7, 7, 7, 7, 7],
    ];

    const answers = [4, 4, 1];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("MultiplyString handler function error");
    throw new Error(error);
  }
};

export const MultiplyString: Problem = {
  order: 7,
  id: "multiply-strings",
  title: "Multiply Strings",
  difficulty: "Medium",
  category: "Math",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "lengthOfLIS(nums)",
  handlerFunction: handle_MultiplyString,
};
