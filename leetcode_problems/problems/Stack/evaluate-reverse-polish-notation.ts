import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an array of strings tokens that represents an arithmetic expression in a <strong>Reverse Polish Notation</strong>.
</p>
<p class='mt-4'>
Evaluate the expression. Return <em>an integer that represents the value of the expression.</em>
</p>
<h3 class='mt-4'><strong>Note that:</strong></h3>
<p class='mt-4'>
1. The valid operators are <code>'+'</code>, <code>'-'</code>, <code>'*'</code>, and <code>'/'</code>.
</p>
<p class='mt-4'>
2. Each operand may be an integer or another expression.
</p>
<p class='mt-4'>
3. The division between two integers always <strong>truncates toward zero</strong>.
</p>
<p class='mt-4'>
4. There will not be any division by zero.
</p>
<p class='mt-4'>
5. The input represents a valid arithmetic expression in a reverse polish notation.
</p>
<p class='mt-4'>
6. The answer and all the intermediate calculations can be represented in a <code>32-bit</code> integer.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: 'tokens = ["2","1","+","3","*"]',
    outputText: "9",
    explanation: "((2 + 1) * 3) = 9",
  },
  {
    id: 2,
    inputText: 'tokens = ["4","13","5","/","+"]',
    outputText: "6",
    explanation: "(4 + (13 / 5)) = 6",
  },
  {
    id: 3,
    inputText:
      'tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]',
    outputText: "22",
    explanation:
      "((10 * (6 / ((9 + 3) * -11))) + 17) + 5 \n= ((10 * (6 / (12 * -11))) + 17) + 5 \n= ((10 * (6 / -132)) + 17) + 5 \n= ((10 * 0) + 17) + 5 \n= (0 + 17) + 5 = 17 + 5 \n= 22",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ tokens.length ≤ 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>tokens[i]</code> is either an operator: <code>'+'</code>, <code>'-'</code>, <code>'*'</code>, or <code>'/'</code> or an integer in the range <code>[-200, 200]</code>.
</li> 
`;

const starterCode = `/**
* @param {string[]} tokens
* @return {number}
*/
function evalRPN(tokens) {
  // Write your code here
};`;

const solution = {
  solution: `function evalRPN(tokens) {
  const stack = []
  for (let c of tokens) {
    if (c === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (c === "-") {
      stack.push(-stack.pop() + stack.pop());
    } else if (c === "/") {
      const a = stack.pop(),b = stack.pop();
      stack.push(Math.trunc(b / a));
    } else if (c === "*") {
      stack.push(stack.pop() * stack.pop());
    } else {
      stack.push(parseInt(c));
    }
  }
  return stack.pop();
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_EvalRPN = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const tokens = [
      ["2", "1", "+", "3", "*"],
      ["4", "13", "5", "/", "+"],
      ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"],
    ];

    const answers = [9, 6, 22];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < tokens.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(tokens[i]);
      console.log(result);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("EvalRPN handler function error");
    console.log(error);
    throw new Error(error);
  }
};

export const EvaluateReversePolishNotation: Problem = {
  order: 2,
  id: "evaluate-reverse-polish-notation",
  title: "Evaluate Reverse Polish Notation",
  difficulty: "Medium",
  category: "Stack",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function evalRPN(",
  handlerFunction: handle_EvalRPN,
};
