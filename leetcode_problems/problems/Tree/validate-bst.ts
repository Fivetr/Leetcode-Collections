import { TreeNode, insertLevelOrder } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/validate1.png";
import img2 from "./images/validate2.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>root</code> of a binary tree, <em>determine if it is a valid binary search tree (BST)</em>.
</p>
<p class='mt-4'>
A <strong>valid BST</strong> is defined as follows:
</p>
<p class='mt-4'>
The left subtree of a node contains only nodes with keys <strong>less than</strong> the node's key.
</p>
<p class='mt-4'>
The right subtree of a node contains only nodes with keys <strong>greater than</strong> the node's key.
</p>
<p class='mt-4'>
Both the left and right subtrees must also be binary search trees.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "root = [2,1,3]",
    outputText: "true",
    img: img1.src,
    img_size: 300,
  },
  {
    id: 2,
    inputText: "root = [5,1,4,null,null,3,6]",
    outputText: "false",
    img: img2.src,
    img_size: 370,
    explanation: "The root node's value is 5 but its right child's value is 4.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-2<sup>31</sup>  ≤ Node.val ≤ 2<sup>31</sup> - 1 </code>
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
};`;

const solution = {
  solution: `var isValidBST = function (root) {
  return validate(root, -Infinity, Infinity);
};
  
var validate = function (node, lower, upper) {
  if (node === null) {
    // empty node or empty tree
    return true;
  }
  if (lower < node.val && node.val < upper) {
    // check if all tree nodes follow BST rule
    return (
      validate(node.left, lower, node.val) &&
      validate(node.right, node.val, upper)
    );
  } else {
    // early reject when we find violation
    return false;
  }
};
`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_ValidateBST = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const root = [
      [2, 1, 3],
      [5, 1, 4, null, null, 3, 6],
    ];
    const answers = [true, false];
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
    console.log("ValidateBST handler function error");
    throw new Error(error);
  }
};

export const ValidateBST: Problem = {
  order: 11,
  id: "validate-binary-search-tree",
  title: "Validate Binary Search Tree",
  difficulty: "Medium",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "isValidBST(root)",
  extraParams: "isValidBST(root, TreeNode)",
  handlerFunction: handle_ValidateBST,
};
