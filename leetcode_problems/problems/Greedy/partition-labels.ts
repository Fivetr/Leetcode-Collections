import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given a string <code>s</code>. We want to partition the string into as many parts as possible so that each letter appears in at most one part.
</p>
<p class='mt-4'>
Note that the partition is done so that after concatenating all the parts in order, the resultant string should be <code>s</code>.
</p>
<p class='mt-4'>
Return <em>a list of integers representing the size of these parts</em>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: `s = "ababcbacadefegdehijhklij"`,
    outputText: "[9,7,8]",
    explanation: `The partition is "ababcbaca", "defegde", "hijhklij".\nThis is a partition so that each letter appears in at most one part.\nA partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.`,
  },
  {
    id: 2,
    inputText: `s = "eccbbbbdec"`,
    outputText: "[10]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ s.length ≤ 500</code>
</li>  
<li class='mt-3 text-sm'>
<code>s</code> consists of lowercase English letters.
</li>  
`;

const starterCode = `/**
* @param {string} s
* @return {number[]}
*/
var partitionLabels = function(s) {
  // Write your code here
};`;

const solution = {
  solution: `var partitionLabels = function(s) {
  // store the index of the character where is last show up in s 
  let lastIdx = {}
  for (let i = 0; i < s.length; i++) {
    lastIdx[s[i]] = i;
  }
  let end = 0, size = 0, res = [];
  for (let i = 0; i < s.length; i++) {
    size++
    // updating the tail of the partition
    end = Math.max(end, lastIdx[s[i]]);
    // found the partition
    if (i === end) {
      res.push(size);
      size = 0
    }
  }
  return res;
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_PartitionLabels = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["ababcbacadefegdehijhklij", "eccbbbbdec"];

    const answers = [[9, 7, 8], [10]];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("PartitionLabels handler function error");
    throw new Error(error);
  }
};

export const PartitionLabels: Problem = {
  order: 7,
  id: "partition-labels",
  title: "Partition Labels",
  difficulty: "Medium",
  category: "Greedy",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "partitionLabels(s)",
  handlerFunction: handle_PartitionLabels,
};
