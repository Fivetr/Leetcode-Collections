import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/middle_1.png";
import img2 from "./images/middle_2.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>head</code> of a singly linked list, return the middle node of the linked list.</p>
<p class='mt-4'>
If there are two middle nodes, return <strong>the second middle</strong> node.</p>
`;

const examples = [
  {
    id: 1,
    inputText: "head = [1,2,3,4,5]",
    outputText: "[3,4,5]",
    explanation: "The middle node of the list is node 3.",
    img: img1.src,
    img_size: 500,
  },
  {
    id: 2,
    inputText: "head = [1,2,3,4,5,6]",
    outputText: "[4,5,6]",
    explanation:
      " Since the list has two middle nodes with values 3 and 4, we return the second one.",
    img: img2.src,
    img_size: 600,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in both lists is in the range <code>[1, 100]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>1 <= Node.val <= 100</code>
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  // Write your code here
};`;

const solution = {
  solution: `var middleNode = function(head) {
    let slow = head, fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_MiddleOfTheLinkedList = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const list1s = [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5, 6],
    ];

    const answers = [
      [3, 4, 5],
      [4, 5, 6],
    ];
    let node = Node;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < list1s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const list1 = createLinkedList(list1s[i]);

      const result = fn(list1.head, node);
      console.log(getListValues(result));
      assert.deepStrictEqual(getListValues(result), answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("MiddleOfTheLinkedList handler function error");
    throw new Error(error);
  }
};

export const MiddleOfTheLinkedList: Problem = {
  order: 4,
  id: "middle-of-the-linked-list",
  title: "Middle of the Linked List",
  difficulty: "Easy",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "middleNode(head)",
  extraParams: "middleNode(head, Node)",
  handlerFunction: handle_MiddleOfTheLinkedList,
};
