import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given a collection of candidate numbers (<code>candidates</code>) and a target number 
(<code>target</code>), find all unique combinations in <code>candidates</code> where 
the candidate numbers sum to <code>target</code>.
</p>
<p class='mt-4'>
Each number in <code>candidates</code> may only be used <strong>once</strong> in the combination.
</p>
<p class='mt-4'>
<strong>Note</strong>: The solution set must not contain duplicate combinations.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "candidates = [10,1,2,7,6,1,5], target = 8",
    outputText: "[\n[1,1,6],\n[1,2,5],\n[1,7],\n[2,6]\n]",
  },
  {
    id: 2,
    inputText: "candidates = [2,5,2,1,2], target = 5",
    outputText: "[\n[1,2,2],\n[5]\n]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ candidates.length ≤ 100</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ candidates【i】 ≤ 50</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ target ≤ 30</code>
</li>  
`;

const starterCode = `/**
* @param {number[]} candidates
* @param {number} target
* @return {number[][]}
*/
var combinationSum2 = function(candidates, target) {
  // Write your code here
};`;

const solution = {
  solution: `var combinationSum2 = function(candidates, target) {
  candidates.sort((a,b)=>a-b)
  let res = []
  let iterate = (index,sum,temp) =>{
    if(sum>target) return;
    if(sum == target){
      res.push(temp)
      return;
    }
        
    for(let i =index; i<candidates.length;i++){
      if(i != index && candidates[i] == candidates[i-1]) continue;
      iterate(i+1,sum+candidates[i],[...temp,candidates[i]])
    }
  }
  iterate(0,0,[])
  return res;
};`,
  time_complexity: `2<sup>n</sup>`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_CombinationSum2 = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const candidates = [
      [10, 1, 2, 7, 6, 1, 5],
      [2, 5, 2, 1, 2],
    ];
    const targets = [8, 5];
    const answers = [
      [
        [1, 1, 6],
        [1, 2, 5],
        [1, 7],
        [2, 6],
      ],
      [[1, 2, 2], [5]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < candidates.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(candidates[i], targets[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("CombinationSum2 handler function error");
    throw new Error(error);
  }
};

export const CombinationSum2: Problem = {
  order: 4,
  id: "combination-sum-2",
  title: "Combination Sum 2",
  difficulty: "Medium",
  category: "Backtracking",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "combinationSum2(candidates, target)",
  handlerFunction: handle_CombinationSum2,
};
