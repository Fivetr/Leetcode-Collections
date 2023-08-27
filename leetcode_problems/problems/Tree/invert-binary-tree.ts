import { createBinarySearchTree, TreeNode, bfs } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/invert-tree1.png";
import img2 from "./images/invert-tree2.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "root = [4,2,7,1,3,6,9]",
    outputText: "[4,7,2,9,6,3,1]",
    img: img1.src,
    img_size: 500,
  },
  {
    id: 2,
    inputText: "root = [2,1,3]",
    outputText: "[2,3,1]",
    img: img2.src,
    img_size: 500,
  },
  {
    id: 3,
    inputText: "root = []",
    outputText: "[]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the tree is in the range <code>[0, 100]</code>.
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
var invertTree = function(root) {
   
};`;

const solution = {
  solution: `var invertTree = function(root) {

};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_InvertBinaryTree = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const root = [[4, 2, 7, 1, 3, 6, 9], [2, 1, 3], []];
    const answers = [[4, 7, 2, 9, 6, 3, 1], [2, 3, 1], []];
    let node = TreeNode;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < root.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const tree = createBinarySearchTree(root[i]);
      const result = fn(tree?.root, node);
      assert.deepStrictEqual(bfs(result), answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("InvertBinaryTree handler function error");
    throw new Error(error);
  }
};

export const InvertBinaryTree: Problem = {
  order: 1,
  id: "invert-binary-tree",
  title: "Invert Binary Tree",
  difficulty: "Easy",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "invertTree(root)",
  extraParams: "invertTree(root, TreeNode)",
  handlerFunction: handle_InvertBinaryTree,
};
