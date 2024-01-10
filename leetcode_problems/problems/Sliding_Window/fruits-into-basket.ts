import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are visiting a farm that has a single row of fruit trees arranged from left to right. 
The trees are represented by an integer array <code>fruits</code> where <code>fruits[i]</code> is the <strong>type</strong> of 
fruit the <code>i<sup>th</sup></code> tree produces.
<p class='mt-4'>
You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:</p>


<p class='mt-4'>
You only have <strong>two</strong> baskets, and each basket can only hold a <strong>single type</strong> of fruit. 
There is no limit on the amount of fruit each basket can hold.</p>
<p class='mt-4'>
Starting from any tree of your choice, you must pick <strong>exactly one fruit</strong> 
from <strong>every</strong> tree (including the start tree) while moving to the right. The 
picked fruits must fit in one of your baskets.</p>
<p class='mt-4'>
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.</p>
<p class='mt-4'>
Given the integer array <code>fruits</code>, return the <strong>maximum</strong> number of fruits you can pick.</p>

`;

const examples = [
  {
    id: 1,
    inputText: "fruits = [1,2,1]",
    outputText: "3",
    explanation: "We can pick from all 3 trees.",
  },
  {
    id: 2,
    inputText: "fruits = [0,1,2,2]",
    outputText: "3",
    explanation:
      "We can pick from trees [1,2,2].\nIf we had started at the first tree, we would only pick from trees [0,1]",
  },
  {
    id: 3,
    inputText: "fruits = [1,2,3,2,2]",
    outputText: "4",
    explanation:
      "We can pick from trees [2,3,2,2].\nIf we had started at the first tree, we would only pick from trees [1,2].",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 <= fruits.length <= 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>0 <= fruits[i] < fruits.length</code>
</li> 
`;

const starterCode = `/**
* @param {number[]} fruits
* @return {number}
*/
var totalFruit = function(fruits) {
  // Write your code here
};`;

const solution = {
  solution: `var totalFruit = function(fruits) {
    const freq = {}
    let count = 0, maxCount = 0
    let l = 0
    for(let r = 0; r< fruits.length; r++){
        freq[fruits[r]] = 1 + (freq[fruits[r]] || 0)
        count++
        while(Object.keys(freq).length > 2){
            freq[fruits[l]] -= 1
            if(!freq[fruits[l]]) delete freq[fruits[l]]
            l++
            count--
        }
        maxCount = Math.max(maxCount,count)
    }
    return maxCount
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_FruitsIntoBasket = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [1, 2, 1],
      [0, 1, 2, 2],
      [1, 2, 3, 2, 2],
    ];
    const answers = [3, 3, 4];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("FruitsIntoBasket handler function error");
    throw new Error(error);
  }
};

export const FruitsIntoBasket: Problem = {
  order: 9,
  id: "fruits-into-basket",
  title: "Fruits into Basket",
  difficulty: "Medium",
  category: "Sliding Window",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "totalFruit(fruits)",
  handlerFunction: handle_FruitsIntoBasket,
};
