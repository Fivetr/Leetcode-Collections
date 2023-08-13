import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `<p class='mt-4'>
Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em>if</em> <code>t</code> 
<em>is an anagram of</em> <code>s</code> <em>and</em> <code>false</code> <em>otherwise</em>.
</p>
<p class='mt-4'>
An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: 's = "anagram", t = "nagaram"',
    outputText: "true",
  },
  {
    id: 2,
    inputText: 's = "rat", t = "car"',
    outputText: "false",
  },
];

const constraints = `<li class='mt-3 text-sm' >
<code>1 ≤ s.length, t.length ≤ 5 * 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>s</code> and <code>t</code> consist of lowercase English letters.</strong>
</li>`;

const starterCode = `/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
function isAnagram(s, t) {
  // Write your code here
};`;

const solution = {
  solution: `function isAnagram(s, t) {
  if(s.length != t.length){
      return false
  }

  const countS = {}
  const countT = {}
  for(let i = 0; i < s.length; i++){
      countS[s[i]] = (countS[s[i]] || 0) + 1
      countT[t[i]] = (countT[t[i]] || 0) + 1
  }

  for (let key in countS){
      if(countS[key] != countT[key]){
          return false
      }
  }
  return true
};`,
  time_complexity: `s+t`,
  space_complexity: `s+t`,
};

// checks if the user has the correct code
const handle_IsAnagram = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["anagram", "rat"];

    const t = ["nagaram", "car"];
    const answers = [true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i], t[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("twoSum handler function error");
    throw new Error(error);
  }
};

export const ValidAnagram: Problem = {
  order: 2,
  id: "vaild-anagram",
  title: "Vaild Anagram",
  difficulty: "Easy",
  category: "Hashing",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function isAnagram(",
  handlerFunction: handle_IsAnagram,
};
