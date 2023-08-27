import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given a large integer represented as an integer array <code>digits</code>, where each 
<code>digits[i]</code> is the <code>i<sup>th</sup></code> digit of the integer. The digits are ordered from most 
significant to least significant in left-to-right order. The large integer 
does not contain any leading <code>0</code>'s.
</p>
<p class='mt-4'>
Increment the large integer by one and return <em>the resulting array of digits</em>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "digits = [1,2,3]",
    outputText: "[1,2,4]",
    explanation:
      "The array represents the integer 123.\nIncrementing by one gives 123 + 1 = 124.\nThus, the result should be [1,2,4].",
  },
  {
    id: 2,
    inputText: "digits = [4,3,2,1]",
    outputText: "[4,3,2,2]",
    explanation:
      "The array represents the integer 4321.\nIncrementing by one gives 4321 + 1 = 4322.\nThus, the result should be [4,3,2,2].",
  },
  {
    id: 3,
    inputText: "digits = [9]",
    outputText: "[1,0]",
    explanation:
      "The array represents the integer 9.\nIncrementing by one gives 9 + 1 = 10.\nThus, the result should be [1,0].",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ digits.length ≤ 100</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ digits[i] ≤ 9</code>
</li>  
<li class='mt-3 text-sm'>
<code>digits</code> does not contain any leading <code>0</code>'s.
</li>  
`;

const starterCode = `/**
* @param {number[]} digits
* @return {number[]}
*/
var plusOne = function(digits) {
  // Write your code here
};`;

const solution = {
  solution: `var plusOne = function(digits) {
  for(let i = digits.length - 1; i >= 0; i--) {
    if(digits[i] === 9) {
      digits[i] = 0
    }
    else {
      digits[i] += 1
      return digits
    }
  }
  return [1, ...digits]
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_PlusOne = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const digits = [[1, 2, 3], [4, 3, 2, 1], [9]];

    const answers = [
      [1, 2, 4],
      [4, 3, 2, 2],
      [1, 0],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < digits.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(digits[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("PlusOne handler function error");
    throw new Error(error);
  }
};

export const PlusOne: Problem = {
  order: 2,
  id: "plus-one",
  title: "Plus One",
  difficulty: "Easy",
  category: "Math",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "plusOne(digits)",
  handlerFunction: handle_PlusOne,
};
