import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Write an algorithm to determine if a number <code>n</code> is happy.
</p>
<p class='mt-4'>
A <strong>happy number</strong> is a number defined by the following process:
</p>
<p class='mt-4'>
Starting with any positive integer, replace the number by the sum of the squares of its digits.
</p>
<p class='mt-4'>
Repeat the process until the number equals 1 (where it will stay), or it <strong>loops endlessly in a cycle</strong> which does not include 1.
</p>
<p class='mt-4'>
Those numbers for which this process <strong>ends in 1</strong> are happy.
</p>
<p class='mt-4'>
Return <code>true</code> <em>if</em> <code>n</code> <em>is a happy number, and</em> <code>false</code> <em>if not</em>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "Input: n = 19",
    outputText: "true",
    explanation:
      "\n1^2 + 9^2 = 82\n8^2 + 2^2 = 68\n6^2 + 8^2 = 100\n1^2 + 0^2 + 0^2 = 1",
  },
  {
    id: 2,
    inputText: "n = 2",
    outputText: "false",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ 2<sup>31</sup> - 1</code>
</li>  
`;

const starterCode = `/**
* @param {number} n
* @return {boolean}
*/
var isHappy = function(n) {
  // Write your code here
};`;

const solution = {
  solution: `var isHappy = function(n) {
  let set = new Set();
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = nextNumber(n);
  }
  return n === 1;
}

var nextNumber = function(n) {
  let newNumber = 0;
  while (n !== 0) {
    let num = n % 10;
    newNumber += num * num;
    n = Math.floor(n / 10);
  }
  return newNumber;
};`,
  time_complexity: `logn`,
  space_complexity: `logn`,
};

// checks if the user has the correct code
const handle_HappyNumber = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const n = [19, 2];

    const answers = [true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < n.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(n[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("HappyNumber handler function error");
    throw new Error(error);
  }
};

export const HappyNumber: Problem = {
  order: 1,
  id: "happy-number",
  title: "Happy Number",
  difficulty: "Easy",
  category: "Math",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "isHappy(n)",
  handlerFunction: handle_HappyNumber,
};
