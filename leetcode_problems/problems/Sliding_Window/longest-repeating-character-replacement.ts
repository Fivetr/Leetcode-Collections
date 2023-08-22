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
var characterReplacement = function(s, k) {
  // Write your code here
};`;

const solution = {
  solution: `var characterReplacement = function(s, k) {
  // Use hashmap to track the frequency of letters
  const frequencies = {}
  // Track the most frequent letter we've seen.
  let highestFrequency = 0
  // Track the size of the longest valid window we encounter.
  let longest = 0
  let left = 0, right = 0
  while (right < s.length) {
      // Add it to the frequencies hashmap
      frequencies[s[right]] = frequencies[s[right]] + 1 || 1
      // Check if this newly encountered character is also the most frequent
      highestFrequency = Math.max(highestFrequency, frequencies[s[right]])
      // A window is valid if window.length - highestFrequency <= k
      /* If the current window is not valid, we want to increment 
         the left pointer until we get to a valid window */
      /* No need to update highestFrequency, because we'll only get a longer 
         valid window when we encounter a letter that is more frequent in 
         its window than the last highestFrequency count was. */
      while ((right - left + 1) - highestFrequency > k) {
          frequencies[s[left]] -= 1
          left++        
        }
      // Once we have a valid window, check if it's longer than the previous longest valid window
      longest = Math.max(longest, right - left + 1)
      right++
    }
  // Return the longest valid window we've seen
  return longest
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
  order: 4,
  id: "longest-repeating-character-replacement",
  title: "Longest Repeating Character Replacement",
  difficulty: "Medium",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "characterReplacement(s, k)",
  handlerFunction: handle_characterReplacement,
};
