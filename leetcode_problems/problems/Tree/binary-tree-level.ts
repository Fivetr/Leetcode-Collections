import { TreeNode, insertLevelOrder } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/BinaryTreeLevel.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>root</code> of a binary tree, return <em>the level order traversal of its nodes' values</em>. 
(i.e., from left to right, level by level).
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "root = [3,9,20,null,null,15,7]",
    outputText: "true",
    img: img1.src,
    img_size: 310,
  },
  {
    id: 2,
    inputText: "root = [1]",
    outputText: "[[1]]",
  },
  {
    id: 3,
    inputText: "root = [1]",
    outputText: "[]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the tree is in the range[0, 2000]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-1000 ≤ Node.val  ≤ 1000 </code>
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
};`;

const solution = {
  solution: `var levelOrder = function(root) {
  let q = [root], ans = []
  while (q[0]) {
    let qlen = q.length, row = []
    for (let i = 0; i < qlen; i++) {
      let curr = q.shift()
      row.push(curr.val)
      if (curr.left) q.push(curr.left)
      if (curr.right) q.push(curr.right)
    }
    ans.push(row)            
  }
  return ans
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_BinaryTreeLevelOrderTraversal = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const root = [[3, 9, 20, null, null, 15, 7], [1], []];
    const answers = [[[3], [9, 20], [15, 7]], [[1]], []];
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
    console.log("BinaryTreeLevelOrderTraversal handler function error");
    throw new Error(error);
  }
};

export const BinaryTreeLevelOrderTraversal: Problem = {
  order: 8,
  id: "binary-tree-level-order-traversal",
  title: "Binary Tree Level Order Traversal",
  difficulty: "Medium",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "levelOrder(root)",
  extraParams: "levelOrder(root, TreeNode)",
  handlerFunction: handle_BinaryTreeLevelOrderTraversal,
};
