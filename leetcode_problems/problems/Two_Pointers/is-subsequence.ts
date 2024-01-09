import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if 
<code>s</code> is a <strong>subsequence</strong> of <code>t</code>, or <code>false</code> otherwise.
</p>
<p class='mt-4'>
A <strong>subsequence</strong> of a string is a new string that is formed from the original 
string by deleting some (can be none) of the characters without disturbing 
the relative positions of the remaining characters. 
(i.e., <code>"ace"</code> is a subsequence of <code>"<u>a</u>b<u>c</u>d<u>e</u>"</code> while <code>"aec"</code> is not).
</p>

`;

const examples = [
  {
    id: 1,
    inputText: 's = "abc", t = "ahbgdc"',
    outputText: "true",
  },
  {
    id: 2,
    inputText: 's = "axc", t = "ahbgdc"',
    outputText: "false",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>0 <= s.length <= 100</code>
</li> 
<li class='mt-3 text-sm'>
<code>0 <= t.length <= 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code><sup>s</sup> and <sup>t</sup> consist only of lowercase English letters.</code>
</li> 
`;

const starterCode = `/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isSubsequence = function(s, t) {
  // Write your code here
};`;

const solution = {
  solution: `var isSubsequence = function(s, t) {
    let i = 0
    for(let str of t){
        if(str == s[i]) i++
        if(i == s.length) return true
    }
    return i == s.length
};`,
  time_complexity: `n + m`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_isSubsequence = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["abc", "axc"];
    const t = ["ahbgdc", "ahbgdc"];

    const answers = [true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i], t[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("isSubsequence handler function error");
    throw new Error(error);
  }
};

export const IsSubsequence: Problem = {
  order: 2,
  id: "is-subsequence",
  title: "Is Subsequence",
  difficulty: "Easy",
  category: "Two Pointers",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "isSubsequence(s,t)",
  handlerFunction: handle_isSubsequence,
};
