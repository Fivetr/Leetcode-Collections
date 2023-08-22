import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/max-area-_1.jpg";

const problemStatement = `
<p class='mt-4'>
You are given an <code>m x n</code> binary matrix <code>grid</code>. An island is a group 
of <code>1</code>'s (representing land) connected <strong>4-directionally</strong> (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
</p>
<p class='mt-4'>
The <strong>area</strong> of an island is the number of cells with a value <code>1</code> in the island.
</p>
<p class='mt-4'>
Return <em>the maximum</em> <strong>area</strong> <em>of an island in</em> <code>grid</code>. 
If there is no island, return <code>0</code>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText:
      "grid = \n[[0,0,1,0,0,0,0,1,0,0,0,0,0],\n[0,0,0,0,0,0,0,1,1,1,0,0,0],\n[0,1,1,0,1,0,0,0,0,0,0,0,0],\n[0,1,0,0,1,1,0,0,1,0,1,0,0],\n[0,1,0,0,1,1,0,0,1,1,1,0,0],\n[0,0,0,0,0,0,0,0,0,0,1,0,0],\n[0,0,0,0,0,0,0,1,1,1,0,0,0],\n[0,0,0,0,0,0,0,1,1,0,0,0,0]]",
    outputText: "6",
    img: img1.src,
    img_size: 450,
    explanation:
      "The answer is not 11, because the island must be connected 4-directionally.",
  },
  {
    id: 2,
    inputText: "grid = [[0,0,0,0,0,0,0,0]]",
    outputText: "0",
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
<code>1 ≤ m, n ≤ 50</code>
</li>  
<li class='mt-3 text-sm'>
<code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.
</li>  
`;

const starterCode = `/**
* @param {number[][]} grid
* @return {number}
*/
var maxAreaOfIsland = function(grid) {
  // Write your code here
};`;

const solution = {
  solution: `var maxAreaOfIsland = function(grid) {
  const dfs = (i, j) => {
    if (i < 0 || j < 0 
        || i >= grid.length 
        || j >= grid[0].length 
        || grid[i][j] == 0) return 0
    grid[i][j] = 0
    return 1 + dfs(i-1, j) + dfs(i, j-1) + dfs(i+1, j) + dfs(i, j+1)
  }
  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++){
      ans = Math.max(ans, dfs(i, j))
    }
  }
  return ans
};`,
  time_complexity: `m * n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_MaxAreaofIsland = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const grids = [
      [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      ],
      [[0, 0, 0, 0, 0, 0, 0, 0]],
    ];

    const answers = [6, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < grids.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(grids[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("MaxAreaofIsland handler function error");
    throw new Error(error);
  }
};

export const MaxAreaofIsland: Problem = {
  order: 2,
  id: "max-area-of-island",
  title: "Max Area of Islands",
  difficulty: "Medium",
  category: "Graph",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "maxAreaOfIsland(grid)",
  handlerFunction: handle_MaxAreaofIsland,
};
