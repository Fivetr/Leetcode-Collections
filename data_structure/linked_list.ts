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

  public insert(node: any) {
    if (this.head !== null && this.tail !== null) {
      this.tail.next = node;
    }
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

export function createCycleList(values: number[], pos: number): LinkedList {
  const head = new LinkedList(values[0]);
  let node;
  for (let i = 0; i < values.length; i++) {
    const currentNode = head.append(values[i]);
    if (i === pos) {
      node = currentNode;
    }
  }
  if (pos === -1) return head;
  head.insert(node);
  return head;
}
