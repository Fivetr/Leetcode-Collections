import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an integer array <code>nums</code> of <strong>unique</strong> elements, return 
<em>all possible subsets (the power set)</em>.</p>
<p class='mt-4'>
The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,2,3]",
    outputText: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
  },
  {
    id: 2,
    inputText: "nums = [0]",
    outputText: "[[],[0]]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 10</code>
</li>  
<li class='mt-3 text-sm'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li>  
<li class='mt-3 text-sm'>
<code>All the numbers of <code>nums</code> are <strong>unique</strong>.</code>
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number[][]}
*/
var subsets = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var subsets = function(nums) {
  let allSubset = [];
  let bag = [];
  var makeSubsetFrom = function( startIndex ){
    // JS object is passing by referece, so we have to make a copy here
    allSubset.push( [...bag] );
    // Base cases: no more element
    if ( startIndex == nums.length ){
      return;
    }
    // General cases: current level, we choouse element on index i
    for( let i = startIndex ; i < nums.length ; i++){
      // put this element into bag
      bag.push( nums[i] );    
      // make subset from remaining elements
      makeSubsetFrom( i+1 );  
      // undo selection
      bag.pop();              
    }
    return;
  }
  makeSubsetFrom( startIndex = 0 );
  return allSubset;
};`,
  time_complexity: `n * 2<sup>n</sup>`,
  space_complexity: `n * 2<sup>n</sup>`,
};

// checks if the user has the correct code
const handle_Subsets = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [[1, 2, 3], [0]];

    const answers = [
      [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
      [[], [0]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]).sort();
      console.log(result);
      assert.deepStrictEqual(result, answers[i].sort());
    }
    return true;
  } catch (error: any) {
    console.log("Subsets handler function error");
    throw new Error(error);
  }
};

export const Subsets: Problem = {
  order: 1,
  id: "subsets",
  title: "Subsets",
  difficulty: "Medium",
  category: "Backtracking",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "subsets(nums)",
  handlerFunction: handle_Subsets,
};
