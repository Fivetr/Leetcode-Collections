import { TreeNode, insertLevelOrder, SearchNode } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/lowestcommon1.png";
import img2 from "./images/lowestcommon2.png";

const problemStatement = `
<p class='mt-4'>
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
</p>
<p class='mt-4'>
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined 
between two nodes <code>p</code> and <code>q</code> as the lowest node in <code>T</code> that has both <code>p</code> and <code>q</code> as descendants 
(where we allow <strong>a node to be a descendant of itself</strong>)."</p>
`;

const examples = [
  {
    id: 1,
    inputText: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
    outputText: "6",
    img: img1.src,
    img_size: 200,
    explanation: "The LCA of nodes 2 and 8 is 6.",
  },
  {
    id: 2,
    inputText: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
    outputText: "2",
    img: img2.src,
    img_size: 200,
    explanation:
      "The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.",
  },
  {
    id: 3,
    inputText: "root = [2,1], p = 2, q = 1",
    outputText: "2",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the tree is in the range <code>[2, 10<sup>5</sup>]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>9</sup> ≤ Node.val ≤ 10<sup>5</sup> </code>
</li> 
<li class='mt-3 text-sm'>
All <code>Node.val</code> are <strong>unique</strong>.
</li> 
<li class='mt-3 text-sm'>
<code>p != q</code>
</li> 
<li class='mt-3 text-sm'>
<code>p</code> and <code>q</code> will exist in the BST.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
};`;

const solution = {
  solution: `var lowestCommonAncestor = function(root, p, q) {
  if(root.val > p.val && root.val < q.val){
    return root;
  }
  else if(root.val > p.val && root.val > q.val){
    return lowestCommonAncestor(root.left, p, q);
  }
  else if(root.val < p.val && root.val < q.val){
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};`,
  time_complexity: `logn`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_LowestCommonAncestor = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const root = [
      [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
      [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
      [2, 1],
    ];
    const p = [2, 2, 2];
    const q = [8, 4, 1];

    const answers = [6, 2, 2];
    let node = TreeNode;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < root.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const root_ = insertLevelOrder(root[i], 0);
      const p_ = SearchNode(root_, p[i]);
      const q_ = SearchNode(root_, q[i]);
      const result = fn(root_, p_, q_, node);
      console.log(result);
      assert.deepStrictEqual(result.val, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("LowestCommonAncestor handler function error");
    throw new Error(error);
  }
};

export const LowestCommonAncestor: Problem = {
  order: 7,
  id: "lowest-common-ancestor-of-a-binary-search-tree",
  title: "Lowest Common Ancestor of a Binary Search Tree",
  difficulty: "Medium",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "lowestCommonAncestor(root, p, q)",
  extraParams: "lowestCommonAncestor(root, p, q, TreeNode)",
  handlerFunction: handle_LowestCommonAncestor,
};
