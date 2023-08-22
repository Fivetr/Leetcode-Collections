import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given a string <code>s</code> containing only three types of characters: <code>'('</code>, <code>')'</code> 
and <code>'*'</code>, return <code>true</code> <em>if</em> <code>s</code> <em>is <strong>valid</strong></em>.
</p>
<p class='mt-4'>
The following rules define a <strong>valid</strong> string:
</p>
<p class='mt-4'>
Any left parenthesis <code>'('</code> must have a corresponding right parenthesis <code>')'</code>.
</p>
<p class='mt-4'>
Any right parenthesis <code>')'</code> must have a corresponding left parenthesis <code>'('</code>.
</p>
<p class='mt-4'>
Left parenthesis <code>'('</code> must go before the corresponding right parenthesis <code>')'</code>.
</p>
<p class='mt-4'>
<code>'*'</code> could be treated as a single right parenthesis <code>')'</code> or a single left parenthesis <code>'('</code> or an empty string <code>""</code>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: `s = "()"`,
    outputText: "true",
  },
  {
    id: 2,
    inputText: `s = "(*)"`,
    outputText: "true",
  },
  {
    id: 3,
    inputText: `s = "(*))"`,
    outputText: "true",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ s.length ≤ 100</code>
</li>  
<li class='mt-3 text-sm'>
<code>s[i]</code> is <code>'('</code>, <code>')'</code> or <code>'*'.</code>
</li>  
`;

const starterCode = `/**
* @param {string} s
* @return {boolean}
*/
var checkValidString = function(s) {
  // Write your code here
};`;

const solution = {
  solution: `var checkValidString = function(s) {
  let left_min = 0;
  let left_max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      left_min++;
      left_max++;
    }
    if (s[i] == ')') {
      left_min--;
      left_max--;
    }
    if (s[i] == '*') {
      left_min--;
      left_max++;
    }
    if (left_min < 0) {
      left_min = 0
    }
    if (left_max < 0) {
      return false;
    }
  }
  if (left_min == 0 || left_max == 0) {
    return true;
  }
  else {
    return false;
  }
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_ValidParenthesisString = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["()", "(*)", "(*))"];

    const answers = [true, true, true];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("ValidParenthesisString handler function error");
    throw new Error(error);
  }
};

export const ValidParenthesisString: Problem = {
  order: 8,
  id: "valid-parenthesis-string",
  title: "Valid Parenthesis String",
  difficulty: "Medium",
  category: "Greedy",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "checkValidString(s)",
  handlerFunction: handle_ValidParenthesisString,
};
