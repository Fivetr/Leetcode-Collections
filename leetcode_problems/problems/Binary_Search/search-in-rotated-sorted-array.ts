import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
There is an integer array <code>nums</code> sorted in ascending order (with <strong>distinct</strong> values).
</p>
<p class='mt-4'>
Prior to being passed to your function, <code>nums</code> is <strong>possibly rotated</strong> 
at an unknown pivot index <code>k</code> (<code>1 <= k nums.length</code>) 
such that the resulting array is <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code> (<strong>0-indexed</strong>). 
For example, <code>[0,1,2,4,5,6,7]</code> might be rotated at pivot 
index <code>3</code> and become <code>[4,5,6,7,0,1,2]</code>.
</p>
<p class='mt-4'>
Given the array <code>nums</code> <strong>after</strong> the possible rotation and an integer <code>target</code>, 
return <em>the index of</em> <code>target</code> <em>if it is in</em> 
<code>nums</code>, <em>or</em> <code>-1</code> <em>if it is not in</em> <code>nums</code>.
</p>
<p class='mt-4'>
Given a string <code>s</code>, return <code>true</code> <em>if it is a</em> 
<strong>palindrome</strong>, <em>or</em> <code>false</code> <em>otherwise</em>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "nums = [4,5,6,7,0,1,2], target = 0",
    outputText: "4",
  },
  {
    id: 2,
    inputText: "nums = [4,5,6,7,0,1,2], target = 3",
    outputText: "-1",
  },
  {
    id: 3,
    inputText: "nums = [1], target = 0",
    outputText: "-1",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 5000</code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> ≤ nums[i] ≤ 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
All values of <code>nums</code> are <strong>unique</strong>.
</li> 
<li class='mt-3 text-sm'>
<code>nums</code> is an ascending array that is possibly rotated.
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> ≤ target ≤ 10<sup>4</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function(nums, target) {
  // Write your code here

};`;

const solution = {
  solution: `var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (target === nums[mid]) {
          return mid;
      }
      // check if mid belongs to left sorted portion. 
      // range [left ... mid] [3,4,5,..]
      if (nums[left] <= nums[mid]) {
          // now we know nums[left] must be <= nums[mid]
          // check if target belongs in range [left ... mid]
          if (nums[left] <= target && nums[mid] >= target) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
        // check if mid belongs to right sorted portion. 
        // range [mid ... right] [..,1,2,3]
      } else {
          // now we know nums[right] must be > nums[mid]
          // check if target belongs in range [left ... mid]
          if (nums[right] >= target && nums[mid] <= target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  }
  return -1;
};`,
  time_complexity: `logn`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_search = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [[4, 5, 6, 7, 0, 1, 2], [4, 5, 6, 7, 0, 1, 2], [1]];
    const targets = [0, 3, 0];
    const answers = [4, -1, -1];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], targets[i]);
      console.log;
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("search handler function error");
    throw new Error(error);
  }
};

export const SearchInRotatedSortedArray: Problem = {
  order: 5,
  id: "search-in-rotated-sorted-array",
  title: "Search In Rotated Sorted Array",
  difficulty: "Medium",
  category: "Binary Search",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "search(nums, target)",
  handlerFunction: handle_search,
};
