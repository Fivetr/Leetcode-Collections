import assert from "assert";
import { Problem } from "@/types/index";
import { createCycleList, Node } from "@/data_structure/linked_list";
import img1 from "./images/cycle1.png";
import img2 from "./images/cycle2.png";
import img3 from "./images/cycle3.png";

const problemStatement = `
<p class='mt-4'>
Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.
</p>
<p class='mt-4'>
There is a cycle in a linked list if there is some node in the list that can be reached 
again by continuously following the next pointer. Internally, <code>pos</code> is used to denote the 
index of the node that tail's <code>next</code> pointer is connected to. <strong>Note that <code>pos</code> is not passed 
as a parameter</strong>.
</p>
<p class='mt-4'>
Return <code>true</code> <em>if there is a cycle in the linked list.</em> Otherwise, return <code>false</code>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "head = [3,2,0,-4], pos = 1",
    outputText: "true",
    img: img1.src,
    img_size: 300,
    explanation:
      "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).",
  },
  {
    id: 2,
    inputText: "head = [1,2], pos = 0",
    outputText: "true",
    img: img2.src,
    img_size: 160,
    explanation:
      "There is a cycle in the linked list, where the tail connects to the 0th node.",
  },
  {
    id: 3,
    inputText: "head = [1], pos = -1",
    outputText: "false",
    img: img3.src,
    img_size: 60,
    explanation: "There is no cycle in the linked list.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
The number of nodes in both lists is in the range <code>[0, 10<sup>4</sup>]</code>.
</li> 
<li class='mt-3 text-sm'>
<code>-10<sup>5</sup> ≤ Node.val ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>pos</code> is <code>-1</code> or a <strong>valid index</strong> in the linked-list.
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
var hasCycle = function(head) {
  // Write your code here
};`;

const solution = {
  solution: `var hasCycle = function(head) {
  let rabbit = head, tortoise = head;
  while (rabbit && rabbit.next) {
    rabbit = rabbit.next.next;
    tortoise = tortoise.next;
    if (rabbit === tortoise) {
      return true;
    }
  }
  return false
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_LinkedListCycle = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const heads = [[3, 2, 0, -4], [1, 2], [1]];
    const pos = [1, 0, -1];
    const answers = [true, true, false];
    let node = Node;

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < heads.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const list1 = createCycleList(heads[i], pos[i]);
      const result = fn(list1.head, node);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("LinkedListCycle handler function error");
    throw new Error(error);
  }
};

export const LinkedListCycle: Problem = {
  order: 3,
  id: "linked-list-cycle",
  title: "Linked List Cycle",
  difficulty: "Easy",
  category: "Linked List",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "hasCycle(head)",
  extraParams: "hasCycle(head, Node)",
  handlerFunction: handle_LinkedListCycle,
};
