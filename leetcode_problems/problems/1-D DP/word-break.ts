import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, return 
<code>true</code> if <code>s</code> can be segmented into a space-separated sequence of one or more 
dictionary words.
</p>
<p class='mt-4'>
<strong>Note</strong> that the same word in the dictionary may be reused multiple times in the segmentation.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: `s = "leetcode", wordDict = ["leet","code"]`,
    outputText: "true",
    explanation: `Return true because "leetcode" can be segmented as "leet code".`,
  },
  {
    id: 2,
    inputText: `s = "applepenapple", wordDict = ["apple","pen"]`,
    outputText: "true",
    explanation: `Return true because "applepenapple" can be segmented as "apple pen apple".\nNote that you are allowed to reuse a dictionary word.`,
  },
  {
    id: 3,
    inputText: `s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]`,
    outputText: "false",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ s.length ≤ 300</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ wordDict.length ≤ 1000</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ wordDict[i].length ≤ 20</code>
</li>  
<li class='mt-3 text-sm'>
<code>s</code> and <code>wordDict[i]</code> consist of only lowercase English letters.
</li>  
<li class='mt-3 text-sm'>
All the strings of <code>wordDict</code> are <strong>unique</strong>.
</li>  
`;

const starterCode = `/**
* @param {string} s
* @param {string[]} wordDict
* @return {boolean}
*/
var wordBreak = function(s, wordDict) {
  // Write your code here
};`;

const solution = {
  solution: `var wordBreak = function(s, wordDict) {
  let n = s.length;
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  let max_len = Math.max(...wordDict.map(word => word.length));
  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j >= Math.max(i - max_len - 1, 0); j--) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};`,
  time_complexity: `n * m`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_WordBreak = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["leetcode", "applepenapple", "catsandog"];
    const wordDict = [
      ["leet", "code"],
      ["apple", "pen"],
      ["cats", "dog", "sand", "and", "cat"],
    ];

    const answers = [true, true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i], wordDict[i]);
      console.log(result);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("WordBreak handler function error");
    throw new Error(error);
  }
};

export const WordBreak: Problem = {
  order: 10,
  id: "word-break",
  title: "Word Break",
  difficulty: "Medium",
  category: "1-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "wordBreak(s, wordDict)",
  handlerFunction: handle_WordBreak,
};
