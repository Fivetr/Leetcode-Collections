import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/rotting_oranges.jpg";

const problemStatement = `
<p class='mt-4'>
You are given an <code>m x n</code> grid where each cell can have one of three values:
</p>
<p class='mt-4'>
<code>0</code> representing an empty cell,
</p>
<p class='mt-4'>
<code>1</code> representing a fresh orange, or
</p>
<p class='mt-4'>
<code>2</code> representing a rotten orange.
</p>
<p class='mt-4'>
Every minute, any fresh orange that is <strong>4-directionally</strong> adjacent to a rotten orange becomes rotten.
</p>
<p class='mt-4'>
Return <em>the minimum number of minutes that must elapse until no cell has a fresh orange</em>. 
If <em>this is impossible, return</em> <code>-1</code>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "grid = [[2,1,1],[1,1,0],[0,1,1]]",
    outputText: "4",
    img: img1.src,
    img_size: 700,
  },
  {
    id: 2,
    inputText: "grid = [[2,1,1],[0,1,1],[1,0,1]]",
    outputText: "-1",
    explanation:
      "The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.",
  },
  {
    id: 3,
    inputText: "grid = [[0,2]]",
    outputText: "0",
    explanation:
      "Since there are already no fresh oranges at minute 0, the answer is just 0.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>m == grid.length</code>
</li>  
<li class='mt-3 text-sm'>
<code>n == grid[i].length</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ m, n ≤ 10</code>
</li>  
<li class='mt-3 text-sm'>
<code>grid[i][j]</code> is <code>0</code>, <code>1</code> or <code>2</code>.
</li>  
`;

const starterCode = `/**
* @param {number[][]} grid
* @return {number}
*/
var orangesRotting = function(grid) {
  // Write your code here
};`;

const solution = {
  solution: `var orangesRotting = function(grid) {
  let minutes = 0;
  let rottens = [];
  let freshCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        rottens.push({row: i, col: j});
      }
      if (grid[i][j] === 1) {
        freshCount++;
      }
    }
  }
  if (rottens.length > 0) {
    let currRottens = [];
    while (rottens.length) {
      for (let i = 0; i < rottens.length; i++) {
        const { row, col } = rottens[i];
        const topRow = row - 1;
        const bottomRow = row + 1;
        const leftCol = col - 1;
        const rightCol = col + 1;
        if (grid[topRow]?.[col] === 1) {
          currRottens.push({row: topRow, col});
          grid[topRow][col] = 2;
        }
        if (grid[row][rightCol] === 1) {
          currRottens.push({row, col: rightCol});
          grid[row][rightCol] = 2;
        }
        if (grid[bottomRow]?.[col] === 1) {
          currRottens.push({row: bottomRow, col});
          grid[bottomRow][col] = 2;
        }
        if (grid[row][leftCol] === 1) {
          currRottens.push({row, col: leftCol});
          grid[row][leftCol] = 2;
        }
      }
      if (currRottens.length > 0) {
        minutes++;
        rottens = currRottens;
        freshCount -= currRottens.length;
        currRottens = [];
      } else {
        rottens = []
      }     
    }
  }
  return freshCount ? -1 : minutes;
};`,
  time_complexity: `m * n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_RottingOranges = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const grids = [
      [
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
      ],
      [
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
      ],
      [[0, 2]],
    ];

    const answers = [4, -1, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < grids.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(grids[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("RottingOranges handler function error");
    throw new Error(error);
  }
};

export const RottingOranges: Problem = {
  order: 5,
  id: "rotting-oranges",
  title: "Rotting Oranges",
  difficulty: "Medium",
  category: "Graph",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "orangesRotting(grid)",
  handlerFunction: handle_RottingOranges,
};
