import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/set-matrix-zero-1.jpg";
import img2 from "./images/set-matrix-zero-2.jpg";

const problemStatement = `
<p class='mt-4'>
Given an <code>m x n</code> integer matrix <code>matrix</code>, if an element 
is <code>0</code>, set its entire row and column to <code>0</code>'s.
</p>
<p class='mt-4'>
You must do it in place.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
    outputText: "[[1,0,1],[0,0,0],[1,0,1]]",
    img: img1.src,
    img_size: 450,
  },
  {
    id: 2,
    inputText: "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
    outputText: "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
    img: img2.src,
    img_size: 450,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>m == matrix.length</code>
</li>  
<li class='mt-3 text-sm'>
<code>n == matrix[0].length</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ m, n ≤ 200</code>
</li>  
<li class='mt-3 text-sm'>
<code>-2<sup>31</sup> ≤ matrix[i][j] ≤ 2<sup>31</sup> - 1</code>
</li>  

`;

const starterCode = `/**
* @param {number[][]} matrix
* @return {void} Do not return anything, modify matrix in-place instead.
*/
var setZeroes = function(matrix) {
  // Write your code here
};`;

const solution = {
  solution: `var setZeroes = function(matrix) {
  let rows = [], cols = [];
  for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix[i].length; j++){
      if (matrix[i][j]===0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }
  for (let i=0; i<rows.length; i++){
    for (let j=0; j<matrix[0].length; j++){
      matrix[rows[i]][j] = 0;
    }
  }
  for (let i=0; i<matrix.length; i++){
    for (let j=0; j<cols.length; j++){
      matrix[i][cols[j]] = 0;
    }
  }
  return matrix;
};`,
  time_complexity: `m * n`,
  space_complexity: `m + n`,
};

// checks if the user has the correct code
const handle_SetMatrixZeroes = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const matrixs = [
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
      [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
      ],
    ];

    const answers = [
      [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ],
      [
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0],
      ],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < matrixs.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(matrixs[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("SetMatrixZeroes handler function error");
    throw new Error(error);
  }
};

export const SetMatrixZeroes: Problem = {
  order: 5,
  id: "set-matrix-zeroes",
  title: "Set Matrix Zeroes",
  difficulty: "Medium",
  category: "Math",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "setZeroes(matrix)",
  handlerFunction: handle_SetMatrixZeroes,
};
