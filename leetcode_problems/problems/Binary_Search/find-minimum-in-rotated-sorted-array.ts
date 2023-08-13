import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Suppose an array of length n sorted in ascending order is <strong>rotated</strong> 
between <code>1</code> and <code>n</code> times. For example, 
the array <code>nums = [0,1,2,4,5,6,7]</code> might become:
</p>
<p class='mt-4'>
<code>[4,5,6,7,0,1,2]</code> if it was rotated <code>4</code> times.
</p>
<p class='mt-4'>
<code>[0,1,2,4,5,6,7]</code> if it was rotated <code>7</code> times.
</p>
<p class='mt-4'>
Notice that <strong>rotating</strong> an array <code>[a[0], a[1], a[2], ..., a[n-1]]</code> 
1 time results in the array <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code>.
</p>
<p class='mt-4'>
Given the sorted rotated array <code>nums</code> of <strong>unique</strong> elements, return the <em>minimum element of this array</em>.
</p>
<p class='mt-4'>
You must write an algorithm that runs in <code>O(log n)</code> time.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "nums = [3,4,5,1,2]",
    outputText: "1",
    explanation: "The original array was [1,2,3,4,5] rotated 3 times.",
  },
  {
    id: 2,
    inputText: "nums = [4,5,6,7,0,1,2]",
    outputText: "0",
    explanation:
      "The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.",
  },
  {
    id: 3,
    inputText: "nums = [11,13,15,17]",
    outputText: "11",
    explanation:
      "The original array was [11,13,15,17] and it was rotated 4 times.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>n == nums.length</code>
</li> 
<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ 5000</code>
</li> 
<li class='mt-3 text-sm'>
<code>-5000 ≤ nums[i] ≤ 5000</code>
</li> 
<li class='mt-3 text-sm'>
All the integers of <code>nums</code> are <strong>unique</strong>.
</li> 
<li class='mt-3 text-sm'>
<code>nums</code> is sorted and rotated between <code>1</code> and <code>n</code> times.
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
function findMin(nums) {
  // Write your code here
};`;

const solution = {
  solution: `function findMin(nums) {

};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_findMin = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [3, 4, 5, 1, 2],
      [4, 5, 6, 7, 0, 1, 2],
      [11, 13, 15, 17],
    ];

    const answers = [1, 0, 11];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("findMin handler function error");
    throw new Error(error);
  }
};

export const FindMinimumInRotatedSortedArray: Problem = {
  order: 4,
  id: "find-minimum-in-rotated-sorted-array",
  title: "Find Minimum In Rotated Sorted Array",
  difficulty: "Medium",
  category: "Binary Search",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function findMin(",
  handlerFunction: handle_findMin,
};
