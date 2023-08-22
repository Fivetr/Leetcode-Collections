import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
A <strong>triplet</strong> is an array of three integers. You are given a 2D integer 
array <code>triplets</code>, where <code>triplets[i] = [ai, bi, ci]</code> describes 
the <code><sup>ith</sup></code> triplet. You are also given an integer array 
<code>target = [x, y, z]</code> that describes the <strong>triplet</strong> you want to obtain.
</p>
<p class='mt-4'>
To obtain <code>target</code>, you may apply the following operation on <code>triplets</code> 
<strong>any number</strong> of times (possibly <strong>zero</strong>):
</p>
<p class='mt-4'>
Choose two indices (<strong>0-indexed</strong>) <code>i</code> and <code>j</code> <code>(i != j)</code> and 
<strong>update</strong> <code>triplets[j]</code> to become <code>[max(ai, aj), max(bi, bj), max(ci, cj)]</code>.
</p>
<p class='mt-4'>
For example, if <code>triplets[i] = [2, 5, 3]</code> and <code>triplets[j] = [1, 7, 5]</code>, 
<code>triplets[j]</code> will be updated to <code>[max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5]</code>.
</p>
<p class='mt-4'>
Return <code>true</code> <em>if it is possible to obtain the</em> <code>target</code> 
<strong>triplet</strong> <code>[x, y, z]</code> <em>as an <strong>element</strong> of</em> 
<code>triplets</code>, <em>or</em> <code>false</code> <em>otherwise</em>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]",
    outputText: "true",
    explanation:
      "Perform the following operations:\n- Choose the first and last triplets [[2,5,3],[1,8,4],[1,7,5]]. Update the last triplet to be [max(2,1), max(5,7), max(3,5)] = [2,7,5]. triplets = [[2,5,3],[1,8,4],[2,7,5]]\nThe target triplet [2,7,5] is now an element of triplets.",
  },
  {
    id: 2,
    inputText: "triplets = [[3,4,5],[4,5,6]], target = [3,2,5]",
    outputText: "false",
    explanation:
      "It is impossible to have [3,2,5] as an element because there is no 2 in any of the triplets.",
  },
  {
    id: 3,
    inputText: "triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5]",
    outputText: "true",
    explanation:
      "Perform the following operations:\n- Choose the first and third triplets [[2,5,3],[2,3,4],[1,2,5],[5,2,3]]. Update the third triplet to be [max(2,1), max(5,2), max(3,5)] = [2,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,2,3]].\n- Choose the third and fourth triplets [[2,5,3],[2,3,4],[2,5,5],[5,2,3]]. Update the fourth triplet to be [max(2,5), max(5,2), max(5,3)] = [5,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,5,5]].\nThe target triplet [5,5,5] is now an element of triplets.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ triplets.length ≤ 10<sup>5</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>triplets[i].length == target.length == 3</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ ai, bi, ci, x, y, z ≤ 1000</code>
</li>  
`;

const starterCode = `/**
* @param {number[][]} triplets
* @param {number[]} target
* @return {boolean}
*/
var mergeTriplets = function(triplets, target){
  // Write your code here
};`;

const solution = {
  solution: `var mergeTriplets = function(triplets, target){
  const [t1,t2,t3] = target
  let res = [0, 0, 0]
  for (let i = 0; i < triplets.length; i++) {
    const [i1, i2, i3] = triplets[i]
    // skip this triplet because it will max out one of the limits .
    if (i1 > t1 || i2 > t2 || i3 > t3) continue
    // [t1,t2,t3] are the upper bound, b/c we remove the triplets have value greater than it.
    // take the max for each position.
    res = [Math.max(i1, res[0]), Math.max(i2, res[1]), Math.max(i3, res[2])]
    // return true if match.
    if (res[0] === t1 && res[1] === t2 && res[2] === t3) return true
  }
  return false
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_MergeTripletoFormTargetTriple = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const triplets = [
      [
        [2, 5, 3],
        [1, 8, 4],
        [1, 7, 5],
      ],
      [
        [3, 4, 5],
        [4, 5, 6],
      ],
      [
        [2, 5, 3],
        [2, 3, 4],
        [1, 2, 5],
        [5, 2, 3],
      ],
    ];
    const targets = [
      [2, 7, 5],
      [3, 2, 5],
      [5, 5, 5],
    ];
    const answers = [true, false, true];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < triplets.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(triplets[i], targets[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("MergeTripletoFormTargetTriple handler function error");
    throw new Error(error);
  }
};

export const MergeTripletoFormTargetTriple: Problem = {
  order: 6,
  id: "merge-triplets-to-form-target-triplet",
  title: "Merge Triplets to Form Target Triplet",
  difficulty: "Medium",
  category: "Greedy",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "mergeTriplets(triplets, target)",
  handlerFunction: handle_MergeTripletoFormTargetTriple,
};
