import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
A peak element is an element that is strictly greater than its neighbors.
</p>
<p class='mt-4'>
Given a <strong>0-indexed</strong> integer array <code>nums</code>, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to <strong>any of the peaks</strong>.
</p>
<p class='mt-4'>
You may imagine that <code>nums[-1] = nums[n] = -&#x221E</code>. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
</p>
<p class='mt-4'>
You must write an algorithm with <code>O(log n)</code> runtime complexity.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,2,3,1]",
    outputText: "2",
    explanation:
      "3 is a peak element and your function should return the index number 2.",
  },
  {
    id: 2,
    inputText: "nums = [1,2,1,3,5,6,4]",
    outputText: "5",
    explanation:
      "Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 1000</code>
</li> 
<li class='mt-3 text-sm'>
<code>-2<sup>31</sup> ≤ nums[i], target ≤ 2<sup>31</sup> - 1</code>
</li> 
<li class='mt-3 text-sm'>
<code>nums[i] != nums[i + 1]</code> for all valid <code>i</code>.
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
var findPeakElement = function(nums) {

};`;

const solution = {
  solution: `var findPeakElement = function(nums) {
    let l = 0, r = nums.length - 1
    while(l <= r){
        let m = Math.floor((l + r)/2)
        if(m > 0 && nums[m] < nums[m - 1]) r = m - 1
        else if(m < nums.length - 1 && nums[m] < nums[m + 1]) l = m + 1
        else return m
    }
};`,
  time_complexity: `nlogn`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_search = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [1, 2, 3, 1],
      [1, 2, 1, 3, 5, 6, 4],
    ];

    const answers = [2, 5];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      console.log(result);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("search handler function error");
    throw new Error(error);
  }
};

export const FindPeakElement: Problem = {
  order: 6,
  id: "find-peak-element",
  title: "Find Peak Element",
  difficulty: "Medium",
  category: "Binary Search",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "findPeakElement(nums)",
  handlerFunction: handle_search,
};
