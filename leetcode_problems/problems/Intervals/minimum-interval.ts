import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given a 2D integer array <code>intervals</code>, where <code>intervals[i] = [left<sub>i</sub>, right<sub>i</sub>]</code> 
describes the <code>i<sup>th</sup></code> interval starting at <code>left<sub>i</sub></code> and ending at <code>right<sub>i</sub></code> 
<strong>(inclusive)</strong>. The <strong>size</strong> of an interval is defined as the number of integers it contains, 
or more formally <code>right<sub>i</sub> - left<sub>i</sub> + 1</code>.
</p>
<p class='mt-4'>
You are also given an integer array <code>queries</code>. The answer to the <code>j<sup>th</sup></code> query is 
the <strong>size of the smallest interval</strong> <code>i</code> such that 
<code>left<sub>i</sub> <= queries[j] <= right<sub>i</sub></code>. If no such interval exists, the answer is -1.
</p>
<p class='mt-4'>
Return <em>an array containing the answers to the queries</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]",
    outputText: "[3,3,1,4]",
    explanation:
      "The queries are processed as follows:\n- Query = 2: The interval [2,4] is the smallest interval containing 2. The answer is 4 - 2 + 1 = 3.\n- Query = 3: The interval [2,4] is the smallest interval containing 3. The answer is 4 - 2 + 1 = 3.\n- Query = 4: The interval [4,4] is the smallest interval containing 4. The answer is 4 - 4 + 1 = 1.\n- Query = 5: The interval [3,6] is the smallest interval containing 5. The answer is 6 - 3 + 1 = 4.",
  },
  {
    id: 2,
    inputText: "intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]",
    outputText: "[2,-1,4,6]",
    explanation:
      "The queries are processed as follows:\n- Query = 2: The interval [2,3] is the smallest interval containing 2. The answer is 3 - 2 + 1 = 2.\n- Query = 19: None of the intervals contain 19. The answer is -1.\n- Query = 5: The interval [2,5] is the smallest interval containing 5. The answer is 5 - 2 + 1 = 4.\n- Query = 22: The interval [20,25] is the smallest interval containing 22. The answer is 25 - 20 + 1 = 6.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ intervals.length ≤ 10<sup>5</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ queries.length ≤ 10<sup>5</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>intervals[i].length == 2</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ left<sub>i</sub> ≤ rightsub>i</sub> ≤ 10<sup>7</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ queries[j] ≤ 10<sup>7</sup></code>
</li>  
`;

const starterCode = `/**
* @param {number[]} gas
* @param {number[]} cost
* @return {number}
*/
var canCompleteCircuit = function(gas, cost) {
  // Write your code here
};`;

const solution = {
  solution: `var canCompleteCircuit = function(gas, cost) {
  /* Return -1 if sum of gas is less than sum of cost.
     (Need enough gas to cover the cost to travel around the circuit once) */
  if (gas.reduce((acc, item) => acc + item) < 
      cost.reduce((acc, item) => acc + item)) return -1;
  
  let tank = 0, start = 0
  /* If a position reached with a tank < 0, that means we should
     reset the tank and try to start in the next position. */
  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i]
    tank += diff;
    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
  }
  return start;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_MinimumInterval = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const gas = [
      [1, 2, 3, 4, 5],
      [2, 3, 4],
    ];
    const costs = [
      [3, 4, 5, 1, 2],
      [3, 4, 3],
    ];

    const answers = [3, -1];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < gas.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(gas[i], costs[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("MinimumInterval handler function error");
    throw new Error(error);
  }
};

export const MinimumInterval: Problem = {
  order: 6,
  id: "minimum-interval-to-include-each-query",
  title: "Minimum Interval to Include Each Query",
  difficulty: "Hard",
  category: "Intervals",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "canCompleteCircuit(gas, cost)",
  handlerFunction: handle_MinimumInterval,
};
