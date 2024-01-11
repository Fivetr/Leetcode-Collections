import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/remove2_1.png";
import img2 from "./images/remove2_2.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>head</code> of a sorted linked list, <em>delete all nodes that have duplicate numbers, 
leaving only distinct numbers from the original list</em>. Return the linked list sorted as well.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "head = [1,2,3,3,4,4,5]",
    outputText: " [1,2,5]",
    img: img1.src,
    img_size: 500,
  },
  {
    id: 2,
    inputText: "head = [1,1,1,2,3]",
    outputText: "[2,3]",
    img: img2.src,
    img_size: 500,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the list is in the range <code>[0, 300]</code>.
<li class='mt-3 text-sm'>
<code>-100 <= Node.val <= 100</code>.
</li> 
<li class='mt-3 text-sm'>
<code>The list is guaranteed to be <code>sorted</code> in ascending order.</code>
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
var deleteDuplicates = function(head) {
  // Write your code here
};`;

const solution = {
  solution: `var deleteDuplicates = function(head) {
    const dummy = new Node(null)
    dummy.next = head
    let ptr = dummy
    while(ptr.next && ptr.next.next){
        if(ptr.next.val == ptr.next.next.val){
            while(ptr.next && ptr.next.next && ptr.next.val == ptr.next.next.val){  
                ptr.next = ptr.next.next
            }
            ptr.next = ptr.next.next
        }
        else{
            ptr = ptr.next
        }
    }
    return dummy.next
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_RemoveDuplicatesFromSortedList2 = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const lists = [
      [1, 2, 3, 3, 4, 4, 5],
      [1, 1, 1, 2, 3],
    ];
    const answers = [
      [1, 2, 5],
      [2, 3],
    ];
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
    console.log("RemoveDuplicatesFromSortedList2 handler function error");
    throw new Error(error);
  }
};

export const RemoveDuplicatesFromSortedList2: Problem = {
  order: 13,
  id: "remove-duplicates-from-sorted-list-2",
  title: "Remove Duplicates from Sorted List II",
  difficulty: "Medium",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "deleteDuplicates(head)",
  extraParams: "deleteDuplicates(head, Node)",
  handlerFunction: handle_RemoveDuplicatesFromSortedList2,
};
