import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/queen.jpg";

const problemStatement = `
<p class='mt-4'>
The <strong>n-queens</strong> puzzle is the problem of placing <code>n</code> 
queens on an <code>n x n</code> chessboard such that no two queens attack each other.</p>
<p class='mt-4'>
Given an integer <code>n</code>, return <em>all distinct solutions to the</em> <strong><em>n-queens puzzle</em></strong>. 
You may return the answer in <strong>any order</strong>.</p>
<p class='mt-4'>
Each solution contains a distinct board configuration of the n-queens' 
placement, where <code>'Q'</code> and <code>'.'</code> both indicate a queen and an empty space, respectively.</p>
`;

const examples = [
  {
    id: 1,
    inputText: "n = 4",
    outputText: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
    explanation:
      "There exist two distinct solutions to the 4-queens puzzle as shown above",
    img: img1.src,
    img_size: 420,
  },
  {
    id: 2,
    inputText: "n = 1",
    outputText: '[["Q"]]',
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ 9</code>
</li>  
`;

const starterCode = `/**
* @param {number} n
* @return {string[][]}
*/
var solveNQueens = function(n) {
  // Write your code here
  
};`;

const solution = {
  solution: `var solveNQueens = function(n) {
  let result = [];
  // Initiate board. the initial value should be "."
  let board = new Array(n)
  for (let i=0; i< n; i++){
    board[i]= new Array(n).fill('.');
  }
    
  function isValid(row, col){
    // check if there is a queen above the head.
    for (let i=0; i<row; i++){
      if (board[i][col] == 'Q') return false;
    }
    //check if there is a queen on the right-top corner.
    for (let i=row-1, j=col+1; i>=0&&j<n; i--, j++){
      if (board[i][j] == 'Q') return false;        
    }
    // check if there is a queen on the left-top corner.
    for (let i=row-1, j=col-1; i>=0 && j>=0; i--, j--){
      if (board[i][j] == 'Q') return false;        
    }
      return true;
    }
    
  function backtrack(row){
    // when we reached the last row of the board. end the track.
    if (row == n){
      // rearrange the result as requested.
      result.push([...board].map(row => row.join('')));
      return;
    }
    // track from left to right.
    for (let col=0; col<n; col++){
      if (!isValid(row, col)) continue;
      board[row][col] = "Q";
			// go into the next row.
      backtrack(row+1);
      board[row][col] = ".";
    }
  }
  // track from top to bottom.
  backtrack(0);
  return result;
};`,
  time_complexity: `n<sup>n+1</sup>`,
  space_complexity: `n<sup>n+1</sup>`,
};

// checks if the user has the correct code
const handle_NQueens = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const n = [4, 1];

    const answers = [
      [
        [".Q..", "...Q", "Q...", "..Q."],
        ["..Q.", "Q...", "...Q", ".Q.."],
      ],
      [["Q"]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < n.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(n[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("NQueens handler function error");
    throw new Error(error);
  }
};

export const NQueens: Problem = {
  order: 9,
  id: "n-queens",
  title: "N Queens",
  difficulty: "Hard",
  category: "Backtracking",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "solveNQueens(n)",
  handlerFunction: handle_NQueens,
};
