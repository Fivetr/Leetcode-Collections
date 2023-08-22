import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a 
map of <code>'1'</code>s (land) and <code>'0'</code>s (water), return <em>the number of islands</em>.</p>
<p class='mt-4'>
An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.</p>
`;

const examples = [
  {
    id: 1,
    inputText: `grid = [\n ["1","1","1","1","0"],\n ["1","1","0","1","0"],\n ["1","1","0","0","0"],\n ["0","0","0","0","0"]\n ]`,
    outputText: "1",
  },
  {
    id: 2,
    inputText: `grid = [\n ["1","1","0","0","0"],\n ["1","1","0","0","0"],\n ["0","0","1","0","0"],\n ["0","0","0","1","1"]\n ]`,
    outputText: "3",
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
<code>1 ≤ m, n ≤ 300</code>
</li>  
<li class='mt-3 text-sm'>
<code>grid[i][j]</code> is <code>'0'</code> or <code>'1'</code>
</li>  
`;

const starterCode = `/**
* @param {character[][]} grid
* @return {number}
*/
var numIslands = function(grid) {
  // Write your code here
};`;

const solution = {
  solution: `var numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == '1') {
          count += 1;
          dfs(grid, i, j);
        }
      }
    }
    return count;
};

const dfs = (grid, i, j) => {
  if (i < 0 || i >= grid.length 
      || j < 0 
      || j >= grid[i].length 
      || grid[i][j] == '0') return
  grid[i][j] = '0';
  dfs(grid, i + 1, j); // down
  dfs(grid, i - 1, j); // up
  dfs(grid, i, j + 1); // right
  dfs(grid, i, j - 1); // left
};`,
  time_complexity: `m*n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_NumberOfIslands = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const grids = [
      [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
      ],
      [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
      ],
    ];

    const answers = [1, 3];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < grids.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(grids[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("NumberOfIslands handler function error");
    throw new Error(error);
  }
};

export const NumberOfIslands: Problem = {
  order: 1,
  id: "number-of-islands",
  title: "Number of Islands",
  difficulty: "Medium",
  category: "Graph",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "numIslands(grid)",
  handlerFunction: handle_NumberOfIslands,
};
