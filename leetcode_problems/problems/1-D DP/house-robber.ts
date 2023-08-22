import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
There are <code>n</code> gas stations along a circular route, where the amount of gas at 
the <code>ith</code> station is <code>gas[i]</code>.
</p>
<p class='mt-4'>
You have a car with an unlimited gas tank and it costs <code>cost[i]</code> of gas to travel from 
the <code>i<sup>th</sup></code> station to its next <code>(i + 1)<sup>th</sup></code> station. You begin the journey with an empty tank at one of the gas stations.
</p>
<p class='mt-4'>
Given two integer arrays <code>gas</code> and <code>cost</code>, return 
<em>the starting gas station's index if you can travel around the circuit once in the 
clockwise direction, otherwise return</em> <code>-1</code>. If there exists a 
solution, it is <strong>guaranteed</strong> to be <strong>unique</strong>
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
    outputText: "3",
    explanation:
      "Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 4. Your tank = 4 - 1 + 5 = 8\nTravel to station 0. Your tank = 8 - 2 + 1 = 7\nTravel to station 1. Your tank = 7 - 3 + 2 = 6\nTravel to station 2. Your tank = 6 - 4 + 3 = 5\nTravel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.\nTherefore, return 3 as the starting index.",
  },
  {
    id: 2,
    inputText: "gas = [2,3,4], cost = [3,4,3]",
    outputText: "-1",
    explanation:
      "You can't start at station 0 or 1, as there is not enough gas to travel to the next station.\nLet's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 0. Your tank = 4 - 3 + 2 = 3\nTravel to station 1. Your tank = 3 - 3 + 3 = 3\nYou cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.\nTherefore, you can't travel around the circuit once no matter where you start.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>n == gas.length == cost.length</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ 10<sup>5</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ gas[i], cost[i] ≤ 10<sup>4</sup></code>
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
const handle_HouseRobber = (fn: any) => {
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
    console.log("HouseRobber handler function error");
    throw new Error(error);
  }
};

export const HouseRobber: Problem = {
  order: 3,
  id: "house-robber",
  title: "House Robber",
  difficulty: "Medium",
  category: "1-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "canCompleteCircuit(gas, cost)",
  handlerFunction: handle_HouseRobber,
};
