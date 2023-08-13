import assert from "assert";
import { Problem } from "@/types/index";
import { createLinkedList, getListValues } from "@/data_structure/linked_list";
import img1 from "./images/merge_list.jpg";

const problemStatement = `
<p class='mt-4'>
You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.
</p>
<p class='mt-4'>
Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.
</p>
<p class='mt-4'>
Return <em>the head of the merged linked list</em>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "list1 = [1,2,4], list2 = [1,3,4]",
    outputText: "[1,1,2,3,4,4]",
    img: img1.src,
    img_size: 500,
  },
  {
    id: 2,
    inputText: "list1 = [], list2 = []",
    outputText: "[]",
  },
  {
    id: 3,
    inputText: "list1 = [], list2 = [0]",
    outputText: "[0]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in both lists is in the range <code>[0, 50]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-100 ≤ Node.val  ≤ 100</code>
</li> 
<li class='mt-3 text-sm'>
Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</code> order.
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
* @param {ListNode} list1
* @param {ListNode} list2
* @return {ListNode}
*/
function mergeTwoLists(list1, list2) {
  // Write your code here
};`;

const solution = {
  solution: `function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1.val <= list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
  } else {
      list2.next = mergeTwoLists(list1, list2.next);
      return list2
  }
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_mergeTwoLists = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const list1s = [[1, 2, 4], [], []];
    const list2s = [[1, 3, 4], [], [0]];
    const answers = [[1, 1, 2, 3, 4, 4], [], [0]];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < list1s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const list1 = createLinkedList(list1s[i]);
      const list2 = createLinkedList(list2s[i]);
      const result = fn(list1.head, list2.head);
      assert.deepStrictEqual(getListValues(result), answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("mergeTwoLists handler function error");
    throw new Error(error);
  }
};

export const MergeTwoSortedLists: Problem = {
  order: 2,
  id: "merge-two-sorted-lists",
  title: "Merge Two Sorted Lists",
  difficulty: "Easy",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "function mergeTwoLists(",
  handlerFunction: handle_mergeTwoLists,
};
