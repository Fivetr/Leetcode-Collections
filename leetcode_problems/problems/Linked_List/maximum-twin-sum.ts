import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/maximum_sum_1.png";
import img2 from "./images/maximum_sum_2.png";
import img3 from "./images/maximum_sum_3.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>head</code> of a singly linked list and two integers <code>left</code> and <code>right</code> where 
<code>left <= right</code>, reverse the nodes of the list from position <code>left</code> to position <code>right</code>, and return the reversed list.
</p>
<p class='mt-4'>
For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
</p>
<p class='mt-4'>
The <code>twin sum</code> is defined as the sum of a node and its twin.
</p>
<p class='mt-4'>
Given the <code>head</code> of a linked list with even length, return the <strong>maximum twin sum</strong> of the linked list.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "head = [5,4,2,1]",
    outputText: "6",
    img: img1.src,
    img_size: 300,
    explanation:
      "Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.\nThere are no other nodes with twins in the linked list.\nThus, the maximum twin sum of the linked list is 6. ",
  },
  {
    id: 2,
    inputText: "head = [4,2,2,3]",
    outputText: "7",
    img: img2.src,
    img_size: 300,
    explanation:
      "The nodes with twins present in this linked list are:\n- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.\n- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.\nThus, the maximum twin sum of the linked list is max(7, 4) = 7. ",
  },
  {
    id: 3,
    inputText: "head = [1,100000]",
    outputText: "100001",
    img: img3.src,
    img_size: 150,
    explanation:
      "There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the list is an even integer in the range <code>[2, 10<sup>5</sup>]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>1 <= Node.val <= 10<sup>5</sup></code>.
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
 * @return {number}
 */
var pairSum = function(head) {
  // Write your code here
};`;

const solution = {
  solution: `var pairSum = function(head) {
    let slow = head, fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    let prev = null
    while(slow){
        let temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }
    let list1 = head, list2 = prev
    let res = 0
    while(list2){
        res = Math.max(res, list1.val + list2.val)
        list1 = list1.next
        list2 = list2.next
    }
    return res
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_reverseList = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const lists = [
      [5, 4, 2, 1],
      [4, 2, 2, 3],
      [1, 100000],
    ];
    const answers = [6, 7, 100001];
    let node = Node;
    // loop all tests to check if the user's code is correct
    for (let i = 0; i < lists.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const list = createLinkedList(lists[i]);
      const result = fn(list.head, node);
      console.log(result);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("reverseList handler function error");
    throw new Error(error);
  }
};

export const MaximumTwinSumofALinkedList: Problem = {
  order: 15,
  id: "maximum-twin-sum-of-a-linked-list",
  title: "Maximum Twin Sum of a Linked List",
  difficulty: "Medium",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "pairSum(head)",
  extraParams: "pairSum(head, Node)",
  handlerFunction: handle_reverseList,
};
