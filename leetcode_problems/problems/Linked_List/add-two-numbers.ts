import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/add.png";

const problemStatement = `
<p class='mt-4'>
You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. 
The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
</p>
<p class='mt-4'>
You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>
`;

const examples = [
  {
    id: 1,
    inputText: "l1 = [2,4,3], l2 = [5,6,4]",
    outputText: "[7,0,8]",
    img: img1.src,
    img_size: 450,
    explanation: "342 + 465 = 807.",
  },
  {
    id: 2,
    inputText: "l1 = [0], l2 = [0]",
    outputText: "[0]",
  },
  {
    id: 3,
    inputText: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
    outputText: "[8,9,9,9,0,0,0,1]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li> 
<li class='mt-3 text-sm'>
<code>0 ≤ Node.val ≤ 9</code>
</li> 
<li class='mt-3 text-sm'>
<code>It is guaranteed that the list represents a number that does not have leading zeros.</code>
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // Write your code here
};`;

const solution = {
  solution: `var addTwoNumbers = function(l1, l2) {
  var List = new Node(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while(l1!==null||l2!==null||sum>0){
    if(l1!==null){
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if(l2!==null){
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if(sum>=10){
      carry = 1;
      sum = sum - 10;
    }
    head.next = new Node(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }
  return List.next;
};`,
  time_complexity: `max(n,m)`,
  space_complexity: `max(n,m)`,
};

// checks if the user has the correct code
const handle_AddTwoNumbers = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const l1 = [[2, 4, 3], [0], [9, 9, 9, 9, 9, 9, 9]];
    const l2 = [[5, 6, 4], [0], [9, 9, 9, 9]];
    const answers = [[7, 0, 8], [0], [8, 9, 9, 9, 0, 0, 0, 1]];
    let node = Node;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < l1.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const list1 = createLinkedList(l1[i]);
      const list2 = createLinkedList(l2[i]);
      const result = fn(list1.head, list2.head, node);
      console.log(getListValues(result));
      assert.deepStrictEqual(getListValues(result), answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("AddTwoNumbers handler function error");
    throw new Error(error);
  }
};

export const AddTwoNumbers: Problem = {
  order: 9,
  id: "add-two-numbers",
  title: "Add Two Numbers",
  difficulty: "Medium",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "addTwoNumbers(l1, l2)",
  extraParams: "addTwoNumbers(l1, l2, Node)",
  handlerFunction: handle_AddTwoNumbers,
};
