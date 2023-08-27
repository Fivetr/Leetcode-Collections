import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given two strings <code>s</code> and <code>t</code>, return <em>the number of 
distinct <strong>subsequences</strong> of</em> <code>s</code> <em>which equals</em> <code>t</code>.
</p>
<p class='mt-4'>
The test cases are generated so that the answer fits on a 32-bit signed integer.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: `s = "rabbbit", t = "rabbit"`,
    outputText: "3",
  },
  {
    id: 2,
    inputText: ` s = "babgbag", t = "bag"`,
    outputText: "5",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ s.length, t.length ≤ 1000</code>
</li>  
<li class='mt-3 text-sm'>
<code>s</code> and <code>t</code> consist of English letters.
</li>  
`;

const starterCode = `/**
* @param {string} s
* @param {string} t
* @return {number}
*/
var numDistinct = function(s, t) {
  // Write your code here
};`;

const solution = {
  solution: `var numDistinct = function(s, t) {
  const len1 = s.length //lenght of s
  const len2 = t.length //length of t
  let res = new Array(len2 + 1).fill(0) //create the dp Array
  res[0] = 1   
  for(let n = 1; n <= len1; n++){
    for(let m = n; m >= 1; m--){
      if(s[n - 1] === t[m - 1]) res[m] = (res[m - 1] + res[m])
    }
  }
  return res[len2]
};`,
  time_complexity: `m * n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_DistinctSubsequences = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["rabbbit", "babgbag"];
    const t = ["rabbit", "bag"];

    const answers = [3, 5];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i], t[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("DistinctSubsequences handler function error");
    throw new Error(error);
  }
};

export const DistinctSubsequences: Problem = {
  order: 8,
  id: "distinct-subsequences",
  title: "Distinct Subsequences",
  difficulty: "Hard",
  category: "2-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "numDistinct(s, t)",
  handlerFunction: handle_DistinctSubsequences,
};
