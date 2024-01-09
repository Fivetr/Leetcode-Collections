import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
We are given an array <code>asteroids</code> of integers representing asteroids in a row.
</p>
<p class='mt-4'>
For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
</p>
<p class='mt-4'>
Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "asteroids = [5,10,-5]",
    outputText: "[5,10]",
    explanation:
      "The 10 and -5 collide resulting in 10. The 5 and 10 never collide.",
  },
  {
    id: 2,
    inputText: "asteroids = [8,-8]",
    outputText: "[]",
    explanation: "The 8 and -8 collide exploding each other.",
  },
  {
    id: 3,
    inputText: "asteroids = [10,2,-5]",
    outputText: "[10]",
    explanation:
      "The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>2 <= asteroids.length <= 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>-1000 <= asteroids[i] <= 1000</code>
</li> 
<li class='mt-3 text-sm'>
<code>asteroids[i] != 0</code>
</li> 
`;

const starterCode = `/**
* @param {number[]} asteroids
* @return {number[]}
*/
var asteroidCollision = function(asteroids) {
  // Write your code here
};`;

const solution = {
  solution: `var asteroidCollision = function(asteroids) {
    const stack = []
    for(let asteroid of asteroids){
        while(stack.length && stack[stack.length-1] > 0 && asteroid < 0){
            let diff = asteroid + stack[stack.length-1]
            if(diff < 0) stack.pop()
            else if(diff > 0) asteroid = 0
            else{
                stack.pop()
                asteroid = 0
            }
        }
        if(asteroid) stack.push(asteroid)
    }
    return stack
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_AsteroidCollisions = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const n = [
      [5, 10, -5],
      [8, -8],
      [10, 2, -5],
    ];

    const answers = [[5, 10], [], [10]];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < n.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(n[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("AsteroidCollision handler function error");
    throw new Error(error);
  }
};

export const AsteroidCollision: Problem = {
  order: 8,
  id: "asteroid-collision",
  title: "Asteroid Collision",
  difficulty: "Medium",
  category: "Stack",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "asteroidCollision(asteroids)",
  handlerFunction: handle_AsteroidCollisions,
};
