import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/redundant_1.jpg";
import img2 from "./images/redundant_2.jpg";

const problemStatement = `
<p class='mt-4'>
In this problem, a tree is an <strong>undirected graph</strong> that is connected and has no cycles.
</p>
<p class='mt-4'>
You are given a graph that started as a tree with n nodes labeled from <code>1</code> to <code>n</code>, with one 
additional edge added. The added edge has two <strong>different</strong> vertices 
chosen from <code>1</code> to <code>n</code>, and was not an edge that already existed. 
The graph is represented as an array <code>edges</code> of length n where 
<code>edges[i] = [ai, bi]</code> indicates that there is an edge between nodes <code>ai</code> and <code>bi</code> in the graph.
</p>
<p class='mt-4'>
Return <em>an edge that can be removed so that the resulting graph is a tree of <code>n</code> nodes</em>. 
If there are multiple answers, return the answer that occurs last in the input.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "edges = [[1,2],[1,3],[2,3]]",
    outputText: "[2,3]",
    img: img1.src,
    img_size: 220,
  },
  {
    id: 2,
    inputText: "edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]",
    outputText: "[1,4]",
    img: img2.src,
    img_size: 350,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>n == edges.length</code>
</li>  
<li class='mt-3 text-sm'>
<code>3 ≤ n ≤ 1000</code>
</li>  
<li class='mt-3 text-sm'>
<code>edges[i].length == 2</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ ai < bi ≤ edges.length</code>
</li>  
<li class='mt-3 text-sm'>
<code>ai != bi</code>
</li>  
<li class='mt-3 text-sm'>
There are no repeated edges.
</li>  
<li class='mt-3 text-sm'>
The given graph is connected.
</li>  
`;

const starterCode = `/**
* @param {number[][]} edges
* @return {number[]}
*/
var findRedundantConnection = function(edges) {
  // Write your code here
};`;

const solution = {
  solution: `var findRedundantConnection = function(edges) {
  let par = []
  for(let i=1;i<edges.length+1;i++){
    par[i]=i
  }
  let rank = new Array(edges.length+1).fill(1)
  //find
  function find(n){
    let p = par[n]
    while(par[p]!=p){
      par[p]=par[par[p]]
      p=par[p]
    }
    return p
  }
  //union
  function union(n1,n2){
    let p1 = find(n1)
    let p2 = find(n2)
    if(p1==p2) return false
    if(rank[p1]>rank[p2]){
      par[p2] = p1
      rank[p1]+=rank[p2]
    }else{
      par[p1] = p2
      rank[p2]+=rank[p1]
    }
    return true
  }
  for(let i=0;i<edges.length;i++){
    if(!union(edges[i][0],edges[i][1])) return [edges[i][0],edges[i][1]] 
  }
};`,
  time_complexity: `E * log(V)`,
  space_complexity: `V`,
};

// checks if the user has the correct code
const handle_RedundantConnection = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const edges = [
      [
        [1, 2],
        [1, 3],
        [2, 3],
      ],
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 4],
        [1, 5],
      ],
    ];

    const answers = [
      [2, 3],
      [1, 4],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < edges.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(edges[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("RedundantConnection handler function error");
    throw new Error(error);
  }
};

export const RedundantConnection: Problem = {
  order: 8,
  id: "redundant-connection",
  title: "Redundant Connection",
  difficulty: "Medium",
  category: "Graph",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "findRedundantConnection(edges)",
  handlerFunction: handle_RedundantConnection,
};
