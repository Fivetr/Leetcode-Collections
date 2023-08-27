import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/rotate-image-1.jpg";
import img2 from "./images/rotate-image-2.jpg";

const problemStatement = `
<p class='mt-4'>
You are given an <code>n x n</code> 2D <code>matrix</code> representing an image, rotate 
the image by <strong>90</strong> degrees (clockwise).
</p>
<p class='mt-4'>
You have to rotate the image <strong>in-place</strong>, which means you have to modify the input 2D 
matrix directly. <strong>DO NOT</strong> allocate another 2D matrix and do the rotation.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    outputText: "[[7,4,1],[8,5,2],[9,6,3]]",
    img: img1.src,
    img_size: 400,
  },
  {
    id: 2,
    inputText: "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
    outputText: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
    img: img2.src,
    img_size: 400,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>n == matrix.length == matrix[i].length</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ 20</code>
</li>  
<li class='mt-3 text-sm'>
<code>-1000 ≤ matrix[i][j] ≤ 1000</code>
</li>  
`;

const starterCode = `/**
* @param {number[][]} matrix
* @return {void} Do not return anything, modify matrix in-place instead.
*/
var rotate = function(matrix){
  // Write your code here
};`;

const solution = {
  solution: `var rotate = function(matrix) {
  let N = matrix.length;
  // Traverse each cycle
  for (i = 0; i < parseInt(N / 2); i++) {
    for (j = i; j < N - i - 1; j++) {
      // Swap elements of each cycle
      // in clockwise direction
      var temp = matrix[i][j];
      matrix[i][j] = matrix[N - 1 - j][i];
      matrix[N - 1 - j][i] = matrix[N - 1 - i][N - 1 - j];
      matrix[N - 1 - i][N - 1 - j] = matrix[j][N - 1 - i];
      matrix[j][N - 1 - i] = temp;
    }
  }
  return matrix;
};`,
  time_complexity: `n<sup>2</sup>`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_RotateImage = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const matrixs = [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ],
    ];

    const answers = [
      [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
      [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
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
    console.log("RotateImage handler function error");
    throw new Error(error);
  }
};

export const RotateImage: Problem = {
  order: 3,
  id: "rotate-image",
  title: "Rotate Image",
  difficulty: "Medium",
  category: "Math",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "rotate(matrix)",
  handlerFunction: handle_RotateImage,
};
