import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
A message containing letters from <code>A-Z</code> can be <strong>encoded</strong> into numbers using the following mapping:
</p>
<p class='mt-4'>
'A' -> "1"
</p>
<p class='mt-1'>
'B' -> "2"
</p>
<p class='mt-1'>
...
</p>
<p class='mt-1'>
'Z' -> "26"
</p>
<p class='mt-4'>
To <strong>decode</strong> an encoded message, all the digits must be grouped then mapped back into 
letters using the reverse of the mapping above (there may be multiple ways). 
For example, <code>"11106"</code> can be mapped into:
</p>
<p class='mt-4'>
<code>"AAJF"</code> with the grouping <code>(1 1 10 6)</code>
</p>
<p class='mt-2'>
<code>"KJF"</code> with the grouping <code>(11 10 6)</code>
</p>
<p class='mt-4'>
Note that the grouping <code>(1 11 06)</code> is invalid because <code>"06"</code> 
cannot be mapped into <code>'F'</code> since <code>"6"</code> is different from <code>"06"</code>.
</p>
<p class='mt-4'>
Given a string <code>s</code> containing only digits, 
return <em>the <strong>number</strong> of ways to <strong>decode</strong> it</em>.
</p>
<p class='mt-4'>
'Z' -> "26"The test cases are generated so that the answer fits in a <strong>32-bit</strong> integer.</p>
</p>


`;

const examples = [
  {
    id: 1,
    inputText: `s = "12"`,
    outputText: "2",
    explanation: `"12" could be decoded as "AB" (1 2) or "L" (12).`,
  },
  {
    id: 2,
    inputText: `s = "226"`,
    outputText: "3",
    explanation: `"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).`,
  },
  {
    id: 3,
    inputText: `s = "06"`,
    outputText: "0",
    explanation: `"06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").`,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ s.length ≤ 100</code>
</li>  
<li class='mt-3 text-sm'>
<code>s</code> contains only digits and may contain leading zero(s).
</li>  
`;

const starterCode = `/**
* @param {string} s
* @return {number}
*/
var numDecodings = function(s) {
  // Write your code here
};`;

const solution = {
  solution: `var numDecodings = function(s) {
  let dp1 = 1, dp2 = 0, n = s.length;
  for (let i = n - 1; i >= 0; i--) {
    let dp = s[i] === '0' ? 0 : dp1;
    if(i < n-1 && (s[i] === '1' || s[i] === '2' && s[i + 1] < '7')) dp += dp2
    dp2 = dp1
    dp1 = dp
  }
  return dp1;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_DecodeWays = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["12", "226", "06"];

    const answers = [2, 3, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("DecodeWays handler function error");
    throw new Error(error);
  }
};

export const DecodeWays: Problem = {
  order: 7,
  id: "decode-ways",
  title: "Decode Ways",
  difficulty: "Medium",
  category: "1-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "numDecodings(s)",
  handlerFunction: handle_DecodeWays,
};
