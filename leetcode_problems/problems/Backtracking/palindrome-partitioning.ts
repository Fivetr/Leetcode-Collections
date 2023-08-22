import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given a string <code>s</code>, partition <code>s</code> such that every substring of the 
partition is a <strong>palindrome</strong>. Return <em>all possible palindrome partitioning of</em> <code>s</code>.</p>`;

const examples = [
  {
    id: 1,
    inputText: `s = "aab"`,
    outputText: '[["a","a","b"],["aa","b"]]',
  },
  {
    id: 2,
    inputText: `s = "a"`,
    outputText: '[["a"]]',
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ s.length ≤ 16</code>
</li>  
<li class='mt-3 text-sm'>
<code>s</code> contains only lowercase English letters.
</li>  
`;

const starterCode = `/**
* @param {string} s
* @return {string[][]}
*/
var partition = function(s) {
  // Write your code here
};`;

const solution = {
  solution: `var partition = function(s) {
  let n = s.length; 
  let dp = Array(n).fill(false).map(() => Array(n).fill(false)); 
  for (let right = 0; right < n; right++) { 
    for (let left = 0; left <= right; left++) { 
      if (s[left] === s[right] && (right - left <= 2 || dp[left + 1][right - 1])) { 
        dp[left][right] = true; 
      } 
    } 
  } 
  let result = []; 
  function backtrack(start, path) { 
    if (start === n) { 
      result.push(path); 
      return; 
    } 
    for (let end = start; end < n; end++) { 
      if (dp[start][end]) { 
        backtrack(end + 1, path.concat(s.slice(start, end + 1))); 
      } 
    } 
  } 
  backtrack(0, []); 
  return result;
};`,
  time_complexity: `n * 2<sup>n</sup>`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_PalindromePartitioning = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["aab", "a"];

    const answers = [
      [
        ["a", "a", "b"],
        ["aa", "b"],
      ],
      [["a"]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("PalindromePartitioning handler function error");
    throw new Error(error);
  }
};

export const PalindromePartitioning: Problem = {
  order: 7,
  id: "palindrome-partitioning",
  title: "Palindrome Partitioning",
  difficulty: "Medium",
  category: "Backtracking",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "partition(s)",
  handlerFunction: handle_PalindromePartitioning,
};
