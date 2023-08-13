import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given a string <code>s</code> and an integer <code>k</code>. 
You can choose any character of the string and change it to any other uppercase 
English character. You can perform this operation at most <code>k</code> times.
</p>
<p class='mt-4'>
Return <em>the length of the longest substring containing the same letter you can get after performing the above operations</em>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: 's = "ABAB", k = 2',
    outputText: "4",
    explanation: 'Replace the two "A"s with two "B"s or vice versa.',
  },
  {
    id: 2,
    inputText: 's = "AABABBA", k = 1',
    outputText: "4",
    explanation:
      'Replace the one "A" in the middle with "B" and form "AABBBBA".\nThe substring "BBBB" has the longest repeating letters, which is 4.\nThere may exists other ways to achive this answer too.',
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ s.length ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>s</code> consists of only uppercase English letters.
</li> 
<li class='mt-3 text-sm'>
<code>0 ≤ k ≤ s.length</code>
</li> 

`;

const starterCode = `/**
* @param {string} s
* @param {number} k
* @return {number}
*/
function characterReplacement(s, k) {
  // Write your code here
};`;

const solution = {
  solution: `function characterReplacement(s, k) {

};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_characterReplacement = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["ABAB", "AABABBA"];
    const k = [2, 1];

    const answers = [4, 4];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i], k[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("characterReplacement handler function error");
    throw new Error(error);
  }
};

export const LongestRepeatingCharacterReplacement: Problem = {
  order: 3,
  id: "longest-repeating-character-replacement",
  title: "Longest Repeating Character Replacement",
  difficulty: "Medium",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function characterReplacement(",
  handlerFunction: handle_characterReplacement,
};
