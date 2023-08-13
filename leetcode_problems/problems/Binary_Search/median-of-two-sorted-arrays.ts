import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> 
and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.
</p>
<p class='mt-4'>
The overall run time complexity should be <code>O(log (m+n))</code>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "nums1 = [1,3], nums2 = [2]",
    outputText: "2.00000",
    explanation: "merged array = [1,2,3] and median is 2.",
  },
  {
    id: 2,
    inputText: "nums1 = [1,2], nums2 = [3,4]",
    outputText: "2.50000",
    explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>nums1.length == m</code>
</li> 
<li class='mt-3 text-sm'>
<code>nums2.length == n</code>
</li> 
<li class='mt-3 text-sm'>
<code>10≤ m ≤ 1000</code>
</li> 
<li class='mt-3 text-sm'>
<code>0 ≤ n ≤ 1000</code>
</li> 
<li class='mt-3 text-sm'>
<code>1 ≤ m + n ≤ 2000</code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>6</sup> ≤ nums1[i], nums2[i] ≤ 10<sup>6</sup></code>
</li> 

`;

const starterCode = `/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
function findMedianSortedArrays(nums1, nums2) {
  // Write your code here
};`;

const solution = {
  solution: `function findMedianSortedArrays(nums1, nums2) {

};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_findMedianSortedArrays = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums1 = [
      [1, 3],
      [1, 2],
    ];
    const nums2 = [[2], [3, 4]];

    const answers = [2.0, 2.5];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums1.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums1[i], nums2[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("findMedianSortedArrays handler function error");
    throw new Error(error);
  }
};

export const MedianOfTwoSortedArrays: Problem = {
  order: 6,
  id: "median-of-two-sorted-arrays",
  title: "Median of Two Sorted Arrays",
  difficulty: "Hard",
  category: "Binary Search",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function findMedianSortedArrays(",
  handlerFunction: handle_findMedianSortedArrays,
};
