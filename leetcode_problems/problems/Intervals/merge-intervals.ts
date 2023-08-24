import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an array of <code>intervals</code> where <code>intervals[i] = [start<sup>i</sup>, end<sup>i</sup>]</code>, merge all 
overlapping intervals, and return <em>an array of the non-overlapping intervals 
that cover all the intervals in the input</em>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    outputText: "[[1,6],[8,10],[15,18]]",
    explanation:
      "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
  },
  {
    id: 2,
    inputText: "intervals = [[1,4],[4,5]]",
    outputText: "[[1,5]]",
    explanation: "Intervals [1,4] and [4,5] are considered overlapping.",
  },
];

const constraints = ` 
<li class='mt-3 text-sm'>
<code>1 ≤ intervals.length ≤ 10<sup>4</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>intervals[i].length == 2</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ start<sub>i</sub> < end<sub>i</sub> ≤ 10<sup>6</sup></code>
</li>  
`;

const starterCode = `/**
* @param {number[][]} intervals
* @return {number[][]}
*/
var merge = function(intervals) {
  // Write your code here
};`;

const solution = {
  solution: `var merge = function(intervals) {
  let ans = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let temp = intervals[0];
  for (let i = 0; i < intervals.length; i++) {
    // check for overlapping
    if (intervals[i][0] <= temp[1]) {
      // continue check for other possible overlapping
      temp[1] = Math.max(temp[1], intervals[i][1]);
    } else {
      // no overlapping for temp interval
      ans.push(temp);
      // update temp to intervals i and check for overlapping with intervals comes after it.
      temp = intervals[i];
    }
  }
  // push the last interval
  ans.push(temp);
  return ans;
};`,
  time_complexity: `nlogn`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_MergeIntervals = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const intervals = [
      [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ],
      [
        [1, 4],
        [4, 5],
      ],
    ];

    const answers = [
      [
        [1, 6],
        [8, 10],
        [15, 18],
      ],
      [[1, 5]],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < intervals.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(intervals[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("MergeIntervals handler function error");
    throw new Error(error);
  }
};

export const MergeIntervals: Problem = {
  order: 4,
  id: "merge-intervals",
  title: "Merge Intervals",
  difficulty: "Medium",
  category: "Intervals",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "merge(intervals)",
  handlerFunction: handle_MergeIntervals,
};
