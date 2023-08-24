import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Implement pow(x, n), which calculates <code>x</code> raised to the power <code>n</code> 
(i.e., <code>x<sup>n</sup></code>).
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "x = 2.00000, n = 10",
    outputText: "1024.00000",
  },
  {
    id: 2,
    inputText: "x = 2.10000, n = 3",
    outputText: "9.26100",
  },
  {
    id: 3,
    inputText: "x = 2.00000, n = -2",
    outputText: "0.25000",
    explanation: "2^-2 = 1/2^2 = 1/4 = 0.25",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>-100.0 ≤ x ≤ 100.0</code>
</li>  
<li class='mt-3 text-sm'>
<code>-2<sup>31</sup> ≤ n ≤ 2<sup>31</sup>-1</code>
</li>  
<li class='mt-3 text-sm'>
<code>n</code> is an integer.
</li>  
<li class='mt-3 text-sm'>
Either <code>x</code> is not zero or <code>n > 0</code>.
</li>  
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> ≤ x<sup>n</sup> ≤ 10<sup>4</sup></code>
</li>
`;

const starterCode = `/**
* @param {number} x
* @param {number} n
* @return {number}
*/
var myPow = function(x, n) {
  // Write your code here
};`;

const solution = {
  solution: `var myPow = function(x, n) {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_Pow = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const x = [2.0, 2.1, 2.0];
    const n = [10, 3, -2];

    const answers = [1024.0, 9.261, 0.25];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < x.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(x[i], n[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Pow handler function error");
    throw new Error(error);
  }
};

export const Pow: Problem = {
  order: 6,
  id: "pow",
  title: "Pow(x,n)",
  difficulty: "Medium",
  category: "Math",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "myPow(x, n)",
  handlerFunction: handle_Pow,
};
