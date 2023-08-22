import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an array of integers <code>nums</code>, there is a sliding window 
of size <code>k</code> which is moving from the very left of the array to the 
very right. You can only see the <code>k</code> numbers in the window. Each time the sliding window moves right by one position.
</p>
<p class='mt-4'>
Return <em>the max sliding window</em>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
    outputText: "[3,3,5,5,6,7]",
    explanation:
      "\nWindow position                Max\n---------------               -----\n[1  3  -1] -3  5  3  6  7       3\n 1 [3  -1  -3] 5  3  6  7       3\n 1  3 [-1  -3  5] 3  6  7       5\n 1  3  -1 [-3  5  3] 6  7       5\n 1  3  -1  -3 [5  3  6] 7       6\n 1  3  -1  -3  5 [3  6  7]      7",
  },
  {
    id: 2,
    inputText: "nums = [1], k = 1",
    outputText: "[1]",
    explanation: '"raceacar" is not a palindrome.',
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> ≤ nums[i] ≤ 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>1 ≤ l ≤ nums.length</code>
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var maxSlidingWindow = function(nums, k) {
  // Write your code here
};`;

const solution = {
  solution: `var maxSlidingWindow = function(nums, k) {
  const res = [];
  let left = 0, right = 0;
  const q = [];
  while (right < nums.length) {
      // pop the last element if the last elements in q is smaller than nums[right]
      while (q.length > 0 && nums[right] > nums[q[q.length - 1]]) {
          q.pop();
      }
      q.push(right);
      if (left > q[0]) {
          q.shift();
      }
      if (right + 1 >= k) {
          res.push(nums[q[0]]);
          left++;
      }
      right++;
    }
    return res; 
};`,
  time_complexity: `n`,
  space_complexity: `k`,
};

// checks if the user has the correct code
const handle_maxSlidingWindow = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [[1, 3, -1, -3, 5, 3, 6, 7], [1]];
    const k = [3, 1];

    const answers = [[3, 3, 5, 5, 6, 7], [1]];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], k[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("maxSlidingWindow handler function error");
    throw new Error(error);
  }
};

export const SlidingWindowMaximum: Problem = {
  order: 7,
  id: "sliding-window-maximum",
  title: "Sliding Window Maximum",
  difficulty: "Hard",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "maxSlidingWindow(nums, k)",
  handlerFunction: handle_maxSlidingWindow,
};
