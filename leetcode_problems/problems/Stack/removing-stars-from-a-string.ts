import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
You are given a string <code>s</code>, which contains stars <code>*</code>.
</p>
<p class='mt-4'>
In one operation, you can:
</p>
<p class='mt-4'>
Choose a star in <code>s</code>.
</p>
<p class='mt-4'>
Remove the closest <strong>non-star</strong> character to its <strong>left</strong>, as well as remove the star itself.
</p>
<p class='mt-4'>
Return the <em>string after</em> <strong>all</strong> <em>stars have been removed</em>.
</p>
<p class='mt-4'>
<strong>Note</strong>:
</p>
<p class='mt-4'>
The input will be generated such that the operation is always possible.
</p>
<p class='mt-4'>
It can be shown that the resulting string will always be unique.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: 's = "leet**cod*e"',
    outputText: '"lecoe"',
    explanation:
      'Performing the removals from left to right:\n- The closest character to the 1st star is \'t\' in "leet**cod*e". s becomes "lee*cod*e". \n- The closest character to the 2nd star is \'e\' in "lee*cod*e". s becomes "lecod*e". \n- The closest character to the 3rd star is \'d\' in "lecod*e". s becomes "lecoe".\nThere are no more stars, so we return "lecoe".',
  },
  {
    id: 2,
    inputText: 's = "erase*****"',
    outputText: '""',
    explanation: "The entire string is removed, so we return an empty string.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 <= s.length <= 10<sup>5</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>s</code> consists of lowercase English letters and stars <code>*</code>.
</li>  
<li class='mt-3 text-sm'>
The operation above can be performed on <code>s</code>.
</li>  
`;

const starterCode = `/**
* @param {string} s
* @return {string}
*/
var removeStars = function(s) {
  // Write your code here
};`;

const solution = {
  solution: `var removeStars = function(s) {
    const stack = []
    for(let str of s){
        if(str == "*") stack.pop()
        else stack.push(str)
    }
    return stack.join("")
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_RemovingStarsFromAString = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const n = ["leet**cod*e", "erase*****"];

    const answers = ["lecoe", ""];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < n.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(n[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("RemovingStarsFromAString handler function error");
    throw new Error(error);
  }
};

export const RemovingStarsFromAString: Problem = {
  order: 7,
  id: "removing-stars-from-a-string",
  title: "Removing Stars From a String",
  difficulty: "Medium",
  category: "Stack",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "removeStars(s)",
  handlerFunction: handle_RemovingStarsFromAString,
};
