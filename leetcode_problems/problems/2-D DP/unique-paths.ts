import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/unique_path.jpg";

const problemStatement = `
<p class='mt-4'>
There is a robot on an <code>m x n</code> grid. The robot is initially located at the <strong>top-left corner</strong> 
(i.e., <code>grid[0][0]</code>). The robot tries to move to the <strong>bottom-right</strong> 
corner (i.e., <code>grid[m - 1][n - 1]</code>). The robot can only move either down or right at any point in time.
</p>
<p class='mt-4'>
Given the two integers <code>m</code> and <code>n</code>, return <em>the number of possible unique paths that the 
robot can take to reach the bottom-right corner</em>.
</p>
<p class='mt-4'>
The test cases are generated so that the answer will be less than or equal to <code>2 * 109</code>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "m = 3, n = 7",
    outputText: "28",
    img: img1.src,
    img_size: 400,
  },
  {
    id: 2,
    inputText: "m = 3, n = 2",
    outputText: "3",
    explanation:
      "From the top-left corner, there are a total of 3 ways to reach the bottom-right \ncorner:\n1. Right -> Down -> Down\n2. Down -> Down -> Right\n3. Down -> Right -> Down",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ m, n ≤ 100</code>
</li>  
`;

const starterCode = `/**
* @param {number} m
* @param {number} n
* @return {number}
*/
var uniquePaths = function(m, n) {
  // Write your code here
};`;

const solution = {
  solution: `var uniquePaths = function(m, n) {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_UniquePaths = (fn: any) => {
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
    console.log("UniquePaths handler function error");
    throw new Error(error);
  }
};

export const UniquePaths: Problem = {
  order: 1,
  id: "unique-paths",
  title: "Unique Paths",
  difficulty: "Medium",
  category: "2-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "uniquePaths(m, n)",
  handlerFunction: handle_UniquePaths,
};
