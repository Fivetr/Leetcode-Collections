import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/valid-tree_1.jpg";
import img2 from "./images/valid-tree_2.jpg";

const problemStatement = `
<p class='mt-4'>
You have a graph of <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code>. 
You are given an integer n and a list of <code>edges</code> where <code>edges[i] = [ai, bi]</code> 
indicates that there is an undirected edge between nodes <code>ai</code> and <code>bi</code> in the graph.
</p>
<p class='mt-4'>
Return <code>true</code> <em>if the edges of the given graph make up a valid tree, and</em> <code>false</code> <em>otherwise</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]",
    outputText: "true",
    img: img1.src,
    img_size: 220,
  },
  {
    id: 2,
    inputText: "n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]",
    outputText: "false",
    img: img2.src,
    img_size: 400,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ 2000</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ edges.length ≤ 5000</code>
</li>  
<li class='mt-3 text-sm'>
<code>edges[i].length == 2</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ ai, bi ≤ n</code>
</li>  
<li class='mt-3 text-sm'>
<code>ai != bi</code>
</li>  
<li class='mt-3 text-sm'>
There are no self-loops or repeated edges.
</li>  
`;

const starterCode = `/**
* @param {number} n
* @param {number[][]} edges
* @return {boolean}
*/
var validTree = function(n, edges) {
  // Write your code here
};`;

const solution = {
  solution: `var validTree = function(n, edges) {
  /** construct adjacency list **/
  const adjacencyList = new Map();
  for (let i = 0; i < n; i++) {
    adjacencyList.set(i, []);
  }
  // undirected graph must store edges both ways
  for (let edge of edges) {
    const u = edge[0];
    const v = edge[1];       
    adjacencyList.get(u).push(v);
    adjacencyList.get(v).push(u);
  } 
  const visited = new Set();

  function hasCycle(curr, parent) {
    // mark current node as visited
    visited.add(curr);
    /** explore neighbors via dfs**/
    for (let neighbor of adjacencyList.get(curr)) {
      // havent seen this node before
      if (!visited.has(neighbor)) {
      //lets see if non explored node has a cycle, if it does we exit the recursion
      if (hasCycle(neighbor, curr)) return true;
      } else {
        //we've seen this neighbor before, it has to be its parent, or else we got a cycle
        if (neighbor !== parent) return true;
      }
    }
    return false;
  }

  if (hasCycle(0, -1)) {
    return false;
  } 
  /**
  * do we have unconnected components?
  * at this point we should have seen all the nodes by DFS traversal
  * if there are nodes that aren't visited, theres an unconnected component
  **/
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      return false;
    }
  }    
  return true;
};`,
  time_complexity: `V + E`,
  space_complexity: `V + E`,
};

// checks if the user has the correct code
const handle_GraphValidTree = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const n = [5, 5];
    const edges = [
      [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 4],
      ],
      [
        [0, 1],
        [1, 2],
        [2, 3],
        [1, 3],
        [1, 4],
      ],
    ];

    const answers = [true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < n.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(n[i], edges[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("GraphValidTree handler function error");
    throw new Error(error);
  }
};

export const GraphValidTree: Problem = {
  order: 10,
  id: "graph-valid-tree",
  title: "Graph Valid Tree",
  difficulty: "Medium",
  category: "Graph",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "validTree(n, edges)",
  handlerFunction: handle_GraphValidTree,
};
