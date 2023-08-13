import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given <code>n</code> pairs of parentheses, write a function to <em>generate all combinations of well-formed parentheses</em>.
</p>`;

const examples = [
  {
    id: 1,
    inputText: "n = 3",
    outputText: '["((()))","(()())","(())()","()(())","()()()"]',
  },
  {
    id: 2,
    inputText: "n = 1",
    outputText: '["()"]',
  },
];

const constraints = `<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ 8</code>
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @return {boolean}
*/
function generateParenthesis(n) {
  // Write your code here
};`;

const solution = {
  solution: `function generateParenthesis(n) {
  let res = []
  let iterate = (str, open, close) =>{
      if(open > n || close >n || close >open) return;
      if(str.length == n *2 && open ==close){
          res.push(str)
          return;
      }
      iterate(str +'(',open+1,close)
      iterate(str + ')', open, close+1)
  }
  iterate('',0,0)
  return res;
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_GenerateParentheses = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const n = [3, 1];

    const answers = [
      ["((()))", "(()())", "(())()", "()(())", "()()()"],
      ["()"],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < n.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(n[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("GenerateParentheses handler function error");
    throw new Error(error);
  }
};

export const GenerateParentheses: Problem = {
  order: 3,
  id: "generate-parentheses",
  title: "Generate Parentheses",
  difficulty: "Medium",
  category: "Stack",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function generateParenthesis(",
  handlerFunction: handle_GenerateParentheses,
};
