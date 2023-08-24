import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an array of non-overlapping intervals <code>intervals</code> where 
<code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> represent the start and the end of the i<sup>th</sup> 
interval and <code>intervals</code> is sorted in ascending order by <code>start<sub>i</sub></code>. You are also 
given an interval <code>newInterval = [start, end]</code> that represents the start and end of another interval.
</p>
<p class='mt-4'>
Insert <code>newInterval</code> into <code>intervals</code> such that <code>intervals</code> is still sorted in ascending 
order by <code>start<sub>i</sub></code> and <code>intervals</code> still does not have any overlapping intervals 
(merge overlapping intervals if necessary).
</p>
<p class='mt-4'>
Return <strong>intervals</strong> <em>after the insertion</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    outputText: "[[1,5],[6,9]]",
  },
  {
    id: 2,
    inputText:
      "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
    outputText: "[[1,2],[3,10],[12,16]]",
    explanation:
      " Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>0 ≤ intervals.length ≤ 10<sup>4</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>intervals[i].length == 2</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ start<sub>i</sub> <= end<sub>i</sub> ≤ 10<sup>5</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>intervals</code> is sorted by <code>start<sub>i</sub></code> in <strong>ascending</strong> order.
</li>  
<li class='mt-3 text-sm'>
<code>newInterval.length == 2</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ start ≤ end ≤ 10<sup>5</sup></code>
</li>  
`;

const starterCode = `/**
* @param {number[][]} intervals
* @param {number[]} newInterval
* @return {number[][]}
*/
var insert = function(intervals, newInterval) {
  // Write your code here
};`;

const solution = {
  solution: `var insert = function(intervals, newInterval) {
  const res = [];
  let [mStart, mEnd] = newInterval;
  let pushed = false;
  for (let [start, end] of intervals) {
    // the intervals is in front of the newInterval
    if (end < mStart) {
      res.push([start, end]);
    // the intervals is behind the newInterval
    // implies any intervals comes after current intervals will also be behind newInterval
    // implies there will be no overlapping intervals with newInterval\
    // push the newInterval to result 
    } else if (start > mEnd) {
      if (!pushed) res.push([mStart, mEnd]);
        pushed = true;
        res.push([start, end]);
      // there is a overlap
      // merge the two intervals, check for possible overlap  
    } else {
      mStart = Math.min(start, mStart);
      mEnd = Math.max(end, mEnd);
    }
  }
  // push the NewInterval if all the intervals are infront of it
  if (!pushed) res.push([mStart, mEnd]);
  return res;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_InsertInterval = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const intervals = [
      [
        [1, 3],
        [6, 9],
      ],
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
    ];
    const newInterval = [
      [2, 5],
      [4, 8],
    ];

    const answers = [
      [
        [1, 5],
        [6, 9],
      ],
      [
        [1, 2],
        [3, 10],
        [12, 16],
      ],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < intervals.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(intervals[i], newInterval[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("InsertInterval handler function error");
    throw new Error(error);
  }
};

export const InsertInterval: Problem = {
  order: 3,
  id: "insert-interval",
  title: "Insert Interval",
  difficulty: "Medium",
  category: "Intervals",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "insert(intervals, newInterval)",
  handlerFunction: handle_InsertInterval,
};
