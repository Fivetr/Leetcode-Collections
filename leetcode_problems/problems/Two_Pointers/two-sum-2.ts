import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given a <strong>1-indexed</strong> array of integers <code>numbers</code> that is 
already <strong><em>sorted in non-decreasing order</em></strong>, find two numbers such that 
they add up to a specific <code>target</code> number. Let these two numbers be 
<code>numbers[index1]</code> and <code>numbers[index2]</code> where <code>1 <= index1 < index2 < numbers.length</code>.
</p>
<p class='mt-4'>
Return <em>the indices of the two numbers</em>, <code>index1</code> <em>and</em> 
<code>index2</code>, <strong><em>added by one</em></strong> <em>as an integer array</em> 
<code>[index1, index2]</code> <em>of length 2</em>.
</p>
<p class='mt-4'>
The tests are generated such that there is <strong>exactly one solution</strong>. 
You <strong>may not</strong> use the same element twice.
</p>
<p class='mt-4'>
Your solution must use only constant extra space.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "numbers = [2,7,11,15], target = 9",
    outputText: "[1,2]",
    explanation:
      "The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].",
  },
  {
    id: 2,
    inputText: "numbers = [2,3,4], target = 6",
    outputText: "[1,3]",
    explanation:
      "The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].",
  },
  {
    id: 3,
    inputText: "numbers = [-1,0], target = -1",
    outputText: "[1,2]",
    explanation:
      "The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>2 ≤ numbers.length ≤ 3 * 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>-1000 ≤ numbers[i] ≤ 1000</code>
</li> 
<li class='mt-3 text-sm'>
<code>number</code> is sorted in <strong>non-decreasing order</strong>.
</li> 
<li class='mt-3 text-sm'>
<code>-1000 ≤ target ≤ 1000</code>
</li> 
<li class='mt-3 text-sm'>
The tests are generated such that there is <strong>exactly one solution</strong>.
</li> 
`;

const starterCode = `/**
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/
var twoSum = function(numbers, target) {
  // Write your code here
};`;

const solution = {
  solution: `var twoSum = function(numbers, target) {
  // declare two pointers at the start and end of the array
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    // if the sum is greater than the target, right--
    if (sum > target) {
      right--;
      // if the sum is less than the target, left++
    } else if (sum < target) {
      left++;
      // if the sum is equal to the target, return the two pointers
    } else {
      return [left + 1, right + 1];
    }
  }
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_twoSum = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const numbers = [
      [2, 7, 11, 15],
      [2, 3, 4],
      [-1, 0],
    ];

    const targets = [9, 6, -1];

    const answers = [
      [1, 2],
      [1, 3],
      [1, 2],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < numbers.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(numbers[i], targets[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("twoSum handler function error");
    throw new Error(error);
  }
};

export const TwoSum2: Problem = {
  order: 2,
  id: "two-sum-2",
  title: "Two Sum II - Input Array Is Sorted  ",
  difficulty: "Medium",
  category: "Two Pointers",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "twoSum(numbers, target)",
  handlerFunction: handle_twoSum,
};
