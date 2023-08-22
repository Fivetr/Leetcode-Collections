import assert from "assert";
import { Problem } from "@/types/index";
import {
  MaxPriorityQueue,
  MinPriorityQueue,
} from "@datastructures-js/priority-queue";

const problemStatement = `
<p class='mt-4'>
You are given an array of integers <code>stones</code> where <code>stones[i]</code> is the weight of the <code>i<sup>th</sup></code> stone.
</p>
<p class='mt-4'>
We are playing a game with the stones. On each turn, we choose the <strong>heaviest two stones</strong> 
and smash them together. Suppose the heaviest two stones have weights <code>x</code> and <code>y</code> with <code>x <= y</code>. The result of this smash is:
</p>
<p class='mt-4'>
If <code>x == y</code>, both stones are destroyed, and
</p>
<p class='mt-4'>
If <code>x != y</code>, the stone of weight <code>x</code> is destroyed, and the 
stone of weight <code>y</code> has new weight <code>y - x</code>.
</p>
<p class='mt-4'>
At the end of the game, there is <strong>at most one stone</strong> left.
</p>
<p class='mt-4'>
Return <em>the weight of the last remaining stone</em>. If there are no stones left, return <code>0</code>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "stones = [2,7,4,1,8,1]",
    outputText: "1",
    explanation:
      "We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then, \nwe combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then, \nwe combine 2 and 1 to get 1 so the array converts to [1,1,1] then, \nwe combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.",
  },
  {
    id: 2,
    inputText: "stones = [1]",
    outputText: "1",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ stones.length ≤ 30</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ stones[i] ≤ 1000</code>
</li>  
`;

const starterCode = `/**
* @param {number[]} stones
* @return {number}
*/
var lastStoneWeight = function(stones) {
  // Write your code here
};`;

const solution = {
  solution: `var lastStoneWeight = function(stones) {
  const queue = new MaxPriorityQueue();
  // Convert the stones list into a heap
  stones.forEach((stone)=> queue.enqueue(stone));
  while (queue.size() > 1) {
    // Pop the two smallest (most negative) values from the heap
    let first = queue.dequeue();
    let second = queue.dequeue();
    // If they are not equal, calculate the difference between s1 and s2
    if (first !== second) queue.enqueue(first - second);
    }
  return queue.size() === 0 ? 0 : queue.front(); 
};`,
  time_complexity: `nlogn`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_LastStoneWeight = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const stones = [[2, 7, 4, 1, 8, 1], [1]];

    const answers = [1, 1];
    let maxPriorityQueue = MaxPriorityQueue;
    let minPriorityQueue = MinPriorityQueue;
    // loop all tests to check if the user's code is correct
    for (let i = 0; i < stones.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(stones[i], maxPriorityQueue, minPriorityQueue);
      console.log(result);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("LastStoneWeight handler function error");
    console.log(error);
    throw new Error(error);
  }
};

export const LastStoneWeight: Problem = {
  order: 1,
  id: "last-stone-weight",
  title: "Last Stone Weight",
  difficulty: "Easy",
  category: "Heap",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "lastStoneWeight(stones)",
  extraParams: "lastStoneWeight(stones, MaxPriorityQueue, MinPriorityQueue)",
  handlerFunction: handle_LastStoneWeight,
};
