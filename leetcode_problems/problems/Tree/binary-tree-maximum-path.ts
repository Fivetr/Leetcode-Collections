import { TreeNode, insertLevelOrder } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/maximumpath1.png";
import img2 from "./images/maximumpath2.png";

const problemStatement = `
<p class='mt-4'>
A <strong>path</strong> in a binary tree is a sequence of nodes where each pair of adjacent nodes in the 
sequence has an edge connecting them. A node can only appear in the 
sequence <strong>at most once</strong>. Note that the path does not need to pass through the root.
</p>
<p class='mt-4'>
The <strong>path sum</strong> of a path is the sum of the node's values in the path.
</p>
<p class='mt-4'>
Given the <code>root</code> of a binary tree, return the <em>maximum <strong>path sum</strong> of any <strong>non-empty</strong> path</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "root = [1,2,3]",
    outputText: "6",
    img: img1.src,
    img_size: 300,
    explanation:
      "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.",
  },
  {
    id: 2,
    inputText: "root = [-10,9,20,null,null,15,7]",
    outputText: "42",
    img: img2.src,
    img_size: 400,
    explanation:
      "The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the tree is in the range <code>[1, 3 * 10<sup>4</sup>]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-1000  ≤ Node.val ≤ 1000 </code>
</li> 
`;

const starterCode = `/**
* Definition for a binary tree node.
* class TreeNode {
*   public val: number | null;
*   public left: TreeNode | null;
*   public right: TreeNode | null;
*
*   constructor(value: number) {
*     this.val = value;
*     this.left = null;
*     this.right = null;
*   }
* }

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    
};`;

const solution = {
  solution: `var maxPathSum = function(root) {
  var max = -Number.MAX_VALUE;
  getMaxSum(root);
  return max;
  function getMaxSum(node) {
    if (!node) return 0;
    var leftSum = getMaxSum(node.left);
    var rightSum = getMaxSum(node.right);
    max = Math.max(max, node.val + leftSum + rightSum);
    return Math.max(0, node.val + leftSum, node.val + rightSum);
  }
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_BinaryTreeMaximumPath = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const root = [
      [1, 2, 3],
      [-10, 9, 20, null, null, 15, 7],
    ];
    const answers = [6, 42];
    let node = TreeNode;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < root.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const root_ = insertLevelOrder(root[i], 0);
      const result = fn(root_, node);
      console.log(result);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("BinaryTreeMaximumPath handler function error");
    throw new Error(error);
  }
};

export const BinaryTreeMaximumPath: Problem = {
  order: 14,
  id: "binary-tree-maximum-path-sum",
  title: "Binary Tree Maximum Path Sum",
  difficulty: "Hard",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "maxPathSum(root)",
  extraParams: "maxPathSum(root, TreeNode)",
  handlerFunction: handle_BinaryTreeMaximumPath,
};
