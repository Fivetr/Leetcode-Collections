import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/letter_combination.jpg";

const problemStatement = `
<p class='mt-4'>
Given a string containing digits from <code>2-9</code> inclusive, 
return all possible letter combinations that the number could represent. 
Return the answer in <strong>any order</strong>.</p>
<p class='mt-4'>
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.</p>
`;

const examples = [
  {
    id: 1,
    inputText: `digits = "23"`,
    outputText: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
    img: img1.src,
    img_size: 300,
  },
  {
    id: 2,
    inputText: `digits = ""`,
    outputText: "[]",
  },
  {
    id: 3,
    inputText: `digits = "2"`,
    outputText: '["a","b","c"]',
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>0 ≤ digits.length ≤ 4</code>
</li>  
<li class='mt-3 text-sm'>
<code>digits[i]</code> is a digit in the range <code>['2', '9']</code>.
</li>  
`;

const starterCode = `/**
* @param {string} digits
* @return {string[]}
*/
var letterCombinations = function(digits) {
  // Write your code here
};`;

const solution = {
  solution: `var letterCombinations = function(digits) {
  if (!digits.length) {
    return [];
  }
  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  const res = [];
  function backtrack(idx, comb) {
    if (idx === digits.length) {
      res.push(comb);
      return;
    }
      
    for (const letter of digitToLetters[digits[idx]]) {
      backtrack(idx + 1, comb + letter);
    }
  }
  backtrack(0, "");
  return res;    
};`,
  time_complexity: `3<sup>n</sup>`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_letterCombinations = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const digits = ["23", "", "2"];

    const answers = [
      ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
      [],
      ["a", "b", "c"],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < digits.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(digits[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("letterCombinations handler function error");
    throw new Error(error);
  }
};

export const LetterCombinationsOfAPhoneNumber: Problem = {
  order: 8,
  id: "letter-combinations-of-a-phone-number",
  title: "Letter Combinations of a Phone Number",
  difficulty: "Medium",
  category: "Backtracking",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "letterCombinations(digits)",
  handlerFunction: handle_letterCombinations,
};
