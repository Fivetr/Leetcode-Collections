import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/matrix_1.jpg";
import img2 from "./images/matrix_2.jpg";

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
    img: img1.src,
    img_size: 320,
  },
  {
    id: 2,
    inputText: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
    outputText: "false",
    img: img2.src,
    img_size: 320,
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
var searchMatrix = function(matrix, target) {
  // Write your code here
};`;

const solution = {
  solution: `var searchMatrix = function(matrix, target) {
  let top = 0, bot = matrix.length - 1;
  /* Use a binary search algorithm to find a row 
     where the target could potentially exist */
  while(top <= bot){
    // find the middle index mid as the average of top and bot.
    let mid_row = Math.floor((top +  bot) / 2);
    /* if target is greater than last element in the mid 
       row eliminate all the rows from top to mid */
    if(target > matrix[mid_row][matrix[0].length-1]) {
        top = mid_row + 1;
      /* if target is less than first element in the mid 
         row eliminate all the rows from mid to bot */
    } else if(target < matrix[mid_row][0]) {
        bot = mid_row - 1; 
      // target could potentially exist in mid row
    } else {
        break;
    }
  }
  // if we eliminate all the rows from the matrix
  if(!(top <= bot)) {
    return false;
  }
  let row = Math.floor((top + bot) / 2);
  let left = 0, right = matrix[0].length - 1;
  /* Use another binary search algorithm to search for 
     the target within the selected row.*/
  while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(target > matrix[row][mid]) {
      left = mid + 1;
    } else if(target < matrix[row][mid]) {
      right = mid - 1;
    } else if(target == matrix[row][mid]) {
        return true;
    }
  }
  return false;
};`,
  time_complexity: `logm + logn`,
  space_complexity: `1`,
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
    const answers = [true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < matrixs.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(matrixs[i], targets[i]);
      console.log(result);
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
  starterFunctionName: "searchMatrix(matrix, target)",
  handlerFunction: handle_searchMatrix,
};
