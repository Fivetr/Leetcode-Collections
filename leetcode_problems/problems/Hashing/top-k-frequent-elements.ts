import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `<p class='mt-4'>
Given an integer array <code>nums</code> and an integer <code>k</code>, return 
<em>the</em> <code>k</code> <em>most frequent elements.</em> You may return the answer in <strong>any order</strong>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "nums = [1,1,1,2,2,3], k = 2",
    outputText: "[1,2]",
  },
  {
    id: 2,
    inputText: "nums = [1], k = 1",
    outputText: "[1]",
  },
];

const constraints = `<li class='mt-3 text-sm' >
<code>1 ≤ nums.length ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm' >
<code>-10<sup>4</sup> ≤ nums[i] ≤ 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm' >
<code>k</code> is in the range <code>[1, the number of unique elements in the array]</code>.
</li> 
<li class='mt-3 text-sm'>
It is <strong>guaranteed</strong> that the answer is <strong>unique</strong>.
</li>`;

const starterCode = `/**
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var topKFrequent = function(nums, k) {
  // Write your code here
  
};`;

const solution = {
  solution: `var topKFrequent = function(nums, k) {
  const counts = {};
  const freq = Array.from(Array(nums.length + 1), () => new Array());
  for (let n of nums) {
    counts[n] = (counts[n] || 0) + 1;
  }
  for (let count in counts) {
    freq[counts[count]].push(parseInt(count));
  }
  const res = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (let n of freq[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_TopKFrequent = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [[1, 1, 1, 2, 2, 3], [1], [-1, -1]];
    const k = [2, 1, 1];
    const answers = [[1, 2], [1], [-1]];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], k[i]).sort();
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("TopKFrequent handler function error");
    throw new Error(error);
  }
};

export const TopKFrequentElements: Problem = {
  order: 5,
  id: "top-k-frequent-elements",
  title: "Top K Frequent Elements",
  difficulty: "Medium",
  category: "Hashing",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "topKFrequent(nums, k)",
  handlerFunction: handle_TopKFrequent,
};
