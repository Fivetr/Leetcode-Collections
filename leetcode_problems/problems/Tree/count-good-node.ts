import { TreeNode, bfs, insertLevelOrder } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/countgood1.png";
import img2 from "./images/countgood2.png";

const problemStatement = `
<p class='mt-4'>
Given a binary tree <code>root</code>, a node <em>X</em> in the tree is named <strong>good</strong> if in the path from 
root to <em>X</em> there are no nodes with a value <em>greater than</em> X.
</p>
<p class='mt-4'>
Return the number of <strong>good</strong> nodes in the binary tree.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "root = [3,1,4,3,null,1,5]",
    outputText: "4",
    img: img1.src,
    img_size: 250,
    explanation:
      "Nodes in blue are good.\nRoot Node (3) is always a good node.\nNode 4 -> (3,4) is the maximum value in the path starting from the root.\nNode 5 -> (3,4,5) is the maximum value in the path\nNode 3 -> (3,1,3) is the maximum value in the path.",
  },
  {
    id: 2,
    inputText: "root = [3,3,null,4,2]",
    outputText: "3",
    img: img2.src,
    img_size: 155,
    explanation: `Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.`,
  },
  {
    id: 3,
    inputText: "root = [1]",
    outputText: "1",
    explanation: "Root is considered as good.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the binary tree is in the range <code>[1, 10<sup>5</sup>]</code>.
</li> 
<li class='mt-3 text-sm'>
Each node's value is between <code>[-10<sup>4</sup>, 10<sup>4</sup>]</code>.
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
var goodNodes = function(root) {
    
};`;

const solution = {
  solution: `var goodNodes = function(root) {
  let count = 0;
  function dfs(root, max) {
    if (root == null)
      return;
    if (root.val >= max) {
      max = root.val;
      count++;
    }
    dfs(root.left, max);
    dfs(root.right, max);
  }
  dfs(root, root.val);
  return count;
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_countGoodNodes = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const root = [[3, 1, 4, 3, null, 1, 5], [3, 3, null, 4, 2], [1]];
    const answers = [4, 3, 1];
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
    console.log("countGoodNodes handler function error");
    throw new Error(error);
  }
};

export const countGoodNodes: Problem = {
  order: 10,
  id: "count-good-nodes-in-binary-tree",
  title: "Count Good Nodes in Binary Tree",
  difficulty: "Medium",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "goodNodes(root)",
  extraParams: "goodNodes(root, TreeNode)",
  handlerFunction: handle_countGoodNodes,
};
