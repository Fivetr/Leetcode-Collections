import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/delete_mid_1.png";
import img2 from "./images/delete_mid_2.png";
import img3 from "./images/delete_mid_3.png";

const problemStatement = `
<p class='mt-4'>
You are given the head of a linked list. <code>Delete</code> the <strong>middle node</strong>, and return the <code>head</code> of the modified linked list.
</p>
<p class='mt-4'>
The <code>middle node</code> of a linked list of <strong>size</strong> n is the <code>⌊n / 2⌋<sup>th</sup></code> 
node from the start using <strong>0-based indexing</strong>, where ⌊x⌋ denotes the largest integer less than or equal to x.
</p>
<p class='mt-4'>
For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "head = [1,3,4,7,1,2,6]",
    outputText: "[1,3,4,1,2,6]",
    img: img1.src,
    img_size: 500,
    explanation:
      "The above figure represents the given linked list. The indices of the nodes are written below.\nSince n = 7, node 3 with value 7 is the middle node, which is marked in red.\nWe return the new list after removing this node. ",
  },
  {
    id: 2,
    inputText: "head = [1,2,3,4]",
    outputText: "[1,2,4]",
    img: img2.src,
    img_size: 300,
    explanation:
      "The above figure represents the given linked list.\nFor n = 4, node 2 with value 3 is the middle node, which is marked in red.",
  },
  {
    id: 3,
    inputText: "head = [2,1]",
    outputText: "[2]",
    img: img3.src,
    img_size: 150,
    explanation:
      "The above figure represents the given linked list.\nFor n = 2, node 1 with value 1 is the middle node, which is marked in red.\nNode 0 with value 2 is the only node remaining after removing node 1.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the list is in the range <code>[1, 10<sup>5</sup>]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>1 <= Node.val <= 10<sup>5</sup></code>
`;

const starterCode = `/**
* Definition for singly-linked list.
* export class Node {
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
  // Write your code here
};`;

const solution = {
  solution: `var deleteMiddle = function(head) {
    const dummy = new Node(null)
    dummy.next = head
    let prev_slow = dummy
    let fast = head;
    while(fast && fast.next){
        prev_slow = prev_slow.next;
        fast = fast.next.next;
    }
    if (prev_slow.val){
        prev_slow.next =prev_slow.next.next;
    }
    else return null
    return head;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_reverseList = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const lists = [
      [1, 3, 4, 7, 1, 2, 6],
      [1, 2, 3, 4],
      [2, 1],
    ];
    const answers = [[1, 3, 4, 1, 2, 6], [1, 2, 4], [2]];
    let node = Node;
    // loop all tests to check if the user's code is correct
    for (let i = 0; i < lists.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const list = createLinkedList(lists[i]);
      const result = fn(list.head, node);
      console.log(getListValues(result));
      assert.deepStrictEqual(getListValues(result), answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("reverseList handler function error");
    throw new Error(error);
  }
};

export const DeletetheMiddleNodeofALinkedList: Problem = {
  order: 14,
  id: "delete-the-middle-node-of-a-linked-list",
  title: "Delete the Middle Node of a Linked List",
  difficulty: "Medium",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "deleteMiddle(head)",
  extraParams: "deleteMiddle(head, Node)",
  handlerFunction: handle_reverseList,
};
