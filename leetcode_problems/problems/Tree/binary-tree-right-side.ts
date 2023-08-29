import { TreeNode, insertLevelOrder } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/treerightside.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>root</code> of a binary tree, imagine yourself standing on the <strong>right</strong> side of it, 
return <em>the values of the nodes you can see ordered from top to bottom</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "root = [1,2,3,null,5,null,4]",
    outputText: "[1,3,4]",
    img: img1.src,
    img_size: 400,
  },
  {
    id: 2,
    inputText: "root = [1,null,3]",
    outputText: "[1,3]",
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
<code>-100  ≤ Node.val ≤ 100 </code>
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    
};`;

const solution = {
  solution: `var rightSideView = function(root) {
    const res = []
    function traverse(node, level) {
        if (node?.val === undefined) return null
        res[level] = node.val
        traverse(node.left, level + 1)
        traverse(node.right, level + 1)
    }
    traverse(root, 0)
    return res
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_BinaryTreeRightSideView = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const root = [[1, 2, 3, null, 5, null, 4], [1, null, 3], []];
    const answers = [[1, 3, 4], [1, 3], []];
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
    console.log("BinaryTreeRightSideView handler function error");
    throw new Error(error);
  }
};

export const BinaryTreeRightSideView: Problem = {
  order: 9,
  id: "binary-tree-right-side-view",
  title: "Binary Tree Right Side View",
  difficulty: "Medium",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "rightSideView(root)",
  extraParams: "rightSideView(root, TreeNode)",
  handlerFunction: handle_BinaryTreeRightSideView,
};
