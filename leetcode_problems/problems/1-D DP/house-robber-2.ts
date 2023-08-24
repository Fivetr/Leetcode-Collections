import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are a professional robber planning to rob houses along a street. Each house has a 
certain amount of money stashed. All houses at this place are <strong>arranged in a circle</strong>. 
That means the first house is the neighbor of the last one. Meanwhile, adjacent houses 
have a security system connected, and <strong>it will automatically contact the police if two 
adjacent houses were broken into on the same night</strong>.
</p>
<p class='mt-4'>
Given an integer array <code>nums</code> representing the amount of money of each house, 
return <em>the maximum amount of money you can rob tonight <strong>without alerting the police</strong></em>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "nums = [2,3,2]",
    outputText: "3",
    explanation:
      "You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.",
  },
  {
    id: 2,
    inputText: "nums = [1,2,3,1]",
    outputText: "4",
    explanation:
      "Rob house 1 (money = 1) and then rob house 3 (money = 3).\nTotal amount you can rob = 1 + 3 = 4.",
  },
  {
    id: 3,
    inputText: "nums = [1,2,3]",
    outputText: "3",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 100</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ nums[i] ≤ 1000</code>
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
  if (nums.length === 1) return nums[0];  
  const includeFirst = robHouses(nums, 0, nums.length-1);
  const excludeFirst = robHouses(nums, 1, nums.length)
  return Math.max(includeFirst, excludeFirst);
};
    
const robHouses = (nums, startIdx, endIdx) => {
  // stores max amount robbed from previous 2 houses
  let rob1 = 0;
  let rob2 = 0;
  for (let i = startIdx; i < endIdx; i++) {
    // we can't rob 2 adjacent houses so curr amount (nums[i]) can only be added to rob1
    let newRob = Math.max(nums[i] + rob1, rob2);
    rob1 = rob2;
    rob2 = newRob;
  }
  return rob2;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_HouseRobber = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [2, 3, 2],
      [1, 2, 3, 1],
      [1, 2, 3],
    ];

    const answers = [3, 4, 3];

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
    console.log("HouseRobber handler function error");
    throw new Error(error);
  }
};

export const HouseRobber2: Problem = {
  order: 4,
  id: "house-robber-2",
  title: "House Robber 2",
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
