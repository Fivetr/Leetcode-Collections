import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/spiral-matrix-1.jpg";
import img2 from "./images/spiral-matrix-2.jpg";

const problemStatement = `
<p class='mt-4'>
Given an <code>m x n</code> <code>matrix</code>, return 
<em>all elements of the</em> <code>matrix</code> <em>in spiral order</em>.</p>
`;

const examples = [
  {
    id: 1,
    inputText: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    outputText: "[1,2,3,6,9,8,7,4,5]",
    img: img1.src,
    img_size: 250,
  },
  {
    id: 2,
    inputText: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
    outputText: "[1,2,3,4,8,12,11,10,9,5,6,7]",
    img: img2.src,
    img_size: 350,
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
<code>1 ≤ m, n ≤ 10</code>
</li>  
<li class='mt-3 text-sm'>
<code>-100 ≤ matrix[i][j] ≤ 100</code>
</li>  

`;

const starterCode = `/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function(matrix) {
  // Write your code here
};`;

const solution = {
  solution: `var spiralOrder = function(matrix) {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_SpiralMatrix = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const matrixs = [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ],
    ];

    const answers = [
      [1, 2, 3, 6, 9, 8, 7, 4, 5],
      [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < matrixs.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(matrixs[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("SpiralMatrix handler function error");
    throw new Error(error);
  }
};

export const SpiralMatrix: Problem = {
  order: 4,
  id: "spiral-matrix",
  title: "Spiral Matrix",
  difficulty: "Medium",
  category: "Math",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "spiralOrder(matrix)",
  handlerFunction: handle_SpiralMatrix,
};
