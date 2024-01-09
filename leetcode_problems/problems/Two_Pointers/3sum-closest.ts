import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an integer array <code>nums</code> of length n and an integer <code>target</code>, find three 
integers in <code>nums</code> such that the sum is closest to <code>target</code>.
</p>
<p class='mt-4'>
Return <em>the sum of the three integers</em>.
</p>
<p class='mt-4'>
You may assume that each input would have exactly one solution.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [-1,2,1,-4], target = 1",
    outputText: "2",
    explanation:
      "The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).",
  },
  {
    id: 2,
    inputText: "nums = [0,0,0], target = 1",
    outputText: "0",
    explanation: "The sum that is closest to the target is 0. (0 + 0 + 0 = 0).",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>3 <= nums.length <= 500</code>
</li> 
<li class='mt-3 text-sm'>
<code>-1000 <= nums[i] <= 1000</code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> <= target <= 10<sup>4</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var threeSumClosest = function(nums, target) {
  // Write your code here
};`;

const solution = {
  solution: `var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a - b)
    let minSum = nums[0] + nums[1] + nums[2]
    for(let i = 0; i< nums.length; i++){
        let l = i + 1, r = nums.length -1
        while(l < r){
            let sum = nums[l] + nums[r] + nums[i]
            if(Math.abs(minSum - target) > Math.abs(sum - target)){
                minSum = sum
            }
            if(sum > target) r--
            else l++
        }
    }
    return minSum
};`,
  time_complexity: `n<sup>2</sup>`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_threeSumClosest = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [-1, 2, 1, -4],
      [0, 0, 0],
    ];
    const target = [1, 1];

    const answers = [2, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], target[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("threeSumClosest handler function error");
    throw new Error(error);
  }
};

export const ThreeSumClosest: Problem = {
  order: 6,
  id: "3sum-closest",
  title: "3Sum Closest",
  difficulty: "Medium",
  category: "Two Pointers",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "threeSumClosest(nums, target)",
  handlerFunction: handle_threeSumClosest,
};
