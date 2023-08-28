import { TreeNode, bfs, insertLevelOrder } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/balancedtree1.png";
import img2 from "./images/balancedtree2.png";

const problemStatement = `
<p class='mt-4'>
Given a binary tree, determine if it is <strong>height-balanced</strong>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "root = [3,9,20,null,null,15,7]",
    outputText: "true",
    img: img1.src,
    img_size: 380,
  },
  {
    id: 2,
    inputText: "root = [1,2,2,3,3,null,null,4,4]",
    outputText: "false",
    img: img2.src,
    img_size: 430,
  },
  {
    id: 3,
    inputText: "root = []",
    outputText: "true",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the tree is in the range <code>[0, 5000]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> ≤ Node.val ≤ 10<sup>4</sup></code>
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
var isBalanced = function(root) {
    
};`;

const solution = {
  solution: `var isBalanced = function(root) {
  let isBalanced = true;
  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    if (Math.abs(left - right) > 1) {
      isBalanced = false;
    }
    return 1 + Math.max(left, right);
  }
  dfs(root);
  return isBalanced;
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_BalancedBinaryTree = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const root = [
      [3, 9, 20, null, null, 15, 7],
      [1, 2, 2, 3, 3, null, null, 4, 4],
      [],
    ];
    const answers = [true, false, true];
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
    console.log("BalancedBinaryTree handler function error");
    throw new Error(error);
  }
};

export const BalancedBinaryTree: Problem = {
  order: 4,
  id: "balanced-binary-tree",
  title: "Balanced Binary Tree",
  difficulty: "Easy",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "isBalanced(root)",
  extraParams: "isBalanced(root, TreeNode)",
  handlerFunction: handle_BalancedBinaryTree,
};
