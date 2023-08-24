import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are climbing a staircase. It takes <code>n</code> steps to reach the top.
</p>
<p class='mt-4'>
Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "n = 2",
    outputText: "2",
    explanation:
      "There are two ways to climb to the top.\n1. 1 step + 1 step\n2. 2 steps",
  },
  {
    id: 2,
    inputText: "n = 3",
    outputText: "3",
    explanation:
      "There are three ways to climb to the top.\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ 45</code>
</li>  
`;

const starterCode = `/**
* @param {number} n
* @return {number}
*/
var climbStairs = function(n) {
  // Write your code here
};`;

const solution = {
  solution: `var climbStairs = function(n) {
  let firstStep = 1;
  let secondStep = 1;
  for (let i=0; i<n-1; i++) {
    let temp = firstStep ;
    firstStep += secondStep;
    secondStep = temp;
  }
  return firstStep;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_ClimbingStairs = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const n = [2, 3];

    const answers = [2, 3];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < n.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(n[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("ClimbingStairs handler function error");
    throw new Error(error);
  }
};

export const ClimbingStairs: Problem = {
  order: 1,
  id: "climbing-stairs",
  title: "Climbing Stairs",
  difficulty: "Easy",
  category: "1-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "climbStairs(n)",
  handlerFunction: handle_ClimbingStairs,
};
