import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
There are <code>n</code> cars going to the same destination along a one-lane road. 
The destination is <code>target</code> miles away.
</p>
<p class='mt-4'>
You are given two integer array <code>position</code> and <code>speed</code>, both of length <code>n</code>, 
where <code>position[i]</code> is the position of the <code>i<sup>th</sup></code> car and <code>speed[i]</code> is the 
speed of the <code>i<sup>th</sup></code> car (in miles per hour).
</p>
<p class='mt-4'>
A car can never pass another car ahead of it, but it can catch up to it and drive 
bumper to bumper <strong>at the same speed</strong>. The faster car will <strong>slow down</strong> to match the 
slower car's speed. The distance between these two cars is ignored 
(i.e., they are assumed to have the same position).
</p>
<p class='mt-4'>
A <code>car fleet</code> is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.
</p>
<p class='mt-4'>
If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.
</p>
<p class='mt-4'>
Return the <strong>number of car fleets</strong> <em>that will arrive at the destination.</em>
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]",
    outputText: "3",
    explanation:
      "\nThe cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12. \nThe car starting at 0 does not catch up to any other car, so it is a fleet by itself. \nThe cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. \nThe fleet moves at speed 1 until it reaches target. \nNote that no other cars meet these fleets before the destination, so the answer is 3.",
  },
  {
    id: 2,
    inputText: "target = 10, position = [3], speed = [3]",
    outputText: "1",
    explanation: "There is only one car, hence there is only one fleet.",
  },
  {
    id: 3,
    inputText: "arget = 100, position = [0,2,4], speed = [4,2,1]",
    outputText: "1",
    explanation:
      "\nThe cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. \nThe fleet moves at speed 2. \nThen, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>n == position.length == speed.length</code>
</li> 
<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>0 < target ≤ 10<sup>6</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>0 ≤ positions[i] ≤ target</code>
</li> 
<li class='mt-3 text-sm'>
All the values of <code>position</code> are <strong>unique</strong>.
</li> 
<li class='mt-3 text-sm'>
<code>0 < speed[i] ≤ 10<sup>6</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number} target
* @param {number[]} position
* @param {number[]} speed
* @return {number}
*/
var carFleet = function(target, position, speed{
  // Write your code here
};`;

const solution = {
  solution: `var carFleet = function(target, position, speed{
  //create pair of pos and speed
  const pair = position.map((pos, idx) => [pos, speed[idx]]);
  const stack = [];
  //sort in ascending order
  pair.sort((posA, posB) => posA[0] - posB[0]);
  for (let i = pair.length - 1; i >= 0; i--) {
      //calculate time and add it to stack
      const [pos, speed] = pair[i];
      stack.push((target - pos) / speed)
      // do nothing if just one car in stack
      // if the current car will fleet with the car before it 
      // i.e. stack[-1] < stack[-2] ---> pop()
      if(stack.length >= 2 && stack[stack.length-1] <= stack[stack.length-2]){
          stack.pop()
      }
  }
  // the length of the stack is the number of car fleet
  return stack.length;
};





`,
  time_complexity: `nlogn`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_CarFleet = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const targets = [23, 10, 100];
    const posisitons = [[10, 8, 0, 5, 3], [3], [0, 2, 4]];
    const speeds = [[2, 4, 1, 1, 3], [3], [4, 2, 1]];
    const answers = [3, 1, 1];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < targets.length; i++) {
      // result is the output of the user's function and answer is the expected output
      console.log(fn);
      const result = fn(targets[i], posisitons[i], speeds[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("CarFleet handler function error");
    console.log(error);
    throw new Error(error);
  }
};

export const CarFleet: Problem = {
  order: 5,
  id: "car-fleet",
  title: "Car Fleet",
  difficulty: "Medium",
  category: "Stack",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "carFleet(target, position, speed)",
  handlerFunction: handle_CarFleet,
};
