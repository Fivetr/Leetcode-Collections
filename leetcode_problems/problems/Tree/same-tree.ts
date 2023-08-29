import { TreeNode, insertLevelOrder } from "@/data_structure/tree";
import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/sametree1.png";
import img2 from "./images/sametree2.png";
import img3 from "./images/sametree3.png";

const problemStatement = `
<p class='mt-4'>
Given the roots of two binary trees <code>p</code> and <code>q</code>, write a function to check if they are the same or not.
</p>
<p class='mt-4'>
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "p = [1,2,3], q = [1,2,3]",
    outputText: "true",
    img: img1.src,
    img_size: 500,
  },
  {
    id: 2,
    inputText: "p = [1,2], q = [1,null,2]",
    outputText: "false",
    img: img2.src,
    img_size: 360,
  },
  {
    id: 3,
    inputText: "p = [1,2,1], q = [1,1,2]",
    outputText: "false",
    img: img3.src,
    img_size: 500,
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

**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q){
   
};`;

const solution = {
  solution: `var isSameTree = function(p, q) {
  if(!p && !q) return true;
  if(p&&!q || q&&!p) return false;
  if(p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_SameTree = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const q = [
      [1, 2, 3],
      [1, null, 2],
      [1, 1, 2],
    ];
    const p = [
      [1, 2, 3],
      [1, 2],
      [1, 2, 1],
    ];
    const answers = [true, false, false];
    let node = TreeNode;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < p.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const root_1 = insertLevelOrder(p[i], 0);
      const root_2 = insertLevelOrder(q[i], 0);
      const result = fn(root_1, root_2, node);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("SameTree handler function error");
    throw new Error(error);
  }
};

export const SameTree: Problem = {
  order: 5,
  id: "same-tree",
  title: "Same Tree",
  difficulty: "Easy",
  category: "Trees",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "isSameTree(p, q)",
  extraParams: "isSameTree(p, q, TreeNode)",
  handlerFunction: handle_SameTree,
};
