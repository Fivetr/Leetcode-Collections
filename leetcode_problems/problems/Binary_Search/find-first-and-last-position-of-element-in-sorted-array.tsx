import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an array of integers <code>nums</code> sorted in non-decreasing order, 
find the starting and ending position of a given <code>target</code> value.
</p>
<p class='mt-4'>
If <code>target</code> is not found in the array, <code>return [-1, -1]</code>.
</p>
<p class='mt-4'>
You must write an algorithm with <code>O(log n)</code> runtime complexity.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "nums = [5,7,7,8,8,10], target = 8",
    outputText: "[3,4]",
  },
  {
    id: 2,
    inputText: "nums = [5,7,7,8,8,10], target = 6",
    outputText: "[-1,-1]",
  },
  {
    id: 3,
    inputText: "nums = [], target = 0",
    outputText: "[-1,-1]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>0 ≤ nums.length ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>nums</code> is a non-decreasing array.
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>9</sup> ≤ target ≤ 10<sup>9</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var searchRange = function(nums, target) {

};`;

const solution = {
  solution: `var searchRange = function(nums, target) {
    const search = (first) =>{
        let l = 0, r = nums.length - 1
        let i = -1
        while(l <= r){
            let m = Math.floor((l + r)/2)
            if(nums[m] > target) r = m - 1
            else if(nums[m] < target) l = m + 1
            else {
                i = m
                if(first){
                    r = m - 1
                }else l = m + 1
            }
        }
        return i
    }
    const first = search(true)
    const last = search(false)
    return [first, last]
};`,
  time_complexity: `logn`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_search = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [[5, 7, 7, 8, 8, 10], [5, 7, 7, 8, 8, 10], []];
    const target = [8, 6, 0];

    const answers = [
      [3, 4],
      [-1, -1],
      [-1, -1],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], target[i]);
      console.log(result);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("search handler function error");
    throw new Error(error);
  }
};

export const FindFirstAndLastPositionOfElementInSortedArray: Problem = {
  order: 7,
  id: "find-first-and-last-position-of-element-in-sorted-array",
  title: "Find First and Last Position of Element in Sorted Array",
  difficulty: "Medium",
  category: "Binary Search",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "searchRange(nums, target)",
  handlerFunction: handle_search,
};
