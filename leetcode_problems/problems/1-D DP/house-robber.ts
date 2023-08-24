import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are a professional robber planning to rob houses along a street. Each house 
has a certain amount of money stashed, the only constraint stopping you from robbing 
each of them is that adjacent houses have security systems connected and 
<strong>it will automatically contact the police if two adjacent houses were broken into on the same night</strong>.
</p>
<p class='mt-4'>
Given an integer array <code>nums</code> representing the amount of money of each house, 
return <em>the maximum amount of money you can rob tonight <strong>without alerting the police</strong></em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,2,3,1]",
    outputText: "4",
    explanation:
      "Rob house 1 (money = 1) and then rob house 3 (money = 3).\nTotal amount you can rob = 1 + 3 = 4.",
  },
  {
    id: 2,
    inputText: "nums = [2,7,9,3,1]",
    outputText: "12",
    explanation:
      "Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).\nTotal amount you can rob = 2 + 9 + 1 = 12.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 100</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ nums[i] ≤ 400</code>
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @return {number}
*/
var rob = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var rob = function(nums) {
  let robbedIdxPlus1 = 0;
  let robbedIdxPlus2 = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    const sumIfSkipped = robbedIdxPlus1;
    const sumIfRobbed = nums[i] + robbedIdxPlus2;
    const maxRobbedAtIdx = Math.max(sumIfSkipped, sumIfRobbed);
    robbedIdxPlus2 = robbedIdxPlus1;
    robbedIdxPlus1 = maxRobbedAtIdx;
  }
  return robbedIdxPlus1;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_HouseRobber = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [1, 2, 3, 1],
      [2, 7, 9, 3, 1],
    ];
    const answers = [4, 12];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("HouseRobber handler function error");
    throw new Error(error);
  }
};

export const HouseRobber: Problem = {
  order: 3,
  id: "house-robber",
  title: "House Robber",
  difficulty: "Medium",
  category: "1-D DP",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "rob(nums)",
  handlerFunction: handle_HouseRobber,
};
