import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given a string <code>s</code>, find the length of the <strong>longest substring</string> without repeating characters.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: 's = "abcabcbb"',
    outputText: "3",
    explanation: 'The answer is "abc", with the length of 3.',
  },
  {
    id: 2,
    inputText: 's = "bbbbb"',
    outputText: "1",
    explanation: 'The answer is "b", with the length of 1.',
  },
  {
    id: 3,
    inputText: 's = "pwwkew"',
    outputText: "3",
    explanation:
      'The answer is "wke", with the length of 3.\nNotice that the answer must be a substring, "pwke" is a subsequence and not a substring.',
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>10 ≤ s.length ≤ 5 * 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>s</code> consists of English letters, digits, symbols and spaces.
</li> 
`;

const starterCode = `/**
* @param {string} s
* @return {number}
*/
var lengthOfLongestSubstring = function(s) {
  // Write your code here
};`;

const solution = {
  solution: `var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let left = 0, maxLength = 0;
  if(s.length < 2) return s.length; 
  for (let i = 0; i < s.length; i++) {
      // Keep adding char to set until we found a duplicate 
      // Remove the left most char until the duplicate char is removed 
      // [a,b,c,b] => [c,b]
      // set(a,b,c) => (c,b)
      while (set.has(s[i])) {
          set.delete(s[left])
          left++;
      }
      set.add(s[i]);
      // Update the maxlength every iteration
      // [a,b,c,b], maxLength = 3
      maxLength = Math.max(maxLength, i - left + 1)
  }
  return maxLength;
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_lengthOfLongestSubstring = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["abcabcbb", "bbbbb", "pwwkew"];

    const answers = [3, 1, 3];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("lengthOfLongestSubstring handler function error");
    throw new Error(error);
  }
};

export const LongestSubstringWithoutRepeatingCharacters: Problem = {
  order: 5,
  id: "longest-substring-without-repeating-characters",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "lengthOfLongestSubstring(s)",
  handlerFunction: handle_lengthOfLongestSubstring,
};
