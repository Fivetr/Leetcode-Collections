import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/remove_element_1.png";

const problemStatement = `
<p class='mt-4'>
Given the head of a linked list and an integer <code>val</code>, remove all the 
nodes of the linked list that has <coed>Node.val == val</code>, and return the <em>new head</em>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "head = [1,2,6,3,4,5,6], val = 6",
    outputText: "[1,2,3,4,5]",
    img: img1.src,
    img_size: 500,
  },
  {
    id: 2,
    inputText: "head = [], val = 1",
    outputText: "[]",
  },
  {
    id: 3,
    inputText: "head = [7,7,7,7], val = 7",
    outputText: "[]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in both lists is in the range <code>[0, 10<sup>4</sup>]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>1 <= Node.val <= 50</code>
</li> 
<li class='mt-3 text-sm'>
<code>0 <= val <= 50</code>
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // Write your code here
};`;

const solution = {
  solution: `var removeElements = function(head, val) {
    let dummy = new Node(null)
    dummy.next = head
    let prev = dummy
    let current = head
    while(current){
        if(current.val == val) prev.next = current.next
        else prev = current
        current = current.next
    }
    return dummy.next
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_mergeTwoLists = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const list1s = [[1, 2, 6, 3, 4, 5, 6], [], [7, 7, 7, 7]];
    const vals = [6, 1, 7];
    const answers = [[1, 2, 3, 4, 5], [], []];
    let node = Node;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < list1s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const list1 = createLinkedList(list1s[i]);
      const result = fn(list1.head, vals[i], node);
      console.log(getListValues(result));
      assert.deepStrictEqual(getListValues(result), answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("mergeTwoLists handler function error");
    throw new Error(error);
  }
};

export const RemoveLinkedListElement: Problem = {
  order: 5,
  id: "remove-linked-list-element",
  title: "Remove Linked List Element",
  difficulty: "Easy",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "removeElements(head, val)",
  extraParams: "removeElements(head, val, Node)",
  handlerFunction: handle_mergeTwoLists,
};
