import { TreeNode, insertLevelOrder } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/kthSmallestelement1.png";
import img2 from "./images/kthSmallestelement2.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>root</code> of a binary search tree, and an integer <code>k</code>, return the <code>k<sup>th</sup></code> <em>smallest value 
<strong>(1-indexed)</strong> of all the values of the nodes in the tree</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "root = [3,1,4,null,2], k = 1",
    outputText: "1",
    img: img1.src,
    img_size: 210,
  },
  {
    id: 2,
    inputText: "root = [5,3,6,2,4,null,null,1], k = 3",
    outputText: "3",
    img: img2.src,
    img_size: 380,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the tree is <code>n</code>.
</li> 
<li class='mt-3 text-sm'>
<code>1 ≤ k ≤ n ≤ 10<sup>4</sup> </code>
</li> 
<li class='mt-3 text-sm'>
<code>0 ≤ Node.val ≤ 10<sup>4</sup> </code>
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
};`;

const solution = {
  solution: `var kthSmallest = function(root, k) {
  let n = 0
  let stack = []
  let current = root
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    n += 1
    if (n === k) return current.val
    current = current.right
  }
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_KthSmallestElementInBST = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const root = [
      [3, 1, 4, null, 2],
      [5, 3, 6, 2, 4, null, null, 1],
    ];
    const k = [1, 3];
    const answers = [1, 3];
    let node = TreeNode;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < root.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const root_ = insertLevelOrder(root[i], 0);
      const result = fn(root_, k[i], node);
      console.log(result);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("KthSmallestElementInBST handler function error");
    throw new Error(error);
  }
};

export const KthSmallestElementInBST: Problem = {
  order: 12,
  id: "kth-smallest-element-in-a-bst",
  title: "Kth Smallest Element in a BST",
  difficulty: "Medium",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "kthSmallest(root,k)",
  extraParams: "kthSmallest(root,k,TreeNode)",
  handlerFunction: handle_KthSmallestElementInBST,
};
