import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>

Given an integer array <code>nums</code> and an integer <code>k</code>, return 
<code>true</code> <em>if there are two <strong>distinct indices</strong></em> 
<code>i</code> and <code>j</code> in the array such that <code>nums[i] == nums[j]</code> 
and <code>abs(i - j) <= k</code>.</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,2,3,1], k = 3",
    outputText: "true",
  },
  {
    id: 2,
    inputText: "nums = [1,0,1,1], k = 1",
    outputText: "true",
    explanation: 'The answer is "b", with the length of 1.',
  },
  {
    id: 3,
    inputText: "nums = [1,2,3,1,2,3], k = 2",
    outputText: "false",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 <= nums.length <= 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>0 <= k <= 10<sup>5</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[]} nums
* @param {number} k
* @return {boolean}
*/
var containsNearbyDuplicate = function(nums, k) {
  // Write your code here
};`;

const solution = {
  solution: `var containsNearbyDuplicate = function(nums, k) {
    let l = 0
    let set = new Set()
    for(let r = 0; r < nums.length; r++){
        if(r - l > k){
            set.delete(nums[l])
            l++
        }
        if(set.has(nums[r])) return true
        set.add(nums[r])
    }
    return false
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_ContainsDuplicate2 = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [1, 2, 3, 1],
      [1, 0, 1, 1],
      [1, 2, 3, 1, 2, 3],
    ];
    const k = [3, 1, 2];
    const answers = [true, true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], k[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("ContainsDuplicate2 handler function error");
    throw new Error(error);
  }
};

export const ContainsDuplicate2: Problem = {
  order: 2,
  id: "contains-duplicate-2",
  title: "Contains Duplicate 2",
  difficulty: "Easy",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "containsNearbyDuplicate(nums, k)",
  handlerFunction: handle_ContainsDuplicate2,
};
