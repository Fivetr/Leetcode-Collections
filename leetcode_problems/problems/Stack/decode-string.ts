import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given an encoded string, return its decoded string.
</p>
<p class='mt-4'>
The encoding rule is: <code>k[encoded_string]</code>, where the 
<code>encoded_string</code> inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
</p>
<p class='mt-4'>
You may assume that the input string is always valid; there are no extra white spaces, 
square brackets are well-formed, etc. Furthermore, you may assume that the original data 
does not contain any digits and that digits are only for those repeat numbers, <code>k</code>. 
For example, there will not be input like <code>3a</code> or <code>2[4]</code>.
</p>
<p class='mt-4'>
The test cases are generated so that the length of the output will never exceed <code>10<sup>5</sup></code>.


</p>

`;
const examples = [
  {
    id: 1,
    inputText: 's = "3[a]2[bc]"',
    outputText: '"aaabcbc"',
  },
  {
    id: 2,
    inputText: 's = "3[a2[c]]"',
    outputText: '"accaccacc"',
  },
  {
    id: 3,
    inputText: 's = "2[abc]3[cd]ef"',
    outputText: '"abcabccdcdcdef"',
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 <= s.length <= 30</code>
</li>  
<li class='mt-3 text-sm'>
<code>s</code> consists of lowercase English letters, digits, and square brackets <code>'[]'</code>.
</li>  
<li class='mt-3 text-sm'>
<code>s</code> is guaranteed to be <strong>a valid</strong> input.
</li>  
<li class='mt-3 text-sm'>
All the integers in s are in the range <code>[1, 300]</code>.
</li>  
`;

const starterCode = `/**
* @param {string} s
* @return {string}
*/
var decodeString = function(s) {
  // Write your code here
};`;

const solution = {
  solution: `var decodeString = function(s) {
    const stack = []
    for(let str of s){
        if(str !== "]") stack.push(str)
        else{
            let substring = ""
            while(stack[stack.length-1] !== "["){
                substring = stack.pop() + substring
            }
            stack.pop()
            let k = ""
            while(!isNaN(stack[stack.length - 1])){
                k = stack.pop() + k
            }
            const result = substring.repeat(parseInt(k));
            stack.push(result)
        }
    }
    return stack.join("")
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_DecodeString = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const n = ["3[a]2[bc]", "3[a2[c]]", "2[abc]3[cd]ef"];

    const answers = ["aaabcbc", "accaccacc", "abcabccdcdcdef"];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < n.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(n[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("DecodeString handler function error");
    throw new Error(error);
  }
};

export const DecodeString: Problem = {
  order: 9,
  id: "decode-string",
  title: "Decode String",
  difficulty: "Medium",
  category: "Stack",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "decodeString(n)",
  handlerFunction: handle_DecodeString,
};
