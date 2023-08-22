import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
A <strong>transformation sequence</strong> from word <code>beginWord</code> to word <code>endWord</code> using a 
dictionary wordList is a sequence of words <code>beginWord -> s1 -> s2 -> ... -> sk</code> such that:
</p>
<p class='mt-4'>
Every adjacent pair of words differs by a single letter.
</p>
<p class='mt-4'>
Every <code>si</code> for <code>1 <= i <= k</code> is in <code>wordList</code>. 
Note that <code>beginWord</code> does not need to be in <code>wordList</code>.
</p>
<p class='mt-4'>
<code>sk == endWord</code>
</p>
<p class='mt-4'>
Given two words, <code>beginWord</code> and <code>endWord</code>, and a dictionary 
<code>wordList</code>, return <em>the <strong>number of words</strong> in the <strong>shortest transformation sequence</strong> from</em> 
<code>beginWord</code> <em>to</em> <code>endWord</code>, <em>or</em> <code>0</code> <em>if no such sequence exists</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: `beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]`,
    outputText: "5",
    explanation: `One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.`,
  },
  {
    id: 2,
    inputText: `beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]`,
    outputText: "0",
    explanation: `The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.`,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ beginWord.length ≤ 10</code>
</li>  
<li class='mt-3 text-sm'>
<code>endWord.length == beginWord.length</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ wordList.length ≤ 5000</code>
</li>  
<li class='mt-3 text-sm'>
<code>wordList[i].length == beginWord.length</code>
</li>  
<li class='mt-3 text-sm'>
<code>beginWord</code>, <code>endWord</code>, and <code>wordList[i]</code> consist of lowercase English letters.
</li>  
<li class='mt-3 text-sm'>
<code>beginWord != endWord</code>
</li>  
<li class='mt-3 text-sm'>
All the words in <code>wordList</code> are <strong>unique</strong>.
</li>  
`;

const starterCode = `/**
* @param {string} beginWord
* @param {string} endWord
* @param {string[]} wordList
* @return {number}
*/
var ladderLength = function(beginWord, endWord, wordList) {
  // Write your code here
};`;

const solution = {
  solution: `var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  let VMap = new Map();
  for (let i = 0; i < wordList.length; i++) {
    VMap.set(wordList[i], false);
  }
  let q = [beginWord];
  let steps = 1;
  VMap.set(beginWord, true);
  while (q.length > 0) {
    let n = q.length;
    for (let i = 0; i < n; i++) {
      let s = q.shift();
      if (s === endWord) {
        return steps;
      } else {
        wordMatch(s, VMap, q);
      }
    }
    steps++;
  }
  return 0;
};
const wordMatch = (s, VMap, q) => {
  for (let i = 0; i < s.length; i++) {
    let S_arr = s.split('');
    for (let j = 97; j <= 122; j++) {
      S_arr[i] = String.fromCharCode(j);
      let temp = S_arr.join('');
      if (VMap.has(temp) && VMap.get(temp) === false) {
        q.push(temp);
        VMap.set(temp, true);
      }
    }
  }
};

`,
  time_complexity: `m<sup>2</sup> * n`,
  space_complexity: `m * n`,
};

// checks if the user has the correct code
const handle_WordLadder = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const beginWords = ["hit", "hit"];
    const endWords = ["cog", "cog"];
    const wordList = [
      ["hot", "dot", "dog", "lot", "log", "cog"],
      ["hot", "dot", "dog", "lot", "log"],
    ];

    const answers = [5, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < beginWords.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(beginWords[i], endWords[i], wordList[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("WordLadder handler function error");
    throw new Error(error);
  }
};

export const WordLadder: Problem = {
  order: 11,
  id: "word-ladder",
  title: "Word Ladder",
  difficulty: "Hard",
  category: "Graph",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "ladderLength(beginWord, endWord, wordList)",
  handlerFunction: handle_WordLadder,
};
