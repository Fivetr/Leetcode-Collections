import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/odd_even_1.png";
import img2 from "./images/odd_even_2.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>head</code> of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
</p>
<p class='mt-4'>
The <strong>first</strong> node is considered <strong>odd</strong>, and the <strong>second</strong> node is <Strong>even</strong>, and so on.
</p>
<p class='mt-4'>
Note that the relative order inside both the even and odd groups should remain as it was in the input.
</p>
<p class='mt-4'>
You must solve the problem in <code>O(1)</code> extra space complexity and <code>O(n)</code> time complexity.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "head = [1,2,3,4,5]",
    outputText: "[1,3,5,2,4]",
    img: img1.src,
    img_size: 400,
  },
  {
    id: 2,
    inputText: "head = [2,1,3,5,6,4,7]",
    outputText: "[2,3,6,7,1,5,4]",
    img: img2.src,
    img_size: 450,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in the linked list is in the range <code>[0, 10<sup>4</sup>]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>6</sup> <= Node.val <= 10<sup>6</sup>/code>.
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
var oddEvenList = function(head) {
  // Write your code here
};`;

const solution = {
  solution: `var oddEvenList = function(head) {
    let oddList = new Node(null)
    let evenList = new Node(null)
    let even = evenList, odd = oddList
    let current = head
    let count = 1
    while(current){
        if(count%2 == 0){
            even.next = current
            even = even.next
        }
        else{
            odd.next = current
            odd = odd.next
        }
        current = current.next
        count++
    }
    even.next = null
    odd.next = evenList.next
    return oddList.next
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
      [2, 1, 3, 5, 6, 4, 7],
    ];
    const answers = [
      [1, 3, 5, 2, 4],
      [2, 3, 6, 7, 1, 5, 4],
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
    console.log("reverseList handler function error");
    throw new Error(error);
  }
};

export const OddEvenList: Problem = {
  order: 16,
  id: "odd-even-linked-list",
  title: "Odd Even Linked List",
  difficulty: "Medium",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "oddEvenList(head)",
  extraParams: "oddEvenList(head, Node)",
  handlerFunction: handle_reverseList,
};
