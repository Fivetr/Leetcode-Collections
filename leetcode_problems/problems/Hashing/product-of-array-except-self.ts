import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an integer array <code>nums</code>, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is equal 
to the product of all the elements of</em> <code>nums</code> <em>except</em> <code>nums[i]</code>.
</p>
<p class='mt-4'>
The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.
</p>
<p class='mt-4'>
You must write an algorithm that runs in <code>O(n)</code> time and without using the division operation.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,2,3,4]",
    outputText: "[24,12,8,6]",
  },
  {
    id: 2,
    inputText: "nums = [-1,1,0,-3,3]",
    outputText: "[0,0,9,0,0]",
  },
];

const constraints = `<li class='mt-3 text-sm' >
<code>2 ≤ nums.length ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm' >
<code>-30 ≤ nums[i] ≤ 30</code>
</li> 
<li class='mt-3 text-sm'>
The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.
</li>`;

const starterCode = `/**
* @param {number[]} nums
* @return {number[]}
*/
var productExceptSelf = function(nums) {
  // Write your code here
};`;

const solution = {
  solution: `var productExceptSelf = function(nums) {
  let res = Array(nums.length);
  // get product of prefix expect self 
  let prefix = 1
  for (let i = 0; i < nums.length; i++){
    res[i] = prefix
    prefix *= nums[i]
  }
  // get product of prefix & postfix expect self 
  let postfix = 1
  for (let i = nums.length-1; i >= 0; i--){
    res[i] *=postfix
    postfix *= nums[i]
  }
  return res
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_ProductExceptSelf = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [1, 2, 3, 4],
      [-1, 1, 0, -3, 3],
    ];

    const answers = [
      [24, 12, 8, 6],
      [0, 0, 9, 0, 0],
    ];
    const t = [0, 0, 9, 0, 0];
    const t2 = [-0, 0, 9, -0, 0];
    console.log(t === t2);

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]).map((num: number) => (num === -0 ? 0 : num));
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("ProductExceptSelf handler function error");
    throw new Error(error);
  }
};

export const ProductOfArrayExpectSelf: Problem = {
  order: 6,
  id: "product-of-array-except-self",
  title: "Product of Array Expect Self",
  difficulty: "Medium",
  category: "Hashing",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "productExceptSelf(nums)",
  handlerFunction: handle_ProductExceptSelf,
};
