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
var findMedianSortedArrays = function(nums1, nums2) {
  // Write your code here
};`;

const solution = {
  solution: `var findMedianSortedArrays = function(nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  // If nums1 is larger than nums2, swap them to ensure n1 is smaller than n2.
  if (n1 > n2) {
      return findMedianSortedArrays(nums2, nums1);
  }
  let l = 0;
  let r = n1;
  while (l <= r) {
      let mid1 = Math.floor((l + r) / 2);
      let mid2 = Math.floor((n1 + n2 + 1) / 2 - mid1);
        
      let maxLeft1 = (mid1 == 0) ? Number.MIN_SAFE_INTEGER : nums1[mid1-1];
      let minRight1 = (mid1 == n1) ? Number.MAX_SAFE_INTEGER : nums1[mid1];
      
      let maxLeft2 = (mid2 == 0) ? Number.MIN_SAFE_INTEGER : nums2[mid2-1];
      let minRight2 = (mid2 == n2) ? Number.MAX_SAFE_INTEGER : nums2[mid2];
        
      if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
          if ((n1 + n2) % 2 == 0) {
              return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
          } else {
              return Math.max(maxLeft1, maxLeft2);
          }
      } else if (maxLeft1 > minRight2) {
          r = mid1 - 1;
      } else {
          l = mid1 + 1;
      }
  }
    return -1;
};`,
  time_complexity: `log(min(n1, n2))`,
  space_complexity: `1`,
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
  order: 9,
  id: "median-of-two-sorted-arrays",
  title: "Median of Two Sorted Arrays",
  difficulty: "Hard",
  category: "Binary Search",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "findMedianSortedArrays(nums1, nums2)",
  handlerFunction: handle_findMedianSortedArrays,
};
