import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given two non-negative integers <code>num1</code> and <code>num2</code> represented as 
strings, return the product of <code>num1</code>  and <code>num2</code> , also represented as a string.
</p>
<p class='mt-4'>
<strong>Note</strong>: You must not use any built-in BigInteger library or convert the inputs to integer directly.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: `num1 = "2", num2 = "3"`,
    outputText: "6",
  },
  {
    id: 2,
    inputText: `num1 = "123", num2 = "456"`,
    outputText: "56088",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ num1.length, num2.length ≤ 200</code>
</li>  
<li class='mt-3 text-sm'>
<code>num1</code> and <code>num2</code> consist of digits only
</li>  
<li class='mt-3 text-sm'>
Both <code>num1</code> and <code>num2</code> do not contain any leading zero, except the number <code>0</code> itself.
</li>  
 
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
var multiply = function(num1, num2) {
  // Write your code here
};`;

const solution = {
  solution: `var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  const m = num1.length, n = num2.length, res = new Array(m+n).fill(0)
  for (let i=m-1; i>=0; i--) {
    for (let j=n-1; j>=0; j--) {
      const p1=i+j, p2=i+j+1
      let sum = res[p2] + Number(num1[i]) * Number(num2[j])
      res[p2] = sum%10
      res[p1] += Math.floor(sum/10)
    }
  }
  if (res[0] === 0) res.shift()
  return res.join('')
};`,
  time_complexity: `n * m`,
  space_complexity: `n + m`,
};

// checks if the user has the correct code
const handle_MultiplyString = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums1 = ["2", "123"];
    const nums2 = ["3", "456"];
    const answers = ["6", "56088"];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums1.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums1[i], nums2[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("MultiplyString handler function error");
    throw new Error(error);
  }
};

export const MultiplyString: Problem = {
  order: 7,
  id: "multiply-strings",
  title: "Multiply Strings",
  difficulty: "Medium",
  category: "Math",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "multiply(num1, num2)",
  handlerFunction: handle_MultiplyString,
};
