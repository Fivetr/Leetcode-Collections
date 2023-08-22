import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/k-closest-point_1.jpg";
import {
  MaxPriorityQueue,
  MinPriorityQueue,
} from "@datastructures-js/priority-queue";

const problemStatement = `
<p class='mt-4'>
Given an array of <code>points</code> where <code>points[i] = [xi, yi]</code> 
represents a point on the <strong>X-Y</strong> plane and an integer <code>k</code>, 
return the <code>k</code> closest points to the origin <code>(0, 0)</code>.</p>
<p class='mt-4'>
The distance between two points on the <strong>X-Y</strong> plane is the 
Euclidean distance (i.e., <code>√(x1 - x2)<sup>2</sup> + (y1 - y2)<sup>2</sup></code>).</p>
<p class='mt-4'>
You may return the answer in <strong>any order</strong>. The answer is <strong>guaranteed</strong> 
to be <strong>unique</strong> (except for the order that it is in).</p>

`;

const examples = [
  {
    id: 1,
    inputText: "points = [[1,3],[-2,2]], k = 1",
    outputText: "[-2,2]]",
    explanation:
      "The distance between (1, 3) and the origin is sqrt(10). \nThe distance between (-2, 2) and the origin is sqrt(8). \nSince sqrt(8) < sqrt(10), (-2, 2) is closer to the origin. \nWe only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].",

    img: img1.src,
    img_size: 400,
  },
  {
    id: 2,
    inputText: "points = [[3,3],[5,-1],[-2,4]], k = 2",
    outputText: "[[3,3],[-2,4]]",
    explanation: "The answer [[-2,4],[3,3]] would also be accepted.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ k ≤ points.length ≤ 10<sup>4</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> ≤ xi, yi ≤ 10<sup>4</sup></code>
</li>  
`;

const starterCode = `/**
* @param {number[][]} points
* @param {number} k
* @return {number[][]}
*/
var kClosest = function(points, k) {
  // Write your code here
};`;

const solution = {
  solution: `var kClosest = function(points, k) {

};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_KClosestPointToOrigin = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const points = [
      [
        [1, 3],
        [-2, 2],
      ],
      [
        [3, 3],
        [5, -1],
        [-2, 4],
      ],
    ];
    const k = [1, 2];

    const answers = [
      [[-2, 2]],
      [
        [-2, 4],
        [3, 3],
      ],
    ];
    let maxPriorityQueue = MaxPriorityQueue;
    let minPriorityQueue = MinPriorityQueue;
    // loop all tests to check if the user's code is correct
    for (let i = 0; i < points.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(
        points[i],
        k[i],
        maxPriorityQueue,
        minPriorityQueue
      ).sort();
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("KClosestPointToOrigin handler function error");
    throw new Error(error);
  }
};

export const KClosestPointToOrigin: Problem = {
  order: 2,
  id: "k-closest-points-to-origin",
  title: "K Closest Point to Origin",
  difficulty: "Medium",
  category: "Heap",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "kClosest(points, k)",
  extraParams: "kClosest(points, k, MaxPriorityQueue, MinPriorityQueue)",
  handlerFunction: handle_KClosestPointToOrigin,
};
