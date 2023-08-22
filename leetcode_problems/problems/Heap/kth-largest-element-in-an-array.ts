import assert from "assert";
import { Problem } from "@/types/index";
import {
  MaxPriorityQueue,
  MinPriorityQueue,
} from "@datastructures-js/priority-queue";
const problemStatement = `
<p class='mt-4'>
Given an integer array <code>nums</code> and an integer <code>k</code>, return 
<em>the</em> <code>k<sup>th</sup></code> <em>largest element in the array</em>.</p>
<p class='mt-4'>
Note that it is the <code>k<sup>th</sup></code> largest element in the sorted order, 
not the <code>k<sup>th</sup></code> distinct element.</p>
<p class='mt-4'>
Can you solve it without sorting?</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [3,2,1,5,6,4], k = 2",
    outputText: "5",
  },
  {
    id: 2,
    inputText: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    outputText: "4",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ k ≤ nums.length ≤ 10<sup>5</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> ≤ nums[i] ≤ 10<sup>4</sup></code>
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
var findKthLargest = function(nums, k) {
  // Write your code here
  
};`;

const solution = {
  solution: `var findKthLargest = function(nums, k) {
    const partition = (left, right, pivotIndex) => {
      const pivot = nums[pivotIndex];
      [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
      let storedIndex = left;
      for (let i = left; i < right; i++) {
        if (nums[i] < pivot) {
          [nums[storedIndex], nums[i]] = [nums[i], nums[storedIndex]];
          storedIndex++;
        }
      }
      [nums[right], nums[storedIndex]] = [nums[storedIndex], nums[right]];
      return storedIndex;
  };
  
  let left = 0, right = nums.length - 1;
  while (true) {
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    const newPivotIndex = partition(left, right, pivotIndex);
    if (newPivotIndex === nums.length - k) {
        return nums[newPivotIndex];
    } else if (newPivotIndex > nums.length - k) {
        right = newPivotIndex - 1;
    } else {
        left = newPivotIndex + 1;
    }
  }
};`,
  time_complexity: `n<sup>2</sup>`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_findKthLargest = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [3, 2, 1, 5, 6, 4],
      [3, 2, 3, 1, 2, 4, 5, 5, 6],
    ];
    const k = [2, 4];
    const answers = [5, 4];
    let maxPriorityQueue = MaxPriorityQueue;
    let minPriorityQueue = MinPriorityQueue;
    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], k[i], maxPriorityQueue, minPriorityQueue);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("findKthLargest handler function error");
    throw new Error(error);
  }
};

export const KthLargestElementInAnArray: Problem = {
  order: 3,
  id: "kth-largest-element-in-an-array",
  title: "Kth Largest Element in an Array",
  difficulty: "Medium",
  category: "Heap",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "findKthLargest(nums, k)",
  extraParams: "findKthLargest(nums, k, MaxPriorityQueue, MinPriorityQueue)",
  handlerFunction: handle_findKthLargest,
};
