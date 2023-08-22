import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an integer array <code>nums</code>. You are initially positioned at the array's 
<strong>first index</strong>, and each element in the array represents your maximum jump length at that position.
</p>
<p class='mt-4'>
Return <code>true</code> <em>if you can reach the last index, or</em> <code>false</code> <em>otherwise</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [2,3,1,1,4]",
    outputText: "true",
    explanation:
      "Jump 1 step from index 0 to 1, then 3 steps to the last index.",
  },
  {
    id: 2,
    inputText: "nums = [3,2,1,0,4]",
    outputText: "false",
    explanation:
      "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ nums.length ≤ 10<sup>4</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ nums[i] ≤ 10<sup>5</sup></code>
</li>  
`;

const starterCode = `/**
* @param {number[]} nums
* @return {boolean}
*/
var canJump = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var canJump = function(nums) {
  if(nums.length <= 1) return true;
  // To keep the maximum index that can be reached
  let maximum = nums[0];
  for(let i = 0; i < nums.length; i++){
    //if there is no way to jump to next
    // so we should return false
    if(maximum <= i && nums[i] == 0) 
        return false;
    //update the maximum jump...    
    if(i + nums[i] > maximum){
        maximum = i + nums[i];
    }
    //maximum is enough to reach the end...
    if(maximum >= nums.length-1) return true;
  }
return false;  
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_JumpGame = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [2, 3, 1, 1, 4],
      [3, 2, 1, 0, 4],
    ];

    const answers = [true, false];

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
    console.log("JumpGame handler function error");
    throw new Error(error);
  }
};

export const JumpGame: Problem = {
  order: 2,
  id: "jump-game",
  title: "Jump Game",
  difficulty: "Medium",
  category: "Greedy",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "canJump(nums)",
  handlerFunction: handle_JumpGame,
};
