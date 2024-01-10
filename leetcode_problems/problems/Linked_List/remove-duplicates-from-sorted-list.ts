import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/remove_duplicate_1.png";
import img2 from "./images/remove_duplicate_2.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>head</code> of a sorted linked list, <em>delete all duplicates such that each element 
appears only once</em>. Return the linked list <strong>sorted</strong> as well.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "head = [1,1,2]",
    outputText: "[1,2]",
    img: img1.src,
    img_size: 300,
  },
  {
    id: 2,
    inputText: "head = [1,1,2,3,3]",
    outputText: "[1,2,3]",
    img: img2.src,
    img_size: 500,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in both lists is in the range <code>[0, 300]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-100 ≤ Node.val  ≤ 100</code>
</li> 
<li class='mt-3 text-sm'>
The list is guaranteed to be <strong>sorted</strong> in ascending order.
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
var deleteDuplicates = function(head) {
  // Write your code here
};`;

const solution = {
  solution: `var deleteDuplicates = function(head) {
    let current = head
    while(current){
        while(current.next && current.next.val == current.val){
            current.next = current.next.next
        }
        current = current.next
    }
    return head
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_RemoveDuplicatesFromSortedList = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const list1s = [
      [1, 1, 2],
      [1, 1, 2, 3, 3],
    ];
    const answers = [
      [1, 2],
      [1, 2, 3],
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
    console.log("RemoveDuplicatesFromSortedList handler function error");
    throw new Error(error);
  }
};

export const RemoveDuplicatesFromSortedList: Problem = {
  order: 6,
  id: "remove-duplicates-from-sorted-list",
  title: "Remove Duplicates From Sorted List",
  difficulty: "Easy",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "deleteDuplicates(head)",
  extraParams: "deleteDuplicates(head, Node)",
  handlerFunction: handle_RemoveDuplicatesFromSortedList,
};
