import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/word_search_1.jpg";
import img2 from "./images/word_search_2.jpg";
import img3 from "./images/word_search_3.jpg";

const problemStatement = `
<p class='mt-4'>
Given an <code>m x n</code> grid of characters <code>board</code> and a string <code>word</code>, 
return <code>true</code> <em>if</em> <code>word</code> <em>exists in the grid</em>.</p>
<p class='mt-4'>
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.</p>
`;

const examples = [
  {
    id: 1,
    inputText: `board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"`,
    outputText: "true",
    img: img1.src,
    img_size: 300,
  },
  {
    id: 2,
    inputText: `board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"`,
    outputText: "true",
    img: img2.src,
    img_size: 300,
  },
  {
    id: 3,
    inputText: `board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"`,
    outputText: "false",
    img: img2.src,
    img_size: 300,
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>m == board.length</code>
</li>  
<li class='mt-3 text-sm'>
<code>n = board[i].length</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ m, n ≤ 6</code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ word.length ≤ 15</code>
</li>  
<li class='mt-3 text-sm'>
<code>board</code> and <code>word</code> consists of only lowercase and uppercase English letters.
</li>  
`;

const starterCode = `/**
* @param {character[][]} board
* @param {string} word
* @return {boolean}
*/
var exist = function(board, word) {
  // Write your code here
};`;

const solution = {
  solution: `var exist = function(board, word) {
  let n = board.length , m = board[0].length , res = false;
  const iterate = (r , l , i) => {
    if( !res ){
      if(r >= n || r < 0 || l >= m || l < 0 || board[r][l] !== word[i] )return;
      if( i === word.length - 1 ){
        res = true;
        return;
      }
      board[r][l] = "";
      iterate(r + 1, l, i + 1);
      iterate(r - 1, l, i + 1);
      iterate(r, l + 1, i + 1);
      iterate(r, l - 1, i + 1);
      board[r][l] = word[i];
      return;
    }
  }
  for( let i = 0 ; i < n ; i++ ){
    for( let j = 0 ; j < m ; j++ ){
      iterate(i , j , 0);
      if( res )return res;
    }
  }
  return res;
};`,
  time_complexity: `n * 3<sup>L</sup>`,
  space_complexity: `L`,
};

// checks if the user has the correct code
const handle_WordSearch = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const boards = [
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
    ];
    const words = ["ABCCED", "SEE", "ABCB"];

    const answers = [true, true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < boards.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(boards[i], words[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("WordSearch handler function error");
    throw new Error(error);
  }
};

export const WordSearch: Problem = {
  order: 6,
  id: "word-search",
  title: "Word Search",
  difficulty: "Medium",
  category: "Backtracking",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "exist(board, word)",
  handlerFunction: handle_WordSearch,
};
