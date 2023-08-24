import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given a <code>string s</code>, return <em>the number of <strong>palindromic substrings</strong> in it</em>.
</p>
<p class='mt-4'>
A string is a <strong>palindrome</strong> when it reads the same backward as forward.
</p>
<p class='mt-4'>
A <strong>substring</strong> is a contiguous sequence of characters within the string.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: `s = "abc"`,
    outputText: "3",
    explanation: `Three palindromic strings: "a", "b", "c".`,
  },
  {
    id: 2,
    inputText: `s = "aaa"`,
    outputText: "6",
    explanation: `Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".`,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ s.length ≤ 1000</code>
</li>  
<li class='mt-3 text-sm'>
<code>s</code> consists of lowercase English letters.
</li>  
`;

const starterCode = `/**
* @param {string} s
* @return {number}
*/
var countSubstrings = function(s) {
  // Write your code here
};`;

const solution = {
  solution: `var countSubstrings = function(s) {
  let len = s.length, ans = 0
  // Iterating through S and considering the index i to be the center of a series of potential palindromes.
  for (let i = 0; i < len; i++) {
    // two pointers
    let j = i - 1, k = i
    //  Identify how long the "center" is by moving the right-size pointer (k) forwards while checking for duplicate characters. 
    while (k < len - 1 && s[k] === s[k+1]) k++
    /* Instead of our center just being a single palindrome, it will be the Nth triangular 
       number (defined as N * (N + 1) / 2) to account for all the smaller palindromes of which it's made. */
    ans += (k - j) * (k - j + 1) / 2
    i = k++
    // Spread out in both directions from i; as long as S[j] == S[k]
    // We'd know we had found a new palindrome and could continue spreading outward.
    while (j >=0 && k < len && s[k] === s[j]){
      j--
      k++
      ans++
    } 
  }
  return ans
};`,
  time_complexity: `n<sup>2</sup>`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_PalindromicSubstrings = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const gas = ["abc", "aaa"];
    const answers = [3, 6];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < gas.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(gas[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("PalindromicSubstrings handler function error");
    throw new Error(error);
  }
};

export const PalindromicSubstrings: Problem = {
  order: 6,
  id: "palindromic-substrings",
  title: "Palindromic Substrings",
  difficulty: "Medium",
  category: "1-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "countSubstrings(s)",
  handlerFunction: handle_PalindromicSubstrings,
};
