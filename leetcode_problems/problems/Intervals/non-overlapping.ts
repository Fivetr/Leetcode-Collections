import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an array of intervals <code>intervals</code> where <code>intervals[i] = [start<sup>i</sup>, end<sup>i</sup>]</code>, 
return the <em>minimum number of intervals you need to remove to make the rest of 
the intervals non-overlapping</em>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
    outputText: "1",
    explanation:
      "[1,3] can be removed and the rest of the intervals are non-overlapping.",
  },
  {
    id: 2,
    inputText: "intervals = [[1,2],[1,2],[1,2]]",
    outputText: "2",
    explanation:
      "You need to remove two [1,2] to make the rest of the intervals non-overlapping.",
  },
  {
    id: 3,
    inputText: "intervals = [[1,2],[2,3]]",
    outputText: "0",
    explanation:
      "You don't need to remove any of the intervals since they're already non-overlapping.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ intervals.length ≤ 10<sup>5</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>intervals[i].length == 2</code>
</li> 
<li class='mt-3 text-sm'>
<code>-5 * 10<sup>4</sup> ≤ start<sub>i</sub> < end<sub>i</sub> ≤ 5 * 10<sup>4</sup></code>
</li>   
`;

const starterCode = `/**
* @param {number[][]} intervals
* @return {number}
*//
var eraseOverlapIntervals = function(intervals) {
  // Write your code here
};`;

const solution = {
  solution: `var eraseOverlapIntervals = function(intervals) {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_NonOverlappingIntervals = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const intervals = [
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ],
      [
        [1, 2],
        [1, 2],
        [1, 2],
      ],
      [
        [1, 2],
        [2, 3],
      ],
    ];

    const answers = [1, 2, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < intervals.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(intervals[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("NonOverlappingIntervals handler function error");
    throw new Error(error);
  }
};

export const NonOverlappingIntervals: Problem = {
  order: 5,
  id: "non-overlapping-intervals",
  title: "Non Overlapping Intervals",
  difficulty: "Medium",
  category: "Intervals",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "eraseOverlapIntervals(intervals)",
  handlerFunction: handle_NonOverlappingIntervals,
};
