import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given a binary array <code>nums</code>, you should delete one element from it.
</p>

<p class='mt-4'>
Return <em>the size of the longest non-empty subarray containing only <code>1</code>'s in 
the resulting array</em>. Return <code>0</code> if there is no such subarray.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,1,0,1]",
    outputText: "3",
    explanation:
      "After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.",
  },
  {
    id: 2,
    inputText: "nums = [0,1,1,1,0,1,1,0,1]",
    outputText: "5",
    explanation:
      "After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].",
  },
  {
    id: 3,
    inputText: "nums = [1,1,1]",
    outputText: "2",
    explanation: "You must delete one element.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 <= nums.length <= 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>nums[i]</code> is either <code>0</code> or <code>1</code>.
</li> 

`;

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
var longestSubarray = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var longestSubarray = function(nums) {
    let l = 0
    let zeroCount = 0
    let maxLen = 0
    for(let r = 0; r < nums.length; r++){
        if(nums[r] == 0) zeroCount++
        while(zeroCount > 1){
            if(nums[l] == 0)zeroCount--
            l++
        }
        maxLen = Math.max(maxLen, r - l)
    }
    return maxLen
}`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_LongestSubarrayDeletingOneElement = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [1, 1, 0, 1],
      [0, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 1, 1],
    ];
    const answers = [3, 5, 2];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("LongestSubarrayDeletingOneElement handler function error");
    throw new Error(error);
  }
};

export const LongestSubarrayDeletingOneElement: Problem = {
  order: 13,
  id: "longest-subarray-of-1's-after-deleting-one-element",
  title: "Longest Subarray of 1's After Deleting One Element",
  difficulty: "Medium",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "longestSubarray(nums)",
  handlerFunction: handle_LongestSubarrayDeletingOneElement,
};
