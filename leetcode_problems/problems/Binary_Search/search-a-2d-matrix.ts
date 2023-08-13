import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an <code>m x n</code> integer matrix <code>matrix</code> with the following two properties:
</p>
<p class='mt-4'>
Each row is sorted in non-decreasing order.
</p>
<p class='mt-4'>
The first integer of each row is greater than the last integer of the previous row.
</p>
<p class='mt-4'>
Given an integer <code>target</code>, return <code>true</code> <em>if</em> 
<code>target</code> <em>is in</em> <code>matrix</code> <em>or</em> <code>false</code> <em>otherwise</em>.
</p>
<p class='mt-4'>
You must write a solution in <code>O(log(m * n))</code> time complexity.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
    outputText: "true",
  },
  {
    id: 2,
    inputText: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
    outputText: "false",
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
<code>1 ≤ m, n ≤ 100 </code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> ≤ matrix[i][j], target ≤ 10<supo>4</sup> </code>
</li> 
`;

const starterCode = `/**
* @param {number[][]} matrix
* @param {number} target
* @return {boolean}
*/
function searchMatrix(matrix, target) {
  // Write your code here
};`;

const solution = {
  solution: `function searchMatrix(matrix, target) {

};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_searchMatrix = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const matrixs = [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
    ];
    const targets = [3, 13];
    const answers = [true, false, true];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < matrixs.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(matrixs[i], targets[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("searchMatrix handler function error");
    throw new Error(error);
  }
};

export const Search2DMatrix: Problem = {
  order: 2,
  id: "search-a-2d-matrix",
  title: "Search A 2D Matrix",
  difficulty: "Medium",
  category: "Binary Search",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function searchMatrix(",
  handlerFunction: handle_searchMatrix,
};
