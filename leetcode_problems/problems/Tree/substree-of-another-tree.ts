import { TreeNode, bfs, insertLevelOrder } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/subtree1.png";
import img2 from "./images/subtree2.png";

const problemStatement = `
<p class='mt-4'>
Given the roots of two binary trees <code>root</code> and <code>subRoot</code>, return 
<code>true</code> if there is a subtree of <code>root</code> with the same structure 
and node values of <code>subRoot</code> and <code>false</code> otherwise.
</p>
<p class='mt-4'>
A subtree of a binary tree <code>tree</code> is a tree that consists of a node in <code>tree</code> 
and all of this node's descendants. The tree <code>tree</code> could also be considered as a subtree of itself.</p>
`;

const examples = [
  {
    id: 1,
    inputText: "root = [3,4,5,1,2], subRoot = [4,1,2]",
    outputText: "true",
    img: img1.src,
    img_size: 500,
  },
  {
    id: 2,
    inputText: "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]",
    outputText: "false",
    img: img2.src,
    img_size: 500,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the <code>root</code> tree is in the range <code>[1, 2000]</code>.
</li> 
<li class='mt-3 text-sm'>
The number of nodes in the <code>subRoot</code> tree is in the range <code>[1, 1000]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup> ≤ root.val ≤ 10<sup>4</sup> </code>
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>4</sup>  ≤ subRoot.val ≤ 10<sup>4</sup> </code>
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
};`;

const solution = {
  solution: `var isSubtree = function(root, subRoot) {
  const areEqual = (node1, node2) => {
    if (!node1 || !node2) return !node1 && !node2;
    if (node1.val !== node2.val) return false;
    return areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right);
  }
  const dfs = (node) => {
    if (!node) return false;
    if (areEqual(node, subRoot)) return true;
    return dfs(node.left) || dfs(node.right);
  }
  return dfs(root);
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_SubtreeOfAnotherTree = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const root = [
      [3, 4, 5, 1, 2],
      [3, 4, 5, 1, 2, null, null, null, null, 0],
    ];
    const subRoot = [
      [4, 1, 2],
      [4, 1, 2],
    ];
    const answers = [true, false];
    let node = TreeNode;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < root.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const root_ = insertLevelOrder(root[i], 0);
      const root_2 = insertLevelOrder(subRoot[i], 0);
      const result = fn(root_, root_2, node);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("SubtreeOfAnotherTree handler function error");
    throw new Error(error);
  }
};

export const SubtreeOfAnotherTree: Problem = {
  order: 6,
  id: "subtree-of-another-tree",
  title: "Subtree of Another Tree",
  difficulty: "Easy",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "isSubtree(root, subRoot)",
  extraParams: "isSubtree(root, subRoot, TreeNode)",
  handlerFunction: handle_SubtreeOfAnotherTree,
};
