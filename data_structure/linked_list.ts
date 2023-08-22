export class Node {
  public val: number | null;
  public next: Node | null;

  constructor(value: number | null) {
    this.val = value;
    this.next = null;
  }
}

export class LinkedList {
  head: Node | null;
  tail: Node | null;

  constructor(value: number | null) {
    if (value === null) {
      this.head = null;
      this.tail = null;
      return;
    }
    const node: Node = new Node(value);
    this.head = node;
    this.tail = node;
  }
  public append(value: number): Node | null {
    const node: Node = new Node(value);
    if (this.head !== null && this.tail !== null) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    return node;
  }
}

export function createLinkedList(values: number[]): LinkedList {
  const head = new LinkedList(values[0]);
  for (let i = 1; i < values.length; i++) {
    head.append(values[i]);
  }
  return head;
}

export function getListValues(list: Node | null): (number | null)[] {
  const values = [];
  let current: Node | null = list;
  while (current !== null) {
    if (current.val !== undefined) {
      values.push(current.val);
    }
    current = current.next;
  }
  return values;
}

// const cb =
//   new Function(`return function lastStoneWeight(stones, MaxPriorityQueue) {
//   // Write your code here
//   const queue = new MaxPriorityQueue();

//   for (let stone of stones) queue.enqueue(stone)
//     console.log(queue)
//     while (queue.size() > 1) {
//         let first = queue.dequeue().element;
//         let second = queue.dequeue().element;
//         if (first !== second) queue.enqueue(first-second)
//         console.log(queue)
//     }
//     return queue.size() === 0 ? 0 : queue.front().element
// };`)();

// const handle_LastStoneWeight = (fn: any) => {
//   // fn is the callback that user's code is passed into
//   try {
//     const stones = [[2, 7, 4, 1, 8, 1], [1]];
//     const answers = [1, 1];
//     let maxPriorityQueue = MaxPriorityQueue;
//     // loop all tests to check if the user's code is correct
//     for (let i = 0; i < stones.length; i++) {
//       // result is the output of the user's function and answer is the expected output
//       const result = fn(stones[i], maxPriorityQueue);
//       console.log(result);
//     }
//     return true;
//   } catch (error: any) {
//     console.log("LastStoneWeight handler function error");
//     console.log(error);
//     throw new Error(error);
//   }
// };
// let maxPriorityQueue = MaxPriorityQueue;
// console.log(cb([2, 7, 4, 1, 8, 1], maxPriorityQueue));

// import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
// function test(stones: any) {
//   // Write your code here
//   const queue = new MaxPriorityQueue<any>();

//   for (let stone of stones) queue.enqueue(stone);
//   console.log(queue);

//   while (queue.size() > 1) {
//     let first = queue.dequeue();
//     let second = queue.dequeue();
//     console.log(queue);
//     if (first !== second) queue.enqueue(first - second);
//     console.log(queue);
//   }

//   return queue.size() === 0 ? 0 : queue.front();
// }

// console.log(test([2, 7, 4, 1, 8, 1]));

// import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
// let maxPriorityQueue = MaxPriorityQueue
// const cb = new Function(`return function(stones, MaxPriorityQueue){
//   function lastStoneWeight(stones, MaxPriorityQueue) {
//     // Write your code here
//     const queue = new MaxPriorityQueue();

//     for (let stone of stones) queue.enqueue(stone)
//       console.log(queue)
//       while (queue.size() > 1) {
//           let first = queue.dequeue();
//           let second = queue.dequeue();
//           if (first !== second) queue.enqueue(first-second)
//           console.log(queue)
//       }
//       return queue.size() === 0 ? 0 : queue.front()
//   }
//   return lastStoneWeight(stones, MaxPriorityQueue)
// }`)();

// console.log(cb([2, 7, 4, 1, 8, 1],maxPriorityQueue))
// let s = "lastStoneWeight(stones, MaxPriorityQueue)"
// console.log(s.slice(s.indexOf("(")))
