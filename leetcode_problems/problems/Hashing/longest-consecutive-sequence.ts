import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an unsorted array of integers <code>nums</code>, return the <em>length of the longest consecutive elements sequence.</em>
</p>
<p class='mt-4'>
You must write an algorithm that runs in <code>O(n)</code> time.</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [100,4,200,1,3,2]",
    outputText: "4",
    explanation:
      "The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.",
  },
  {
    id: 2,
    inputText: "nums = [0,3,7,2,5,8,4,6,0,1]",
    outputText: "9",
  },
];

const constraints = `<li class='mt-3 text-sm'>
<code>0 ≤ nums.length ≤ 10<sup>5</sup></code>
</li> <li class='mt-3 text-sm'>
<code>-10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
function longestConsecutive(nums) {
  // Write your code here
};`;

const solution = {
  solution: `function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let max_length = 0;
  
  for (let num of nums) {
    // find the starting num of each sequence
    // i.e. num-1 does not exist in the nums
    if (!numSet.has(num - 1)) {
      let current_length = 0
      // find the length of the sequence
      while (numSet.has(num + current_length)){
        current_length+=1
      }
      max_length = Math.max(max_length,current_length)
    }
  }
  console.log(max_length)
  return max_length
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_LongestConsecutive = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [100, 4, 200, 1, 3, 2],
      [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
    ];

    const answers = [4, 9];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("LongestConsecutive handler function error");
    throw new Error(error);
  }
};

export const LongestConsectiveSequence: Problem = {
  order: 8,
  id: "longest-consecutive-sequence",
  title: "Longest Consecutive Sequence",
  difficulty: "Medium",
  category: "Hashing",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function longestConsecutive(",
  handlerFunction: handle_LongestConsecutive,
};
