import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `<p class='mt-4'>
Given an array of strings <code>strs</code>, group <strong>the anagrams</strong> together. You can return the answer in <strong>any order</strong>.
</p>
<p class='mt-4'>
An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: 'strs = ["eat","tea","tan","ate","nat","bat"]',
    outputText: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
  },
  {
    id: 2,
    inputText: 'strs = [""]',
    outputText: '[[""]]',
  },
  {
    id: 3,
    inputText: 'strs = ["a"]',
    outputText: '[["a"]]',
  },
];

const constraints = `<li class='mt-3 text-sm' >
<code>1 ≤ strs.length ≤ 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm' >
<code>0 ≤ strs[i].length ≤ 100</code>
</li> 
<li class='mt-3 text-sm'>
<code>strs[i]</code> consists of lowercase English letters.
</li>`;

const starterCode = `/**
* @param {string[]} strs
* @return {string[][]}
*/
function groupAnagrams(strs) {
  // Write your code here
};`;

const solution = {
  solution: `function groupAnagrams(strs) {
  let map = {}
  for(let s of strs){
      const key = Array(26).fill(0)
      for(let c of s){
          key[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
      }
      if (key in map){
          map[key].push(s)
      }
      else{
          map[key] = [s]
      }
  }
  return Object.values(map)
};`,
  time_complexity: `m*n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_GroupAnagrams = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const strs = [["eat", "tea", "tan", "ate", "nat", "bat"], [""], ["a"]];
    const answers = [
      // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
      [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
      [[""]],
      [["a"]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < strs.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(strs[i])
        .map((item: string[]) => item.sort())
        .sort((a: string[], b: string[]) => {
          return a.length - b.length;
        });
      console.log(result);
      assert.deepEqual(result, answers[i]);
      // assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("groupAnagrams handler function error");
    throw new Error(error);
  }
};

export const GroupAnagrams: Problem = {
  order: 4,
  id: "group-anagrams",
  title: "Group Anagrams",
  difficulty: "Medium",
  category: "Hashing",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function groupAnagrams(",
  handlerFunction: handle_GroupAnagrams,
};
