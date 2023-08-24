import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given two strings <code>text1</code> and <code>text2</code>, return <em>the length of their longest <strong>common subsequence</strong></em>. 
If there is no <strong>common subsequence</strong>, return <code>0</code>.
</p>
<p class='mt-4'>
A <strong>subsequence</strong> of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
</p>
<p class='mt-4'>
For example, <code>"ace"</code> is a subsequence of <code>"abcde"</code>.
</p>
<p class='mt-4'>
A <strong>common subsequence</strong> of two strings is a subsequence that is common to both strings.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: `text1 = "abcde", text2 = "ace" `,
    outputText: "3",
    explanation: `The longest common subsequence is "ace" and its length is 3.`,
  },
  {
    id: 2,
    inputText: `text1 = "abc", text2 = "abc"`,
    outputText: "3",
    explanation: `The longest common subsequence is "abc" and its length is 3.`,
  },
  {
    id: 3,
    inputText: `text1 = "abc", text2 = "def"`,
    outputText: "0",
    explanation: "There is no such common subsequence, so the result is 0.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ text1.length, text2.length ≤ 1000</code>
</li>  
<li class='mt-3 text-sm'>
<code>text1</code> and <code>text2</code> consist of only lowercase English characters.
</li>  
`;

const starterCode = `/**
* @param {string} text1
* @param {string} text2
* @return {number}
*/
var longestCommonSubsequence = function(text1, text2) {
  // Write your code here
};`;

const solution = {
  solution: `var longestCommonSubsequence = function(text1, text2) {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_LongestCommonSubsequence = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const text1 = ["abcde", "abc", "abc"];
    const text2 = ["ace", "abc", "def"];

    const answers = [3, 3, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < text1.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(text1[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("LongestCommonSubsequence handler function error");
    throw new Error(error);
  }
};

export const LongestCommonSubsequence: Problem = {
  order: 2,
  id: "longest-common-subsequence",
  title: "Longest Common Subsequence",
  difficulty: "Medium",
  category: "2-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "longestCommonSubsequence(text1, text2)",
  handlerFunction: handle_LongestCommonSubsequence,
};
