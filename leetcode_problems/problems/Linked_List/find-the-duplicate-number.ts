import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an array of integers <code>nums</code> containing <code>n + 1</code> integers where each integer 
is in the range <code>[1, n]</code> inclusive.
</p>
<p class='mt-4'>
There is only <strong>one repeated number</strong> in <code>nums</code>, return 
<em>this repeated number</em>.
</p>
<p class='mt-4'>
You must solve the problem <strong>without</strong> modifying the array <code>nums</code> and uses only constant extra space.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,3,4,2,2]",
    outputText: "2",
  },
  {
    id: 2,
    inputText: "nums = [3,1,3,4,2]",
    outputText: "3",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>nums.length == n + 1</code>
</li> 
<li class='mt-3 text-sm'>
<code>1 ≤ nums[i] ≤ n</code>
</li> 
<li class='mt-3 text-sm'>
All the integers in <code>nums</code> appear only <strong>once</strong> except for 
<strong>precisely one integer</strong> which appears <strong>two or more</strong> times.
</li> 
`;

const starterCode = `/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var findDuplicate = function(nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow != fast) { // we are guaranteed to have a cycle
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_FindTheDuplicateNumber = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [1, 3, 4, 2, 2],
      [3, 1, 3, 4, 2],
    ];
    const answers = [2, 3];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      console.log(result);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("FindTheDuplicateNumber handler function error");
    throw new Error(error);
  }
};

export const FindTheDuplicateNumber: Problem = {
  order: 10,
  id: "find-the-duplicate-number",
  title: "Find the Duplicate Number",
  difficulty: "Medium",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "findDuplicate(nums)",
  handlerFunction: handle_FindTheDuplicateNumber,
};
