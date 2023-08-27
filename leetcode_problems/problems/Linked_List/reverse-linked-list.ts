import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/reverse_list1.jpg";
import img2 from "./images/reverse_list2.jpg";

const problemStatement = `
<p class='mt-4'>
Given the <code>head</code> of a singly linked list, reverse the list, and return the <em>reversed list</em>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "head = [1,2,3,4,5]",
    outputText: "[5,4,3,2,1]",
    img: img1.src,
    img_size: 500,
  },
  {
    id: 2,
    inputText: "head = [1,2]",
    outputText: "[2,1]",
    img: img2.src,
    img_size: 150,
  },
  {
    id: 3,
    inputText: "head = []",
    outputText: "[]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the list is the range <code>[0, 5000]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-5000 ≤ Node.val ≤ 5000</code>
</li> 
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
var reverseList = function(head) {
  // Write your code here
};`;

const solution = {
  solution: `var reverseList = function(head) {
  let current = head;
  let prev = null;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_reverseList = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const lists = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3], [1]];
    const answers = [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [3, 2, 1], [1]];
    let node = Node;
    // loop all tests to check if the user's code is correct
    for (let i = 0; i < lists.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const list = createLinkedList(lists[i]);
      const result = fn(list.head, node);
      assert.deepStrictEqual(getListValues(result), answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("reverseList handler function error");
    throw new Error(error);
  }
};

export const ReverseLinkedList: Problem = {
  order: 1,
  id: "reverse-linked-list",
  title: "Reverse Linked List",
  difficulty: "Easy",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "reverseList(head)",
  extraParams: "reverseList(head, Node)",
  handlerFunction: handle_reverseList,
};
