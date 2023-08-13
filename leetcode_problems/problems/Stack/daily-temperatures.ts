import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an array of integers <code>temperatures</code> represents the daily temperatures, 
return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is the number of days you have to 
wait after the</em> <code>ith</code> <em>day to get a warmer temperature.</em> If there is no future 
day for which this is possible, keep <code>answer[i] == 0</code> instead.
</p>`;

const examples = [
  {
    id: 1,
    inputText: "temperatures = [73,74,75,71,69,72,76,73]",
    outputText: "[1,1,4,2,1,1,0,0]",
  },
  {
    id: 2,
    inputText: "temperatures = [30,40,50,60]",
    outputText: "[1,1,1,0]",
  },
  {
    id: 3,
    inputText: "temperatures = [30,60,90]",
    outputText: "[1,1,0]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ temperatures.length ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>30 ≤ temperatures[i] ≤ 100</code>
</li> 
`;

const starterCode = `/**
* @param {number[]} temperatures
* @return {number[]}
*/
function dailyTemperatures(temperatures) {
  // Write your code here
};`;

const solution = {
  solution: `function dailyTemperatures(temperatures) {
  let stack = [], ans = Array(temperatures.length).fill(0);
  for(let i = 0; i < temperatures.length; i++) {
      while(stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
          let index = stack.pop();
          ans[index] = i - index;
      }
      stack.push(i);
  }
  return ans;
};\n\n\n\n\n\n\n\n\n\n\n\n`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_DailyTemperatures = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const temperatures = [
      [73, 74, 75, 71, 69, 72, 76, 73],
      [30, 40, 50, 60],
      [30, 60, 90],
    ];

    const answers = [
      [1, 1, 4, 2, 1, 1, 0, 0],
      [1, 1, 1, 0],
      [1, 1, 0],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < temperatures.length; i++) {
      // result is the output of the user's function and answer is the expected output
      console.log(fn);
      const result = fn(temperatures[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("DailyTemperatures handler function error");
    throw new Error(error);
  }
};

export const DailyTemperatures: Problem = {
  order: 4,
  id: "daily-temperature",
  title: "Daily Temperatures",
  difficulty: "Medium",
  category: "Stack",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function dailyTemperatures(",
  handlerFunction: handle_DailyTemperatures,
};
