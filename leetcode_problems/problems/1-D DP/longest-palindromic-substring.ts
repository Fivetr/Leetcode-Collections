import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given a string <code>s</code>, return <em>the longest <strong>palindromic substring</strong></em> in <code>s</code>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: `s = "babad"`,
    outputText: `"bab"`,
    explanation: `"aba" is also a valid answer.`,
  },
  {
    id: 2,
    inputText: `s = "cbbd"`,
    outputText: `"bb"`,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ s.length ≤ 1000</code>
</li>  
<li class='mt-3 text-sm'>
<code>s</code> consist of only digits and English letters.
</li>  
`;

const starterCode = `/**
* @param {string} s
* @return {string}
*/
var longestPalindrome = function(s) {
  // Write your code here
};`;

const solution = {
  solution: `var longestPalindrome = function(s) {
  const n = s.length;
  if (n === 0) return "";
  if (n === 1) return s;
  
  let minstart = 0, maxlen = 0;
  let i = 0;
  while (i < n) {
    if (n - i < maxlen / 2) break;
    let l = i, r = i;
    // Find the center of the palindrome
    while (r < n - 1 && s[r] === s[r + 1]) r++;
    // Update the next starting point
    i = r + 1;
    // Expand around the center to find the longest palindrome
    while (l > 0 && r < n - 1 && s[l - 1] === s[r + 1]) {
      l--;
      r++;
    }
    const newlen = r - l + 1;
    if (newlen > maxlen) {
      maxlen = newlen;
      minstart = l;
    }
  }
  return s.substring(minstart, minstart + maxlen);
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_LongestPalindromicSubstring = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["babad", "cbbd"];

    const answers = ["bab", "bb"];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("LongestPalindromicSubstring handler function error");
    throw new Error(error);
  }
};

export const LongestPalindromicSubstring: Problem = {
  order: 5,
  id: "longest-palindromic-substring",
  title: "Longest Palindromic Substring",
  difficulty: "Medium",
  category: "1-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "longestPalindrome(s)",
  handlerFunction: handle_LongestPalindromicSubstring,
};
