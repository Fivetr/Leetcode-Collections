import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/longest-increasing-1.jpg";
import img2 from "./images/longest-increasing-2.jpg";

const problemStatement = `
<p class='mt-4'>
Given an <code>m x n</code> integers <code>matrix</code>, return 
<em>the length of the longest increasing path in</em> <code>matrix</code>.
</p>
<p class='mt-4'>
From each cell, you can either move in four directions: left, right, up, or down. 
You <strong>may not</strong> move <strong>diagonally</strong> or move 
<strong>outside the boundary</strong> (i.e., wrap-around is not allowed).
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "matrix = [[9,9,4],[6,6,8],[2,1,1]]",
    outputText: "4",
    explanation: "The longest increasing path is [1, 2, 6, 9].",
    img: img1.src,
    img_size: 250,
  },
  {
    id: 2,
    inputText: "matrix = [[3,4,5],[3,2,6],[2,2,1]]",
    outputText: "4",
    explanation:
      "The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.",
    img: img2.src,
    img_size: 250,
  },
  {
    id: 3,
    inputText: "matrix = [[1]]",
    outputText: "1",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>m == matrix.length</code>
</li>  
<li class='mt-3 text-sm'>
<code>n == matrix[i].length</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ m, n ≤ 200</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ matrix[i][j] ≤ 2<sup>31</sup> - 1</code>
</li>   
`;

const starterCode = `/**
* @param {number[][]} matrix
* @return {number}
*/
var longestIncreasingPath = function(matrix) {
  // Write your code here
};`;

const solution = {
  solution: `var longestIncreasingPath = function(matrix) {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_LongestIncreasingPathInAMatrix = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const matrixs = [
      [
        [9, 9, 4],
        [6, 6, 8],
        [2, 1, 1],
      ],
      [
        [3, 4, 5],
        [3, 2, 6],
        [2, 2, 1],
      ],
      [[1]],
    ];

    const answers = [4, 4, 1];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < matrixs.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(matrixs[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("LongestIncreasingPathInAMatrix handler function error");
    throw new Error(error);
  }
};

export const LongestIncreasingPathInAMatrix: Problem = {
  order: 8,
  id: "longest-increasing-path-in-a-matrix",
  title: "Longest Increasing Path in a Matrix",
  difficulty: "Hard",
  category: "2-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "longestIncreasingPath(matrix)",
  handlerFunction: handle_LongestIncreasingPathInAMatrix,
};
