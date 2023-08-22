import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/container_with_most_water_1.jpg";

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
    img: img1.src,
    img_size: 700,
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
var maxArea = function(height) {
  // Write your code here
};`;

const solution = {
  solution: `var maxArea = function(height) {
  let n = height.length;
  // declare two pointers at the start and end of the array
  let left = 0, right = n - 1;
  let max_area = 0;
  while (left < right) {
    // Calculate the area between the lines
    // width: right - left
    // height: min(height[left], height[right])
    let area = Math.min(height[left], height[right]) * (right - left);
    max_area = Math.max(max_area, area);
    // shift the pointer with smaller height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max_area;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
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
  starterFunctionName: "maxArea(height)",
  handlerFunction: handle_maxArea,
};
