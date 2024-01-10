import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given a string <code>s</code> and an integer <code>k</code>, return the maximum number of 
vowel letters in any substring of <code>s</code> with length <code>k</code>.
<p class='mt-4'>
<strong>Vowel letters</strong> in English are <code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, and <code>'u'</code>.</p>
`;

const examples = [
  {
    id: 1,
    inputText: 's = "abciiidef", k = 3',
    outputText: "3",
    explanation: 'The substring "iii" contains 3 vowel letters.',
  },
  {
    id: 2,
    inputText: 's = "aeiou", k = 2',
    outputText: "2",
    explanation: "Any substring of length 2 contains 2 vowels.",
  },
  {
    id: 3,
    inputText: 's = "leetcode", k = 3',
    outputText: "2",
    explanation: '"lee", "eet" and "ode" contain 2 vowels.',
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 <= s.length <= <sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>s</code> consists of lowercase English letters.
</li> 
<li class='mt-3 text-sm'>
<code>1 <= k <= s.length</code>
</li> 
`;

const starterCode = `/**
* @param {string} s
* @param {number} k
* @return {number}
*/
var maxVowels = function(s, k) {
  // Write your code here
};`;

const solution = {
  solution: `var maxVowels = function(s, k) {
    const isVowels = (char) =>{
        return char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
    }
    let maxCount = 0
    let count = 0
    let l = 0
    for(let r = 0; r < s.length; r++){
        if(isVowels(s[r])) count++
        if(r - l + 1 > k){
            if(isVowels(s[l])) count--
            l++
        }
        if(r - l + 1 == k){
            maxCount = Math.max(maxCount, count)
        }
    }
    return maxCount
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_MaximumNumberOfVowels = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["abciiidef", "aeiou", "leetcode"];
    const k = [3, 2, 3];
    const answers = [3, 2, 2];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i], k[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("MaximumNumberOfVowels handler function error");
    throw new Error(error);
  }
};

export const MaximumNumberOfVowels: Problem = {
  order: 10,
  id: "maximum-number-of-vowels-in-a-substring-of-given-length",
  title: "Maximum Number of Vowels in a Substring of Given Length",
  difficulty: "Medium",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "maxVowels(s, k)",
  handlerFunction: handle_MaximumNumberOfVowels,
};
