import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/rotate_1.png";
import img2 from "./images/rotate_2.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>head</code> of a linked list, rotate the list to the right by <code>k</code> places.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "head = [1,2,3,4,5], k = 2",
    outputText: "[4,5,1,2,3]",
    img: img1.src,
    img_size: 500,
  },
  {
    id: 2,
    inputText: "head = [0,1,2], k = 4",
    outputText: "[2,0,1]",
    img: img2.src,
    img_size: 300,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the list is in the range <code>[0, 500]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-100 <= Node.val <= 100</code>.
</li> 
<li class='mt-3 text-sm'>
<code>0 <= k <= 2 * 10<sup>9</sup></code>
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  // Write your code here
};`;

const solution = {
  solution: `var rotateRight = function(head, k) {
    if(!head) return head
    let length = 1
    let tail = head
    while(tail.next){
        length++
        tail = tail.next
    }
    k = k % length
    if(k== 0) return head
    let current = head
    for(let i = 0; i < length - k - 1; i++){
        current = current.next
    }
    let newHead = current.next
    current.next = null
    tail.next = head
    return newHead
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_reverseList = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const lists = [
      [1, 2, 3, 4, 5],
      [0, 1, 2],
    ];
    const k = [2, 4];
    const answers = [
      [4, 5, 1, 2, 3],
      [2, 0, 1],
    ];
    let node = Node;
    // loop all tests to check if the user's code is correct
    for (let i = 0; i < lists.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const list = createLinkedList(lists[i]);
      const result = fn(list.head, k[i], node);
      assert.deepStrictEqual(getListValues(result), answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("reverseList handler function error");
    throw new Error(error);
  }
};

export const RotateList: Problem = {
  order: 12,
  id: "rotate-list",
  title: "Rotate List",
  difficulty: "Medium",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "rotateRight(head, k)",
  extraParams: "rotateRight(head, k, Node)",
  handlerFunction: handle_reverseList,
};
