import assert from "assert";
import { Problem } from "../../../types/index";

const problemStatement = `<p class='mt-4'>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p> <p class='mt-4'>An input string is valid if:</p> <ul> <li class='mt-2'>Open brackets must be closed by the same type of brackets.</li> <li class='mt-4'>Open brackets must be closed in the correct order.</li>
<li class="mt-4">Every close bracket has a corresponding open bracket of the same type. </li>
</ul>`;

const Examples = [
  {
    id: 0,
    inputText: 's = "()"',
    outputText: "true",
  },
  {
    id: 1,
    inputText: 's = "()[]{}"',
    outputText: "true",
  },
  {
    id: 2,
    inputText: 's = "(]"',
    outputText: "false",
  },
  {
    id: 3,
    inputText: 's = "([)]"',
    outputText: "false",
  },
];

const constraints = `<li class='mt-3'><code>1 <= s.length <= 10<sup>4</sup></code></li>
<li class='mt-3'><code>s</code> consists of parentheses only <code class="text-md">'()[]{}'</code>.</li>`;

const starterCode = `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var validParentheses = function(s) {
  // Write your code here
};`;

const solution = {
  solution: `var validParentheses = function(s) {
  if (s.length % 2 !== 0) return false;

  // Initialize stack to store the closing brackets expected
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // If open parentheses are present, push it to stack
    if (s[i] == "{") {
      stack.push("}");
    } else if (s[i] == "[") {
      stack.push("]");
    } else if (s[i] == "(") {
      stack.push(")");
    }
    // If a close bracket is found, check that it matches the last stored open bracket
    else if (stack.pop() !== s[i]) {
      return false;
    }
  }
  // return false if stack is non empty
  return stack.length === 0 ? true : false;
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

export const handle_ValidParentheses = (fn: any) => {
  try {
    const tests = ["()", "()[]{}", "(]", "([)]", "{[]}", "(("];
    const answers = [true, true, false, false, true, false];
    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.error("Error from validParenthesesHandler: ", error);
    console.log(error);
    throw new Error(error);
  }
};

export const validParentheses: Problem = {
  order: 1,
  id: "valid-parentheses",
  title: "Valid Parentheses",
  difficulty: "Easy",
  category: "Stack",
  problemStatement: problemStatement,
  examples: Examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "validParentheses(s)",
  handlerFunction: handle_ValidParentheses,
};
