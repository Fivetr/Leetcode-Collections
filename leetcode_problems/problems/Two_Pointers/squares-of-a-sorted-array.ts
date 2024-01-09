import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an integer array <code>nums</code> sorted in <strong>non-decreasing</strong> 
order, return <em>an array of <strong>the squares of each number</strong> sorted in non-decreasing order</em>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "nums = [-4,-1,0,3,10]",
    outputText: "[0,1,9,16,100]",
    explanation:
      "After squaring, the array becomes [16,1,0,9,100].\nAfter sorting, it becomes [0,1,9,16,100].",
  },
  {
    id: 2,
    inputText: "nums = [-7,-3,2,3,11]",
    outputText: "[4,9,9,49,121]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 <= nums.length <= 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>nums</code> is sorted in <strong>non-decreasing</strong> order.
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number[]}
*/
var sortedSquares = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var sortedSquares = function(nums) {
    let l = 0
    let r = nums.length - 1
    let i = r
    const res = []
    while(i >= 0){
        if(nums[l] * nums[l] > nums[r] * nums[r]){
            res[i] = nums[l] * nums[l]
            l++
        }else{
            res[i] = nums[r] * nums[r]
            r--
        }
        i--
    }
    return res
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_sortedSquares = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [-4, -1, 0, 3, 10],
      [-7, -3, 2, 3, 11],
    ];

    const answers = [
      [0, 1, 9, 16, 100],
      [4, 9, 9, 49, 121],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("sortedSquares handler function error");
    throw new Error(error);
  }
};

export const SquaresOfASortedArray: Problem = {
  order: 3,
  id: "squares-of-a-sorted-array",
  title: "Squares of a Sorted Array",
  difficulty: "Easy",
  category: "Two Pointers",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "sortedSquares(nums)",
  handlerFunction: handle_sortedSquares,
};
