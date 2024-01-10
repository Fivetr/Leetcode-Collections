import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given a binary array <code>nums</code> and an integer <code>k</code>, return <em>the maximum number of 
consecutive <code>1</code>'s in the array if you can flip at most k <code>0</code>'s</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2",
    outputText: "6",
    explanation:
      "[1,1,1,0,0,1,1,1,1,1,1]\nBolded numbers were flipped from 0 to 1. The longest subarray is underlined.",
  },
  {
    id: 2,
    inputText: "nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = ",
    outputText: "10",
    explanation:
      "[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]\nBolded numbers were flipped from 0 to 1. The longest subarray is underlined.",
  },
  {
    id: 3,
    inputText: "target = 11, nums = [1,1,1,1,1,1,1,1]",
    outputText: "0",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 <= nums.length <= 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>nums[i]</code> is either <code>0</code> or <code>1</code>.
</li> 
<li class='mt-3 text-sm'>
<code>0 <= k <= nums.length</code>
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
var longestOnes = function(nums, k) {
  // Write your code here
};`;

const solution = {
  solution: `var longestOnes = function(nums, k) {
    let l = 0
    let zerosCount = 0
    let maxLen = 0
    for(let r = 0; r < nums.length; r++){
        if(nums[r] == 0) zerosCount++
        while(zerosCount > k){
            if(nums[l] == 0) zerosCount--
            l++
        }
        maxLen = Math.max(maxLen, r - l + 1)
    }
    return maxLen
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_MaxConsecutiveOnes = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    ];
    const k = [2, 3];
    const answers = [6, 10];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], k[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("MaxConsecutiveOnes handler function error");
    throw new Error(error);
  }
};

export const MaxConsecutiveOnes: Problem = {
  order: 11,
  id: "max-consecutive-ones-3",
  title: "Max Consecutive Ones 3",
  difficulty: "Medium",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "longestOnes(nums, k)",
  handlerFunction: handle_MaxConsecutiveOnes,
};
