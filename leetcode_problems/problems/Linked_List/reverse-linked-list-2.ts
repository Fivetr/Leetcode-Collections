import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/reverse2_1.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>head</code> of a singly linked list and two integers <code>left</code> and <code>right</code> where 
<code>left <= right</code>, reverse the nodes of the list from position <code>left</code> to position <code>right</code>, and return the reversed list.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "head = [1,2,3,4,5], left = 2, right = 4",
    outputText: "[1,4,3,2,5]",
    img: img1.src,
    img_size: 500,
  },
  {
    id: 2,
    inputText: "head = [5], left = 1, right = 1",
    outputText: "[5]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the list is <code>n</code>.
</li> 
<li class='mt-3 text-sm'>
<code>1 <= n <= 500</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-500 <= Node.val <= 500</code>
</li> 
<li class='mt-3 text-sm'>
<code>1 <= left <= right <= n</code>
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  // Write your code here
};`;

const solution = {
  solution: `var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(null)
    dummy.next = head
    let left_prev = dummy
    for(let i = 0; i< left - 1; i++){
        left_prev= left_prev.next
    }
    let current = left_prev.next
    let prev = null
    for(let i = 0; i < right - left + 1; i++){
        temp = current.next
        current.next = prev
        prev = current
        current = temp
    }
    left_prev.next.next = current
    left_prev.next = prev
    return dummy.next
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_reverseList = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const lists = [[1, 2, 3, 4, 5], [5]];
    const left = [2, 1];
    const right = [4, 1];
    const answers = [[1, 4, 3, 2, 5], [5]];
    let node = Node;
    // loop all tests to check if the user's code is correct
    for (let i = 0; i < lists.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const list = createLinkedList(lists[i]);
      const result = fn(list.head, left[i], right[i], node);
      console.log(getListValues(result));
      assert.deepStrictEqual(getListValues(result), answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("reverseList handler function error");
    throw new Error(error);
  }
};

export const ReverseLinkedList2: Problem = {
  order: 11,
  id: "reverse-linked-list-2",
  title: "Reverse Linked List II",
  difficulty: "Medium",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "reverseBetween(head, left, right)",
  extraParams: "reverseBetween(head, left, right, Node)",
  handlerFunction: handle_reverseList,
};
