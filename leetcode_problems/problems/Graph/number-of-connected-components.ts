import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/number_of_connected_1.jpg";
import img2 from "./images/number_of_connected_2.jpg";

const problemStatement = `
<p class='mt-4'>
You have a graph of <code>n</code> nodes. You are given an integer <code>n</code> and 
an array <code>edges</code> where <code>edges[i] = [ai, bi]</code> indicates that there 
is an edge between <code>ai</code> and <code>bi</code> in the graph.
</p>
<p class='mt-4'>
Return <em>the number of connected components in the graph</em>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "n = 5, edges = [[0,1],[1,2],[3,4]]",
    outputText: "2",
    img: img1.src,
    img_size: 400,
  },
  {
    id: 2,
    inputText: "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]",
    outputText: "1",
    img: img2.src,
    img_size: 400,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ n ≤ 2000</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ edges.length ≤ 5000</code>
</li>  
<li class='mt-3 text-sm'>
<code>edges[i].length == 2</code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ ai ≤ bi ≤ n</code>
</li>  
<li class='mt-3 text-sm'>
<code>ai != bi</code>
</li>  
<li class='mt-3 text-sm'>
There are no repeated edges.
</li>  
`;

const starterCode = `/**
* @param {number} n
* @param {number[][]} edges
* @return {number}
*/
var countComponents = function(n, edges) {
  // Write your code here
};`;

const solution = {
  solution: `var countComponents = function(n, edges) {
  let arr = [];
  for (let i = 0; i < n; i++){
    arr.push(i);
  }
  for (let i= 0; i < edges.length; i++) {
    let root1 = findParent(arr, edges[i][0]); 
    let root2 = findParent(arr, edges[i][1]);
    if (root1 != root2) {
      arr[root1] = arr[root2];
			//Every connection we make we have 1 less component.
      n--;
    }
  }
  return n;
};

function findParent(arr, num) {
  let parent = arr[num];
  while (parent != num) {
    arr[num] = arr[parent];
    num = parent;
    parent = arr[parent];
    //set current to parent to improve next find run time.
    arr[num] = parent;
  }  
  return parent;
}
`,
  time_complexity: `V + E`,
  space_complexity: `V + E`,
};

// checks if the user has the correct code
const handle_countComponents = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const n = [5, 5];
    const edges = [
      [
        [0, 1],
        [1, 2],
        [3, 4],
      ],
      [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    ];

    const answers = [2, 1];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < n.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(n[i], edges[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log(error);
    console.log("countComponents handler function error");
    throw new Error(error);
  }
};

export const NumberOfConnectedComponentsInAnUndirectedGraph: Problem = {
  order: 9,
  id: "number-of-connected-components-in-an-undirected-graph",
  title: "Number of Connected Components In An Undirected Graph",
  difficulty: "Medium",
  category: "Graph",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "countComponents(n, edges)",
  handlerFunction: handle_countComponents,
};
