import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/pacific_ocean.jpg";

const problemStatement = `
<p class='mt-4'>
There is an <code>m x n</code> rectangular island that borders both the <strong>Pacific Ocean</strong> 
and <strong>Atlantic Ocean</strong>. The <strong>Pacific Ocean</strong> touches the 
island's left and top edges, and the <strong>Atlantic Ocean</strong> touches the island's right and bottom edges.
</p>
<p class='mt-4'>
The island is partitioned into a grid of square cells. You are given an <code>m x n</code> integer 
matrix <code>heights</code> where <code>heights[r][c]</code> represents the 
<strong>height above sea level</strong> of the cell at coordinate <code>(r, c)</code>.
</p>
<p class='mt-4'>
The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, 
south, east, and west if the neighboring cell's height is <strong>less than or equal to</strong> the current cell's height. 
Water can flow from any cell adjacent to an ocean into the ocean.
</p>
<p class='mt-4'>
Return <em>a <strong>2D list</strong> of grid coordinates</em> <code>result</code> <em>where</em> 
<code>result[i] = [ri, ci]</code> <em>denotes that rain water can flow from cell</em> 
<code>(ri, ci)</code> <em>to <strong>both</strong> the Pacific and Atlantic oceans</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText:
      "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
    outputText: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
    img: img1.src,
    img_size: 400,
    explanation:
      "The following cells can flow to the Pacific and Atlantic oceans, as shown below:\n[0,4]: [0,4] -> Pacific Ocean\n       [0,4] -> Atlantic Ocean \n[1,3]: [1,3] -> [0,3] -> Pacific Ocean\n       [1,3] -> [1,4] -> Atlantic Ocean\n[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean\n       [1,4] -> Atlantic Ocean\n[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean\n       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean\n[3,0]: [3,0] -> Pacific Ocean\n       [3,0] -> [4,0] -> Atlantic Ocean\n[3,1]: [3,1] -> [3,0] -> Pacific Ocean\n       [3,1] -> [4,1] -> Atlantic Ocean\n[4,0]: [4,0] -> Pacific Ocean\n       [4,0] -> Atlantic Ocean\nNote that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.",
  },
  {
    id: 2,
    inputText: "heights = [[1]]",
    outputText: " [[0,0]]",
    explanation:
      "The water can flow from the only cell to the Pacific and Atlantic oceans.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>m == heights.length</code>
</li>  
<li class='mt-3 text-sm'>
<code>n == heights[r].length</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ m,n ≤ 200</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ heights[r][c] ≤ 10<sup>5</sup></code>
</li>  
`;

const starterCode = `/**
* @param {number[][]} heights
* @return {number[][]}
*/
var pacificAtlantic = function(heights) {
  // Write your code here
};`;

const solution = {
  solution: `var pacificAtlantic = function(heights) {
  let ROWS = heights.length 
  let COLS = heights[0].length
  let pac = new Set()
  let atl = new Set()
  let res = []
  function dfs(r, c, visit, prevHeight) {
    // Checks for invalid entries
    if (Math.min(r,c) < 0 
    || r >= ROWS || c >= COLS 
    || heights[r][c] < prevHeight 
    || visit.has(r + '-' + c)) return 
  
    // Valid entries gets added to set
    visit.add(r + '-' + c) 
    // Checks neighbors
    dfs(r + 1, c, visit, heights[r][c]) 
    dfs(r - 1, c, visit, heights[r][c])
    dfs(r, c + 1, visit, heights[r][c])
    dfs(r, c - 1, visit, heights[r][c])
  }
  for (let c = 0; c < COLS; c++) { 
    dfs(0, c, pac, heights[0][c]) //Top
    dfs(ROWS - 1, c, atl, heights[ROWS - 1][c]) //Bottom
  }
  for (let r = 0; r < ROWS; r++) { 
    dfs(r, 0, pac, heights[r][0]) //Left
    dfs(r, COLS - 1, atl, heights[r][COLS - 1]) //Right
  }
  for (let r = 0; r < ROWS; r++) { //Checks for collisions
    for (let c = 0; c < COLS; c++) {
      // If both sets have the same values
      if (pac.has(r + '-' + c) && atl.has(r + '-' + c)) { 
        res.push([r,c]) //Push coord to res
      }
    }
  }
  return res
};`,
  time_complexity: `m * n`,
  space_complexity: `m * n`,
};

// checks if the user has the correct code
const handle_pacificAtlantic = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const heights = [
      [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
      ],
      [[1]],
    ];

    const answers = [
      [
        [0, 4],
        [1, 3],
        [1, 4],
        [2, 2],
        [3, 0],
        [3, 1],
        [4, 0],
      ],
      [[0, 0]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < heights.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(heights[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("pacificAtlantic handler function error");
    throw new Error(error);
  }
};

export const PacificAtlanticWaterFlow: Problem = {
  order: 3,
  id: "pacific-atlantic-water-flow",
  title: "Pacific Atlantic Water Flow",
  difficulty: "Medium",
  category: "Graph",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "pacificAtlantic(heights)",
  handlerFunction: handle_pacificAtlantic,
};
