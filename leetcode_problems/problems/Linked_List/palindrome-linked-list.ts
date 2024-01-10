import assert from "assert";
import { Problem } from "@/types/index";
import {
  createLinkedList,
  getListValues,
  Node,
} from "@/data_structure/linked_list";
import img1 from "./images/palinfrome_1.png";
import img2 from "./images/palinfrome_2.png";

const problemStatement = `
<p class='mt-4'>
Given the <code>head</code> of a singly linked list, return <code>true</code> 
if it is a palindrome or <code>false</code> otherwise.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "head = [1,2,2,1]",
    outputText: "true",
    img: img1.src,
    img_size: 400,
  },
  {
    id: 2,
    inputText: "head = [1,2]",
    outputText: "false",
    img: img2.src,
    img_size: 170,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in both lists is in the range <code>[1, 10<sup>5</sup>]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>0 <= Node.val <= 9</code>
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // Write your code here
};`;

const solution = {
  solution: `var isPalindrome = function(head) {
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
    while(list1 && list2){
        if(list1.val !== list2.val) return false
        list1 = list1.next
        list2 = list2.next
    }
    return true
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_PalindromeLinkedList = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const list1s = [
      [1, 2, 2, 1],
      [1, 2],
    ];
    const answers = [true, false];
    let node = Node;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < list1s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const list1 = createLinkedList(list1s[i]);
      const result = fn(list1.head, node);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("PalindromeLinkedList handler function error");
    throw new Error(error);
  }
};

export const PalindromeLinkedList: Problem = {
  order: 7,
  id: "palindrome-linked-list",
  title: "Palindrome Linked List",
  difficulty: "Easy",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "isPalindrome(head)",
  extraParams: "isPalindrome(head, Node)",
  handlerFunction: handle_PalindromeLinkedList,
};
