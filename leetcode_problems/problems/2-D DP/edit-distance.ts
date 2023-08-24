import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given two strings <code>word1</code> and <code>word2</code>, return the <em>minimum number of 
operations required to convert <code>word1</code>, to <code>word2</code></em>.
</p>
<p class='mt-4'>
You have the following three operations permitted on a word:
</p>
<p class='mt-4'>
Insert a character
</p>
<p class='mt-4'>
Delete a character
</p>
<p class='mt-4'>
Replace a character
</p>
`;

const examples = [
  {
    id: 1,
    inputText: `word1 = "horse", word2 = "ros"`,
    outputText: "3",
    explanation:
      "\nhorse -> rorse (replace 'h' with 'r')\nrorse -> rose (remove 'r')\nrose -> ros (remove 'e')",
  },
  {
    id: 2,
    inputText: `word1 = "intention", word2 = "execution"`,
    outputText: "5",
    explanation:
      "\nintention -> inention (remove 't')\ninention -> enention (replace 'i' with 'e')\nenention -> exention (replace 'n' with 'x')\nexention -> exection (replace 'n' with 'c')\nexection -> execution (insert 'u')",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>0 ≤ word1.length, word2.length ≤ 500</code>
</li>  
<li class='mt-3 text-sm'>
<code>word1</code> and <code>word2</code> consist of lowercase English letters.
</li>  
`;

const starterCode = `/**
* @param {string} word1
* @param {string} word2
* @return {number}
*/
var minDistance = function(word1, word2) {
  // Write your code here
};`;

const solution = {
  solution: `var minDistance = function(word1, word2) {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_EditDistance = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const word1 = ["horse", "intention"];
    const word2 = ["ros", "execution"];
    const answers = [3, 5];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < word1.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(word1[i], word2[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("EditDistance handler function error");
    throw new Error(error);
  }
};

export const EditDistance: Problem = {
  order: 7,
  id: "edit-distance",
  title: "Edit Distance",
  difficulty: "Medium",
  category: "2-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "minDistance(word1, word2)",
  handlerFunction: handle_EditDistance,
};
