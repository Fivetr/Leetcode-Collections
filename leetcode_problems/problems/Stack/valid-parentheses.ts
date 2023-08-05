import assert from "assert";
import { Problem } from "../../../types/index";

const problemStatement = `<p class='mt-3'>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p> <p class='mt-3'>An input string is valid if:</p> <ul> <li class='mt-2'>Open brackets must be closed by the same type of brackets.</li> <li class='mt-3'>Open brackets must be closed in the correct order.</li>
<li class="mt-3">Every close bracket has a corresponding open bracket of the same type. </li>
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

const constraints = `<li class='mt-2'><code>1 <= s.length <= 10<sup>4</sup></code></li>
<li class='mt-2 '><code>s</code> consists of parentheses only <code class="text-md">'()[]{}'</code>.</li>`;

const starterCode = `
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
function validParentheses(s) {
  // Write your code here
};`;

const solution = {
  solution: `/**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
  var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0 ; i < nums.length ; i++){
      let diff = target - nums[i];
      if(diff in map){
        return [map[diff],i]
      } 
      map[nums[i]] = i
    }
  };`,
  time_complexity: `n<sup>2</sup>`,
  space_complexity: `n`,
};

export const handle_ValidParentheses = (fn: any) => {
  try {
    const tests = ["()", "()[]{}", "(]", "([)]", "{[]}"];
    const answers = [true, true, false, false, true];
    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.error("Error from validParenthesesHandler: ", error);
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
  starterFunctionName: "function validParentheses(",
  handlerFunction: handle_ValidParentheses,
};
