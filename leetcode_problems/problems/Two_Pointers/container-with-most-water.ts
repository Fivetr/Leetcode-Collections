import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given an integer array <code>height</code> of length <code>n</code>. 
There are <code>n</code> vertical lines drawn such that the two endpoints of the 
<code>ith</code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.
</p>
<p class='mt-4'>
Find two lines that together with the x-axis form a container, such that the container contains the most water.
</p>
<p class='mt-4'>
Return <em>the maximum amount of water a container can store</em>.
</p>
<p class='mt-4'>
<strong>Notice</strong> that you may not slant the container.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "height = [1,8,6,2,5,4,8,3,7]",
    outputText: "49",
    explanation:
      "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.",
  },
  {
    id: 2,
    inputText: "height = [1,1]",
    outputText: "1",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>n == heights.length</code>
</li> 
<li class='mt-3 text-sm'>
<code>2 ≤ n ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>0 ≤ heights[i] ≤ 10<sup>4</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[]} height
* @return {number}
*/
function maxArea(height) {
  // Write your code here
};`;

const solution = {
  solution: `function maxArea(height) {

};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_maxArea = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const heights = [
      [1, 8, 6, 2, 5, 4, 8, 3, 7],
      [1, 1],
    ];

    const answers = [49, 1];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < heights.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(heights[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("maxArea handler function error");
    throw new Error(error);
  }
};

export const ContainerWithMostWater: Problem = {
  order: 4,
  id: "container-with-most-water",
  title: "Container With Most Water",
  difficulty: "Medium",
  category: "Two Pointers",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function maxArea(",
  handlerFunction: handle_maxArea,
};
