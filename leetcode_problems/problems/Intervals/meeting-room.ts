import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an array of meeting time <code>intervals</code> where <code>intervals[i] = [starti, endi]</code>, 
determine if a person could attend all meetings.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "intervals = [[0,30],[5,10],[15,20]]",
    outputText: "false",
  },
  {
    id: 2,
    inputText: "intervals = [[7,10],[2,4]]",
    outputText: "true",
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
<code>0 ≤ start<sub>i</sub> < end<sub>i</sub> ≤ 10<sup>6</sup></code>
</li>  
`;

const starterCode = `/**
* @param {number[][]} intervals
* @return {boolean}
*/
var canAttendMeetings = function(intervals) {
  // Write your code here
};`;

const solution = {
  solution: `var canAttendMeetings = function(intervals) {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_MeetingRooms = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const intervals = [
      [
        [0, 30],
        [5, 10],
        [15, 20],
      ],
      [
        [7, 10],
        [2, 4],
      ],
    ];

    const answers = [false, true];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < intervals.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(intervals[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("MeetingRooms handler function error");
    throw new Error(error);
  }
};

export const MeetingRooms: Problem = {
  order: 1,
  id: "meeting-rooms",
  title: "Meeting Rooms",
  difficulty: "Easy",
  category: "Intervals",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "canAttendMeetings(intervals)",
  handlerFunction: handle_MeetingRooms,
};
