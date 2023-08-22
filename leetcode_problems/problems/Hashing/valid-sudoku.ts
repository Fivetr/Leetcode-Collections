import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./image/valid_sudoku_1.jpg";

const problemStatement = `
<p class='mt-4'>
Determine if a <code>9 x 9</code> Sudoku board is valid. Only the filled cells need to be validated <strong>according to the following rules</strong>:
</p>
<p class='mt-4'>1. Each row must contain the digits <code>1-9</code> without repetition.</p>
<p class='mt-4'>2. Each column must contain the digits <code>1-9</code> without repetition.</p>
<p class='mt-4'>3. Each of the nine <code>3 x 3</code> sub-boxes of the grid must contain the digits <code>1-9</code> without repetition.</p>

<h3 class = 'mt-4'><strong>Note:</strong></h3>
<p class='mt-4'>A Sudoku board (partially filled) could be valid but is not necessarily solvable.</p>
<p class='mt-4'>Only the filled cells need to be validated according to the mentioned rules.</p>

`;

const examples = [
  {
    id: 1,
    inputText:
      'board = \n[["5","3",".",".","7",".",".",".","."],\n["6",".",".","1","9","5",".",".","."],\n[".","9","8",".",".",".",".","6","."],\n["8",".",".",".","6",".",".",".","3"],\n["4",".",".","8",".","3",".",".","1"],\n["7",".",".",".","2",".",".",".","6"],\n[".","6",".",".",".",".","2","8","."],\n[".",".",".","4","1","9",".",".","5"],\n[".",".",".",".","8",".",".","7","9"]]',
    outputText: "true",
    img: img1.src,
    img_size: 250,
  },
  {
    id: 2,
    inputText:
      'board = \n[["8","3",".",".","7",".",".",".","."],\n["6",".",".","1","9","5",".",".","."],\n[".","9","8",".",".",".",".","6","."],\n["8",".",".",".","6",".",".",".","3"],\n["4",".",".","8",".","3",".",".","1"],\n["7",".",".",".","2",".",".",".","6"],\n[".","6",".",".",".",".","2","8","."],\n[".",".",".","4","1","9",".",".","5"],\n[".",".",".",".","8",".",".","7","9"]]',
    outputText: "false",
    explanation:
      "Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.",
  },
];

const constraints = `<li class='mt-3 text-sm' >
<code>border.length == 9<</code>
</li> 
<li class='mt-3 text-sm' >
<code>border[i].length == 9</code>
</li> 
<li class='mt-3 text-sm' >
<code>board[i][j]</code> is a digit <code>1-9</code> or <code>'.'</code>.
</li> 
`;

const starterCode = `/**
* @param {character[][]} board
* @return {boolean}
*/
var isValidSudoku = function(board) {
  // Write your code here
};`;

const solution = {
  solution: `var isValidSudoku = function(board) {
  let set = new Set();

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      let val = board[r][c];
      if (val === ".") continue;
      // row value
      // [0,1,2,3,4 ...]
      let inRow = \`row:\${r}, \${val}\`;
      // column value
      /* [ 0
           1
           2
           3
           ...]*/
      let inCol = \`col:\${c}, \${val}\`;
      // subBox value
      //[0,0][0,1][0,2]
      //[1,0][1,1][1,2]
      //[2,0][2,1][2,2]
      let inSubBox = \`row:\${Math.floor(r / 3)}, col:\${ Math.floor(c / 3)}, \${val}\`;

      //return false if there exits a duplicate
      if (set.has(inRow) || set.has(inCol) || set.has(inSubBox)) return false;
      set.add(inRow);
      set.add(inCol);
      set.add(inSubBox);
    }
  }
  return true;

};`,
  time_complexity: `9<sup>2</sup>`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_IsValidSudoku = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const board = [
      [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ],
      [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ],
    ];

    const answers = [true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < board.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(board[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("IsValidSudoku handler function error");
    throw new Error(error);
  }
};

export const ValidSudoku: Problem = {
  order: 7,
  id: "valid-sudoku",
  title: "Valid Sudoku",
  difficulty: "Medium",
  category: "Hashing",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "isValidSudoku(board)",
  handlerFunction: handle_IsValidSudoku,
};
