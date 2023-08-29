import { TreeNode, insertLevelOrder } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/diameter-tree.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>root</code> of a binary tree, return 
<em>the length of the <strong>diameter</strong> of the tree</em>.
</p>
<p class='mt-4'>
The <strong>diameter</strong> of a binary tree is the <strong>length</strong> of the longest path between any two 
nodes in a tree. This path may or may not pass through the <code>root</code>.
</p>
<p class='mt-4'>
The <strong>length</strong> of a path between two nodes is represented by the number of edges between them.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "root = [1,2,3,4,5]",
    outputText: "3",
    img: img1.src,
    img_size: 300,
    explanation: "3 is the length of the path [4,2,1,3] or [5,2,1,3].",
  },
  {
    id: 2,
    inputText: "root = [1,2]",
    outputText: "1",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.
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
* @return {TreeNode}
*/
var diameterOfBinaryTree = function(root) {
    
};`;

const solution = {
  solution: `var diameterOfBinaryTree = function(root) {
  let maxDiameter = 0
  const dfs = (node) => {
    // return 0 if node is null
    if (!node) return 0

    // recursively call dfs on left and right
    let left = dfs(node.left)
    let right = dfs(node.right)

    // Get higher between current max diameter or the heights of the left and right subtrees
    maxDiameter = Math.max(maxDiameter, left + right)

    // return height of current node by taking max of left or right and adding 1 to account for current node
    return Math.max(left, right) + 1
  }
  // call the dfs function
  dfs(root)
  return maxDiameter
};`,
  time_complexity: `n`,
  space_complexity: `h`,
};

// checks if the user has the correct code
const handle_DiameterOfBinaryTree = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const root = [
      [1, 2, 3, 4, 5],
      [1, 2],
    ];
    const answers = [3, 1];
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
    console.log("DiameterOfBinaryTree handler function error");
    throw new Error(error);
  }
};

export const DiameterOfBinaryTree: Problem = {
  order: 3,
  id: "diameter-of-binary-tree",
  title: "Diameter of Binary Tree",
  difficulty: "Easy",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "diameterOfBinaryTree(root)",
  extraParams: "diameterOfBinaryTree(root, TreeNode)",
  handlerFunction: handle_DiameterOfBinaryTree,
};
