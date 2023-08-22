import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/surrounded-region.jpg";

const problemStatement = `
<p class='mt-4'>
Given an <code>m x n</code> matrix <code>board</code> containing <code>'X'</code> and <code>'O'</code>
, <em>capture all regions that are 4-directionally surrounded by</em> <code>'X'</code>.
</p>
<p class='mt-4'>
A region is <strong>captured</strong> by flipping all <code>'O'</code>s into <code>'X'</code>s in that surrounded region.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: `board = \n[["X","X","X","X"],\n["X","O","O","X"],\n["X","X","O","X"],\n["X","O","X","X"]]`,
    outputText:
      '\n[["X","X","X","X"],\n["X","X","X","X"],\n["X","X","X","X"],\n["X","O","X","X"]]',
    img: img1.src,
    img_size: 500,
    explanation:
      "Notice that an 'O' should not be flipped if:\n- It is on the border, or\n- It is adjacent to an 'O' that should not be flipped.\nThe bottom 'O' is on the border, so it is not flipped.\nThe other three 'O' form a surrounded region, so they are flipped.",
  },
  {
    id: 2,
    inputText: `board = [["X"]]`,
    outputText: '[["X"]]',
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>m == board.length</code>
</li>  
<li class='mt-3 text-sm'>
<code>n == board[i].length</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ m, n ≤ 200</code>
</li>  
<li class='mt-3 text-sm'>
<code>board[i][j]</code> is <code>'X'</code> or <code>'O'</code>.
</li>  
`;

const starterCode = `/**
* @param {character[][]} board
* @return {void} Do not return anything, modify board in-place instead.
*/
var solve = function(board) {
  // Write your code here
};`;

const solution = {
  solution: `var solve = function(board) {
  if(board.length ==0) return null 
  /* Find 'O' and check if it is on the border. If it's on 
     the border then we should mark all 'O's that are adjecent 
     to it as "Visited". */
  for(var i=0;i<board.length;i++){
    for(var j=0;j<board[0].length;j++){
      if(board[i][j] == 'O' && 
      (i==0 || i==board.length-1 
        || j==0 
        || j==board[0].length-1)){
        dfs(board,i,j)
      }
    }
  }
  /* Go through board again and replace "Visited" with "O". 
     If the cell is NOT visited than it's NOT adjacent to 
     "O" and CAN be flipped. */
  for(var i=0;i<board.length;i++){
    for(var j=0;j<board[0].length;j++){
      if(board[i][j]=="Visited"){
        board[i][j]='O'
      }
      else {
        board[i][j]='X'
      }
    }
  } 
  return board
};

function dfs(board,i,j){
  if(i<0 || j<0 
    || i>=board.length 
    || j >=board[0].length 
    || board[i][j] != "O") return 
  
  board[i][j]="Visited";
  dfs(board,i+1,j)
  dfs(board,i-1,j)
  dfs(board,i,j+1)
  dfs(board,i,j-1)
  return 
}
`,
  time_complexity: `m * n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_SurroundedRegions = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const boards = [
      [
        ["X", "X", "X", "X"],
        ["X", "O", "O", "X"],
        ["X", "X", "O", "X"],
        ["X", "O", "X", "X"],
      ],
      [["X"]],
    ];

    const answers = [
      [
        ["X", "X", "X", "X"],
        ["X", "X", "X", "X"],
        ["X", "X", "X", "X"],
        ["X", "O", "X", "X"],
      ],
      [["X"]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < boards.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(boards[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("SurroundedRegions handler function error");
    throw new Error(error);
  }
};

export const SurroundedRegions: Problem = {
  order: 4,
  id: "surrounded-regions",
  title: "Surrounded Regions",
  difficulty: "Medium",
  category: "Graph",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "solve(board)",
  handlerFunction: handle_SurroundedRegions,
};
