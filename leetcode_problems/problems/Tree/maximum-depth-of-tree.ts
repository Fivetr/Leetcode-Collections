import { TreeNode, bfs, insertLevelOrder } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/depth-tree.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>root</code> of a binary tree, return its <em>maximum depth</em>.
</p>
<p class='mt-4'>
A binary tree's <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "root = [3,9,20,null,null,15,7]",
    outputText: "3",
    img: img1.src,
    img_size: 390,
  },
  {
    id: 2,
    inputText: "root = [1,null,2]",
    outputText: "2",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-100 ≤ Node.val ≤ 100</code>
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
var maxDepth = function(root) {
    
};`;

const solution = {
  solution: `var maxDepth = function(root) {
  // If the subtree is NULL, return depth as 0
  if(root === null)  return 0;
  // if root is not NULL, recursively check its left child and right child.
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  // When the two child function return its depth...
  // Pick the maximum out of these two subtrees and return this value after adding 1 to it.
  return Math.max(leftDepth, rightDepth) + 1;   
};`,
  time_complexity: `n`,
  space_complexity: `h`,
};

// checks if the user has the correct code
const handle_MaximumDepthOfBinaryTree = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const root = [
      [3, 9, 20, null, null, 15, 7],
      [1, null, 2],
    ];
    const answers = [3, 2];
    let node = TreeNode;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < root.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const root_ = insertLevelOrder(root[i], 0);
      const result = fn(root_, node);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("MaximumDepthOfBinaryTree handler function error");
    throw new Error(error);
  }
};

export const MaximumDepthOfBinaryTree: Problem = {
  order: 2,
  id: "maximum-depth-of-binary-tree",
  title: "Maximum Depth of Binary Tree",
  difficulty: "Easy",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "maxDepth(root)",
  extraParams: "maxDepth(root, TreeNode)",
  handlerFunction: handle_MaximumDepthOfBinaryTree,
};
