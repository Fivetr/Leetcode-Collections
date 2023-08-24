import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an integer array cost where <code>cost[i]</code> is the cost of <code>i<sup>th</sup></code> step on a staircase. 
Once you pay the cost, you can either climb one or two steps.
</p>
<p class='mt-4'>
You can either start from the step with index <code>0</code>, or the step with index <code>1</code>.
</p>
<p class='mt-4'>
Return <em>the minimum cost to reach the top of the floor</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "cost = [10,15,20]",
    outputText: "15",
    explanation:
      "You will start at index 1.\n- Pay 15 and climb two steps to reach the top.\nThe total cost is 15.",
  },
  {
    id: 2,
    inputText: "cost = [1,100,1,1,1,100,1,1,100,1]",
    outputText: "6",
    explanation:
      "You will start at index 0.\n- Pay 1 and climb two steps to reach index 2.\n- Pay 1 and climb two steps to reach index 4.\n- Pay 1 and climb two steps to reach index 6.\n- Pay 1 and climb one step to reach index 7.\n- Pay 1 and climb two steps to reach index 9.\n- Pay 1 and climb one step to reach the top.\nThe total cost is 6.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>2 ≤ cost.length ≤ 1000</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ cost[i] ≤ 999</code>
</li>  
`;

const starterCode = `/**
* @param {number[]} cost
* @return {number}
*/
var minCostClimbingStairs = function(cost) {
  // Write your code here
};`;

const solution = {
  solution: `var minCostClimbingStairs = function(cost) {
  let n = cost.length ;
  for(let i=2 ; i<n ; i++){
    cost[i] = Math.min(cost[i-1] , cost[i-2]) + cost[i];
  }
  return Math.min(cost[n-1] , cost[n-2]);
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_MinCostClimbingStairs = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const costs = [
      [10, 15, 20],
      [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
    ];

    const answers = [15, 6];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < costs.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(costs[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("MinCostClimbingStairs handler function error");
    throw new Error(error);
  }
};

export const MinCostClimbingStairs: Problem = {
  order: 2,
  id: "min-cost-climbing-stairs",
  title: "Min Cost Climbing Stairs",
  difficulty: "Easy",
  category: "1-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "minCostClimbingStairs(cost)",
  handlerFunction: handle_MinCostClimbingStairs,
};
