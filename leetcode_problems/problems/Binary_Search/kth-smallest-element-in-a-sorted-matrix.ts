import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an <code>n x n</code> <code>matrix</code> where each of the rows and columns is sorted in ascending order, 
return the <code>k<sup>th</sup></code> smallest element in the matrix.
</p>
<p class='mt-4'>
Note that it is the <code>k<sup>th</sup></code> smallest element <strong>in the sorted order</strong>, 
not the <code>k<sup>th</sup></code> <strong>distinct</strong> element.
</p>
<p class='mt-4'>
You must find a solution with a memory complexity better than <code>O(n<sup>2</sup>)</code>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8",
    outputText: "13",
    explanation:
      "The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13",
  },
  {
    id: 2,
    inputText: "matrix = [[-5]], k = 1",
    outputText: "-5",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>n == matrix.length == matrix[i].length</code>
</li> 
<li class='mt-3 text-sm'>
<code>1 <= n <= 300</code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>9</sup> <= matrix[i][j] <= 10<sup>9</sup></code>
</li> 
<li class='mt-3 text-sm'>
All the rows and columns of matrix are guaranteed to be sorted in <strong>non-decreasing order</strong>.
</li> 
<li class='mt-3 text-sm'>
<code>1 <= k <= n<sup>2</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[][]} matrix
* @param {number} k
* @return {number}
*/
var kthSmallest = function(matrix, k) {

};`;

const solution = {
  solution: `var kthSmallest = function(matrix, k) {
    const Count = (m) => {
        let r = matrix.length - 1
        let c = 0
        let count = 0
        while(r >= 0 && c < matrix[0].length){
            if(matrix[r][c] <= m){
                count += r + 1
                c++
            }
            else r--
        }
        return count
    }
    let l = matrix[0][0]
    let r = matrix[matrix.length-1][matrix[0].length - 1]
    while(l < r){
        let m = Math.floor((l + r)/2)
        let count = Count(m)
        if(count < k) l = m + 1
        else r = m
    }
    return l
};`,
  time_complexity: `logn`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_search = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const matrix = [
      [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15],
      ],
      [[-5]],
    ];
    const k = [8, 1];
    const answers = [13, -5];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < matrix.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(matrix[i], k[i]);
      console.log(result);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("search handler function error");
    throw new Error(error);
  }
};

export const KthSmallestElementInASortedMatrix: Problem = {
  order: 8,
  id: "kth-smallest-element-in-a-sorted-matrix",
  title: "Kth Smallest Element in a Sorted Matrix",
  difficulty: "Medium",
  category: "Binary Search",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "kthSmallest(matrix, k)",
  handlerFunction: handle_search,
};
