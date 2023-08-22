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
var minWindow = function(s, t) {
  // Write your code here
};`;

const solution = {
  solution: `var minWindow = function(s, t) {
    // Store the count of required string s1
    const count = {};
    let targetLength = t.length;
    let res = [];
    let min = Infinity;
    for (let char of t) {
      count[char] = (count[char] || 0) + 1;
    }
    for (let right = 0, left = 0; right < s.length; right++) {
      // If we found s character in t then decrease targetLength
      if (count[s[right]] > 0) {
        targetLength--;
      }
      count[s[right]]--;
      // When we meet the conditions, targetlength == 0
      while (!targetLength) {
        // Update the minimum substring length
        if (right - left < min) {
          min = right - left;
          res = [left, right];
        }
        // Move the left pointer to the right until the conditions is no longer satisfied
        // targetlength != 0
        if (count[s[left]] >= 0) {
          targetLength++;
        }
        count[s[left]]++;
        left++;
      }
    }
    return s.slice(res[0], res[1] + 1);
};`,
  time_complexity: `n`,
  space_complexity: `s`,
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
  order: 6,
  id: "minimum-window-substring",
  title: "Minimum Window Substring",
  difficulty: "Hard",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "minWindow(s, t)",
  handlerFunction: handle_minWindow,
};
