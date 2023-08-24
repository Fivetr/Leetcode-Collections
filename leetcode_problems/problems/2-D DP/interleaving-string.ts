import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/interleaving.jpg";

const problemStatement = `
<p class='mt-4'>
Given strings <code>s1</code>, <code>s2</code>, and <code>s3</code>, find whether <code>s3</code> is 
formed by an <strong>interleaving</strong> of <code>s1</code> and <code>s2</code>.
</p>
<p class='mt-4'>
An interleaving of two strings <code>s</code> and <code>t</code> is a configuration where <code>s</code> and <code>t</code> are divided 
into <code>n</code> and <code>m</code> <strong>substrings</strong> respectively, such that:
</p>
<p class='mt-4'>
<code>s = s1 + s2 + ... + sn</code>
</p>
<p class='mt-4'>
<code>t = t1 + t2 + ... + tm</code>
</p>
<p class='mt-4'>
The <strong>interleaving</strong> is <code>s1 + t1 + s2 + t2 + s3 + t3 + ...</code> 
or <code>t1 + s1 + t2 + s2 + t3 + s3 + ...</code>
</p>
<p class='mt-4'>
<strong>Note</strong>: <code>a + b</code> is the concatenation of strings <code>a</code> and <code>b</code>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: `s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"`,
    outputText: "true",
    explanation: `One way to obtain s3 is:\nSplit s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".\nInterleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".\nSince s3 can be obtained by interleaving s1 and s2, we return true.`,
    img: img1.src,
    img_size: 400,
  },
  {
    id: 2,
    inputText: `s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"`,
    outputText: "false",
    explanation:
      "Notice how it is impossible to interleave s2 with any other string to obtain s3.",
  },
  {
    id: 3,
    inputText: `s1 = "", s2 = "", s3 = ""`,
    outputText: "true",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>0 ≤ s1.length, s2.length ≤ 100</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ s3.length ≤ 200</code>
</li>  
<li class='mt-3 text-sm'>
<code>s1</code>, <code>s2</code>, and <code>s3</code> consist of lowercase English letters.
</li>  

`;

const starterCode = `/**
* @param {string} s1
* @param {string} s2
* @param {string} s3
* @return {boolean}
*/
var isInterleave = function(s1, s2, s3) {
  // Write your code here
};`;

const solution = {
  solution: `var isInterleave = function(s1, s2, s3) {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_InterLeavingString = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s1 = ["aabcc", "aabcc", ""];
    const s2 = ["dbbca", "dbbca", ""];
    const s3 = ["aadbbcbcac", "aadbbbaccc", ""];

    const answers = [true, false, true];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s1.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s1[i], s2[i], s3[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("InterLeavingString handler function error");
    throw new Error(error);
  }
};

export const InterLeavingString: Problem = {
  order: 6,
  id: "interleaving-string",
  title: "Interleaving String",
  difficulty: "Medium",
  category: "2-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "isInterleave(s1, s2, s3)",
  handlerFunction: handle_InterLeavingString,
};
