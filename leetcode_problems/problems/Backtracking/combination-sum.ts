import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an array of <strong>distinct</strong> integers <code>candidates</code> and 
a target integer <code>target</code>, return <em>a list of all</em> 
<strong>unique combinations</strong> <em>of</em> <code>candidates</code> 
<em>where the chosen numbers sum to</em> <code>target</code>. You may return the 
combinations in <strong>any order</strong>.
</p>
<p class='mt-4'>
The <strong>same</strong> number may be chosen from <code>candidates</code> an 
<strong>unlimited number of times</strong>. Two combinations are unique if the frequency of at least one of the chosen numbers is different.</p>
<p class='mt-4'>
The test cases are generated such that the number of unique combinations that sum up to <code>target</code> is less than <code>150</code> combinations for the given input.</p>

`;

const examples = [
  {
    id: 1,
    inputText: "candidates = [2,3,6,7], target = 7",
    outputText: "[[2,2,3],[7]]",
    explanation:
      "2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.\n7 is a candidate, and 7 = 7.\nThese are the only two combinations.",
  },
  {
    id: 2,
    inputText: "candidates = [2,3,5], target = 8",
    outputText: "[[2,2,2,2],[2,3,3],[3,5]]",
  },
  {
    id: 3,
    inputText: "candidates = [2], target = 1",
    outputText: "[]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ candidates.length ≤ 360</code>
</li>  
<li class='mt-3 text-sm'>
<code>2 ≤ candidates[i] ≤ 40</code>
</li>  
<li class='mt-3 text-sm'>
<code>All elements of <code>candidates</code> are <strong>distinct</strong>.</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ target  ≤ 40</code>
</li>  

`;

const starterCode = `/**
* @param {number[]} candidates
* @param {number} target
* @return {number[][]}
*/
var combinationSum = function(candidates, target) {
  // Write your code here
};`;

const solution = {
  solution: `var combinationSum = function(candidates, target) {
    let result = []; 
    dfs(candidates, target, [], result); 
    return result;           
};

function dfs(nums, target, path, result) { 
  if(target < 0){ 
    // Backtracking 
    return; 
  } 
  if(target === 0){ 
    result.push(path); 
    return; 
  } 
  for(let i = 0; i < nums.length; i++){ 
    dfs(nums.slice(i), target - nums[i], [...path, nums[i]], result); 
  } 
};`,
  time_complexity: `n<sup>t</sup>`,
  space_complexity: `k`,
};

// checks if the user has the correct code
const handle_CombinationSum = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const candidates = [[2, 3, 6, 7], [2, 3, 5], [2]];
    const targets = [7, 8, 1];

    const answers = [
      [[2, 2, 3], [7]],
      [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ],
      [],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < candidates.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(candidates[i], targets[i]).sort();
      assert.deepStrictEqual(result, answers[i].sort());
    }
    return true;
  } catch (error: any) {
    console.log("CombinationSum handler function error");
    throw new Error(error);
  }
};

export const CombinationSum: Problem = {
  order: 3,
  id: "combination-sum",
  title: "Combination Sum",
  difficulty: "Medium",
  category: "Backtracking",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "combinationSum(candidates, target)",
  handlerFunction: handle_CombinationSum,
};
