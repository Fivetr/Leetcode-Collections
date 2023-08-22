import assert from "assert";
import { Problem } from "@/types/index";
import {
  MaxPriorityQueue,
  MinPriorityQueue,
} from "@datastructures-js/priority-queue";

const problemStatement = `
<p class='mt-4'>
Given a characters array <code>tasks</code>, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.</p>
<p class='mt-4'>
However, there is a non-negative integer <code>n</code> that represents the cooldown period between two <strong>same tasks</strong> (the same letter in the array), that is that there must be at least <code>n</code> units of time between any two same tasks.</p>
<p class='mt-4'>
<em>Return the least number of units of times that the CPU will take to finish all the given tasks</em>.</p>

`;

const examples = [
  {
    id: 1,
    inputText: `tasks = ["A","A","A","B","B","B"], n = 2`,
    outputText: "8",
    explanation:
      "\nA -> B -> idle -> A -> B -> idle -> A -> B \nThere is at least 2 units of time between any two same tasks.",
  },
  {
    id: 2,
    inputText: `tasks = ["A","A","A","B","B","B"], n = 0`,
    outputText: "6",
    explanation: `On this case any permutation of size 6 would work since n = 0. \n["A","A","A","B","B","B"]\n["A","B","A","B","A","B"]\n["B","B","B","A","A","A"] \n...\nAnd so on.`,
  },
  {
    id: 3,
    inputText: `tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2`,
    outputText: "16",
    explanation: `\nOne possible solution is \nA -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A`,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ task.length ≤ 10<sup>4</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>tasks[i]</code> is upper-case English letter.
</li>  
<li class='mt-3 text-sm'>
The integer <code>n</code> is in the range <code>[0, 100]</code>.
</li>  
`;

const starterCode = `/**
* @param {character[]} tasks
* @param {number} n
* @return {number}
*/
var leastInterval = function(tasks, n) {
  // Write your code here
};`;

const solution = {
  solution: `var leastInterval = function(tasks, n) {
  // Create a frequency array to keep track of the count of each task
  const freq = Array(26).fill(0);
  for (const task of tasks) {
    freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }
  // Sort the frequency array in non-decreasing order
  freq.sort((a, b) => a - b);
  // Calculate the maximum frequency of any task
  const maxFreq = freq[25] - 1;
  // Calculate the number of idle slots that will be required
  let idleSlots = maxFreq * n;
  // Iterate over the frequency array from the second highest frequency to the lowest frequency
  for (let i = 24; i >= 0 && freq[i] > 0; i--) {
    // Subtract the minimum of the maximum frequency and the current frequency from the idle slots
    idleSlots -= Math.min(maxFreq, freq[i]);
  }
  // If there are any idle slots left, add them to the total number of tasks
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};`,
  time_complexity: `26log26 + n`,
  space_complexity: `26`,
};

// checks if the user has the correct code
const handle_TaskScheduler = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const tasks = [
      ["A", "A", "A", "B", "B", "B"],
      ["A", "A", "A", "B", "B", "B"],
      ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"],
    ];

    const n = [2, 0, 2];

    const answers = [8, 6, 16];
    let maxPriorityQueue = MaxPriorityQueue;
    let minPriorityQueue = MinPriorityQueue;
    // loop all tests to check if the user's code is correct
    for (let i = 0; i < tasks.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(tasks[i], n[i], maxPriorityQueue, minPriorityQueue);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("TaskScheduler handler function error");
    throw new Error(error);
  }
};

export const TaskScheduler: Problem = {
  order: 4,
  id: "task-scheduler",
  title: "Task Scheduler",
  difficulty: "Medium",
  category: "Heap",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "leastInterval(tasks, n)",
  extraParams: "leastInterval(tasks, n, MaxPriorityQueue, MinPriorityQueue)",
  handlerFunction: handle_TaskScheduler,
};
