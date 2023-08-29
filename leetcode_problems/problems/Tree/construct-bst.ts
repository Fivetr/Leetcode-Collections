import { TreeNode, bfs } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/constructtree1.png";

const problemStatement = `
<p class='mt-4'>
Given two integer arrays <code>preorder</code> and <code>inorder</code> where <code>preorder</code> is the preorder traversal 
of a binary tree and inorder is the <code>inorder</code> traversal of the same tree, construct and 
return the <em>binary tree</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
    outputText: "[3,9,20,null,null,15,7]",
    img: img1.src,
    img_size: 280,
  },
  {
    id: 2,
    inputText: "preorder = [-1], inorder = [-1]",
    outputText: "[-1]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ preorder.length ≤ 3000 </code>
</li> 
<li class='mt-3 text-sm'>
<code>inorder.length == preorder.length</code>
</li> 
<li class='mt-3 text-sm'>
<code>-3000 ≤ preorder[i], inorder[i] ≤ 3000 </code>
</li> 
<li class='mt-3 text-sm'>
<code>preorder</code> and <code>inorder</code> consist of <strong>unique</strong> values.
</li> 
<li class='mt-3 text-sm'>
Each value of <code>inorder</code> also appears in <code>preorder</code>.
</li> 
<li class='mt-3 text-sm'>
<code>preorder</code> is <strong>guaranteed</strong> to be the preorder traversal of the tree.
</li> 
<li class='mt-3 text-sm'>
<code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
};`;

const solution = {
  solution: `var buildTree = function(preorder, inorder) {

};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_ConstructBinaryTree = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const preorders = [[3, 9, 20, 15, 7], [1, null, 3], [1]];
    const inorders = [[9, 3, 15, 20, 7], [1]];
    const answers = [[3, 9, 20, 15, 7], [1]];
    let node = TreeNode;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < preorders.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(preorders[i], inorders[i], node);
      console.log(bfs(result));
      assert.deepStrictEqual(bfs(result), answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("ConstructBinaryTree handler function error");
    throw new Error(error);
  }
};

export const ConstructBinaryTree: Problem = {
  order: 13,
  id: "construct-binary-tree-from-preorder-and-inorder-traversal",
  title: "Construct Binary Tree From Preorder and Inorder Traversal",
  difficulty: "Medium",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "buildTree(preorder, inorder)",
  extraParams: "buildTree(preorder, inorder, TreeNode)",
  handlerFunction: handle_ConstructBinaryTree,
};
