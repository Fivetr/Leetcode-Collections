import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given two strings <code>s1</code> and <code>s2</code>, return <code>true</code> <em>if</em> <code>s2</code> 
<em>contains a permutation of</em> <code>s1</code>, <em>or</em> <code>false</code> <em>otherwise</em>.
</p>
<p class='mt-4'>
In other words, return <code>true</code> if one of <code>s1</code>'s permutations is the substring of <code>s2</code>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: 's1 = "ab", s2 = "eidbaooo"',
    outputText: "true",
    explanation: 's2 contains one permutation of s1 ("ba").',
  },
  {
    id: 2,
    inputText: 's1 = "ab", s2 = "eidboaoo"',
    outputText: "false",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ s1.length, s2.length ≤ 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>s1</code> and <code>s2</code> consist of lowercase English letters.
</li> 
`;

const starterCode = `/**
* @param {string} s1
* @param {string} s2
* @return {boolean}
*/
var checkInclusion = function(s1, s2) {
  // Write your code here
};`;

const solution = {
  solution: `var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;
  // Store the count of required string s1
  let countMap = {}; 
  for (let i = 0; i < s1.length; i++) {
    countMap[s1[i]] = (countMap[s1[i]] || 0) + 1;
  }
  let left = 0, right = 0, requiredLength = s1.length
  while (right < s2.length) {
    // If we found s2 character in s1 then decrease requiredLength
    if (countMap[s2[right]] > 0) requiredLength--;
    // Decrease the count in countMap
    // Increment window  by 1 step
    countMap[s2[right]]--;
    right++ 
    // If requiredLength becomes 0 it means we have found a match of the s2 substring
    if (requiredLength === 0) return true;
    // If the window length is equal to s1 length 
    if (right - left === s1.length) {
      // if the left element we're removing was a required character then increase requiredLength
      // because that element will no longer be the part of sliding window
      if (countMap[s2[left]] >= 0) requiredLength++;
      // Increase the count of left element removed from window
      countMap[s2[left]]++;
      // Decrease the window size by 1 from left
      left++
    }
  }
  // If match was not found we return false
  return false;
};`,
  time_complexity: `n`,
  space_complexity: `s1`,
};

// checks if the user has the correct code
const handle_checkInclusion = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s1 = ["ab", "ab"];
    const s2 = ["eidbaooo", "eidboaoo"];

    const answers = [true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s1.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s1[i], s2[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("checkInclusion handler function error");
    throw new Error(error);
  }
};

export const PermutationInString: Problem = {
  order: 7,
  id: "permutation-in-string",
  title: "Permutation in String",
  difficulty: "Medium",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "checkInclusion(s1, s2)",
  handlerFunction: handle_checkInclusion,
};
