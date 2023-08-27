import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an input string <code>s</code> and a pattern <code>p</code>, implement 
regular expression matching with support for <code>'.'</code> and <code>'*'</code> where:
</p>
<p class='mt-4'>
<code>'.'</code> Matches any single character.​​
</p>
<p class='mt-4'>
<code>'*'</code> Matches zero or more of the preceding element.
</p>
<p class='mt-4'>
The matching should cover the <strong>entire</strong> input string (not partial).
</p>
`;

const examples = [
  {
    id: 1,
    inputText: `s = "aa", p = "a"`,
    outputText: "false",
    explanation: `"a" does not match the entire string "aa".`,
  },
  {
    id: 2,
    inputText: `s = "aa", p = "a*"`,
    outputText: "true",
    explanation: `'*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".`,
  },
  {
    id: 3,
    inputText: `s = "ab", p = ".*"`,
    outputText: "true",
    explanation: `".*" means "zero or more (*) of any character (.)".`,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ s.length ≤ 20</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ p.length ≤ 20</code>
</li>  
<li class='mt-3 text-sm'>
<code>s</code> contains only lowercase English letters
</li>  
<li class='mt-3 text-sm'>
<code>p</code> contains only lowercase English letters, <code>'.'</code>, and <code>'*'</code>.
</li>  
<li class='mt-3 text-sm'>
It is guaranteed for each appearance of the character <code>'*'</code>, there will be a previous valid character to match.
</li>  

`;

const starterCode = `/**
* @param {string} s
* @param {string} p
* @return {boolean}
*/
var isMatch = function(s, p) {
  // Write your code here
};`;

const solution = {
  solution: `var isMatch = function(s, p) {
  const m = s.length, n = p.length;
  const dp = new Array(m+1).fill().map(() => new Array(n+1).fill(false));
  dp[0][0] = true; // empty pattern matches empty string
  // initialize first row (empty string)
  for (let j = 1; j <= n; j++) {
    if (p[j-1] === '*')
    dp[0][j] = dp[0][j-2];
  }
  // fill in remaining cells
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i-1] === p[j-1] || p[j-1] === '.') {
        dp[i][j] = dp[i-1][j-1];
      } else if (p[j-1] === '*') {
          dp[i][j] = dp[i][j-2]; // zero occurrences
          if (s[i-1] === p[j-2] || p[j-2] === '.') {
            dp[i][j] = dp[i][j] || dp[i-1][j]; // one or more occurrences
          }
        }
    }
  }
  return dp[m][n];
};`,
  time_complexity: `m * n`,
  space_complexity: `m * n`,
};

// checks if the user has the correct code
const handle_RegularExpressionMatching = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["aa", "aa", "ab"];
    const p = ["a", "a*", ".*"];

    const answers = [false, true, true];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i], p[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("RegularExpressionMatching handler function error");
    throw new Error(error);
  }
};

export const RegularExpressionMatching: Problem = {
  order: 9,
  id: "regular-expression-matching",
  title: "Regular Expression Matching",
  difficulty: "Hard",
  category: "2-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "isMatch(s, p)",
  handlerFunction: handle_RegularExpressionMatching,
};
