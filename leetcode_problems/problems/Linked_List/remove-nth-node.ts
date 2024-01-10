import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/removenthlist.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>
`;

const examples = [
  {
    id: 1,
    inputText: "head = [1,2,3,4,5], n = 2",
    outputText: "[1,2,3,5]",
    img: img1.src,
    img_size: 450,
  },
  {
    id: 2,
    inputText: "head = [1], n = 1",
    outputText: "[]",
  },
  {
    id: 3,
    inputText: "head = [1,2], n = 1",
    outputText: "[1]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the list is <code>sz</code>.</li> 
<li class='mt-3 text-sm'>
<code>1 ≤ sz ≤ 30</code>
</li> 
<li class='mt-3 text-sm'>
<code>0 ≤ Node.val ≤ 100</code>
</li> 
<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ sz</code>
</li> 
`;

const starterCode = `/**
* Definition for singly-linked list.
* class Node {
*   public val: number | null;
*   public next: Node | null;
*
*   constructor(value: number | null) {
*     this.val = value;
*     this.next = null;
*   }
* }
*/

/**
* @param {ListNode} list1
* @param {ListNode} list2
* @return {ListNode}
*/
var removeNthFromEnd = function(head, n) {
  // Write your code here
};`;

const solution = {
  solution: `var removeNthFromEnd = function(head, n) {
  let fast = head, slow = head
  for (let i = 0; i < n; i++){
    fast = fast.next
  } 
  if (!fast){
    return head.next
  } 
  while (fast.next){
    fast = fast.next
    slow = slow.next
  } 
  slow.next = slow.next.next
  return head
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_RemoveNthNodeFromEndOfList = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const heads = [[1, 2, 3, 4, 5], [1], [1, 2]];
    const n = [2, 1, 1];
    const answers = [[1, 2, 3, 5], [], [1]];
    let node = Node;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < heads.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const list1 = createLinkedList(heads[i]);
      const result = fn(list1.head, n[i], node);
      assert.deepStrictEqual(getListValues(result), answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("RemoveNthNodeFromEndOfList handler function error");
    throw new Error(error);
  }
};

export const RemoveNthNodeFromEndOfList: Problem = {
  order: 8,
  id: "remove-nth-node-from-end-of-list",
  title: "Remove Nth Node From End of List",
  difficulty: "Medium",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "removeNthFromEnd(head, n)",
  extraParams: "removeNthFromEnd(head, n, Node)",
  handlerFunction: handle_RemoveNthNodeFromEndOfList,
};
