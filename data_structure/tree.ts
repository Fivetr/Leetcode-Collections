export class TreeNode {
  public val: number | null;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(value: number) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySeachTree {
  public root: TreeNode | null;
  constructor() {
    this.root = null;
  }
  public insert(value: number) {
    var newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value === current.val) return undefined;

      if (current.val !== null && value < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

export function bfs(node: TreeNode | null) {
  if (node === null || node === undefined) return [];
  const queue = [];
  const result = [];
  queue.push(node);

  while (queue.length > 0) {
    const tempNode = queue?.shift();
    result.push(tempNode?.val);

    if (tempNode?.left) {
      queue.push(tempNode.left);
    }

    if (tempNode?.right) {
      queue.push(tempNode.right);
    }
  }

  return result;
}

export function createBinarySearchTree(list: any) {
  if (list === null) return null;
  const tree = new BinarySeachTree();
  for (let i = 0; i < list.length; i++) {
    tree.insert(list[i]);
  }
  return tree;
}

export function insertLevelOrder(arr: any, i: number) {
  let root = null;
  if (i < arr.length) {
    root = new TreeNode(arr[i]);
    root.left = insertLevelOrder(arr, 2 * i + 1);
    root.right = insertLevelOrder(arr, 2 * i + 2);
  }
  return root;
}
