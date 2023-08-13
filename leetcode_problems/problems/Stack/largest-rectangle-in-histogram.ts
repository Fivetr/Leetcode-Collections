import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/largets-rec-1.jpg";
import img2 from "./images/largest-rec-2.jpg";

const problemStatement = `<p class='mt-4'>
Given an array of integers <code>heights</code> representing the histogram's bar 
height where the width of each bar is <code>1</code>, return <em>the area of the largest rectangle in the histogram.</em>
</p>`;

const examples = [
  {
    id: 1,
    inputText: "heights = [2,1,5,6,2,3]",
    outputText: "10",
    explanation:
      "\nThe above is a histogram where width of each bar is 1. \nThe largest rectangle is shown in the red area, which has an area = 10 units.",
    img: img1.src,
    img_size: 510,
  },
  {
    id: 2,
    inputText: "heights = [2,4]",
    outputText: "4",
    img: img2.src,
    img_size: 180,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ heights.length ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>0 ≤ heights[i] ≤ 10<sup>4</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[]} heights
* @return {number}
*/
function largestRectangleArea(heights) {
  // Write your code here
  
};`;

const solution = {
  solution: `function largestRectangleArea(heights) {
  //To make sure we processed all the heights
  heights.push(0)  
  /* Initialize stack to store height, and the index
  from where it's possible to build rectangle of this height.*/
  let stack = []; // a pair of [height_start_idx, height]
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    let heightStart = i;
    /*When the height is decreasing, we couldn't build rectangle of 
    any previous height, heigher than the current one. So it's the 
    place to make evaluation. */
    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      /*We'll pop all the heights bigger than the current one from the stack, 
      and estimate the rectangles which could be build to this point*/
      let [pos, height] = stack.pop();
      res = Math.max(res, (i - pos) * height);
      heightStart = pos; 
    }
    /*When the heights are increasing, we can 
    always build rectangle from a point there a 
    previous height started, to the current point.*/
    stack.push([heightStart, heights[i]]);
  }
  return res;
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_LargestRectangleArea = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const heights = [
      [2, 1, 5, 6, 2, 3],
      [2, 4],
    ];

    const answers = [10, 4];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < heights.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(heights[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("ContainsDuplicate handler function error");
    throw new Error(error);
  }
};

export const LargestRectangleinHistogram: Problem = {
  order: 6,
  id: "largest-rectangle-in-histogram",
  title: "Largest Rectangle in Histogram",
  difficulty: "Hard",
  category: "Stack",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function largestRectangleArea(",
  handlerFunction: handle_LargestRectangleArea,
};
