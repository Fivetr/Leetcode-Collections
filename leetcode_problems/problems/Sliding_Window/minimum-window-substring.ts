import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given two strings <code>s</code> and <code>t</code> of lengths <code>m</code> and <code>n</code> 
respectively, return <em>the</em> <strong>minimum window substring</strong> <em>of</em> <code>s</code> 
<em>such that every character in</em> <code>t</code> (<strong>including duplicates</strong>) 
<em>is included in the window</em>. If there is no such substring, return <em>the empty string</em> <code>""</code>.
</p>
<p class='mt-4'>
The testcases will be generated such that the answer is <strong>unique</strong>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: 's = "ADOBECODEBANC", t = "ABC"',
    outputText: '"BANC"',
    explanation:
      'The minimum window substring "BANC" includes "A", "B", and "C" from string t.',
  },
  {
    id: 2,
    inputText: 's = "a", t = "a"',
    outputText: '"a"',
    explanation: "The entire string s is the minimum window.",
  },
  {
    id: 3,
    inputText: 's = "a", t = "aa"',
    outputText: '""',
    explanation:
      'Both "a"s from t must be included in the window.\nSince the largest window of s only has one "a", return empty string.',
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>m == s.length</code>
</li> 
<li class='mt-3 text-sm'>
<code>n == t.length</code>
</li> 
<li class='mt-3 text-sm'>
<code>1 ≤ m, n ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>s</code> and <code>t</code> consist of uppercase and lowercase English letters.
</li> 
`;

const starterCode = `/**
* @param {string} s
* @param {string} t
* @return {string}
*/
function minWindow(s, t) {
  // Write your code here
};`;

const solution = {
  solution: `function minWindow(s, t) {

};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_minWindow = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["ADOBECODEBANC", "a", "a"];
    const t = ["ABC", "a", "aa"];

    const answers = ["BANC", "a", ""];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i], t[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("minWindow handler function error");
    throw new Error(error);
  }
};

export const MinimumWindowSubstring: Problem = {
  order: 5,
  id: "minimum-window-substring",
  title: "Minimum Window Substring",
  difficulty: "Hard",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function minWindow(",
  handlerFunction: handle_minWindow,
};
