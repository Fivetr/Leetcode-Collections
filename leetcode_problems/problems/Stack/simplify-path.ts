import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Given a string <code>path</code>, which is an <strong>absolute path</strong> 
(starting with a slash <code>'/'</code>) to a file or directory in a Unix-style file system, convert it to the simplified <strong>canonical path</strong>.</p>
<p class='mt-4'>
In a Unix-style file system, a period <code>'.'</code> refers to the current directory, 
a double period <code>'..'</code> refers to the directory up a level, and any multiple 
consecutive slashes (i.e. <code>'//'</code>) are treated as a single slash <code>'/'</code>. For 
this problem, any other format of periods such as <code>'...'</code> are treated as 
file/directory names.
</p>
<p class='mt-4'>
The <strong>canonical path</strong> should have the following format:
</p>
<p class='mt-4'>
The path starts with a single slash <code>'/'</code>.
</p>
<p class='mt-4'>
Any two directories are separated by a single slash <code>'/'</code>.
</p>
<p class='mt-4'>
The path does not end with a trailing <code>'/'</code>.
</p>
<p class='mt-4'>
The path only contains the directories on the path from the root 
directory to the target file or directory (i.e., no period <code>'.'</code> or double period <code>'..'</code>)
</p>
<p class='mt-4'>
Return the <em>simplified</em> <strong>canonical path</strong>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: 'path = "/home/"',
    outputText: '"/home"',
    explanation:
      "Note that there is no trailing slash after the last directory name.",
  },
  {
    id: 2,
    inputText: 'path = "/../"',
    outputText: '"/"',
    explanation:
      "Going one level up from the root directory is a no-op, as the root level is the highest level you can go.",
  },
  {
    id: 3,
    inputText: '"/home//foo/"',
    outputText: '"/home/foo"',
    explanation:
      "In the canonical path, multiple consecutive slashes are replaced by a single one.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 <= path.length <= 3000</code>
</li>  
<li class='mt-3 text-sm'>
<code>path</code> consists of English letters, digits, period <code>'.'</code>, slash <code>'/'</code> or <code>'_'</code>.
</li>  
<li class='mt-3 text-sm'>
<code>path</code> is a valid absolute Unix path.
</li>  
`;

const starterCode = `/**
* @param {string} path
* @return {string}
*/
var simplifyPath = function(path) {
  // Write your code here
};`;

const solution = {
  solution: `var simplifyPath = function(path) {
    let currentPath = ""
    const stack = []
    for(let p of path+"/"){
        if(p == "/"){
            if(currentPath == "..") stack.pop()
            else if(currentPath !== "." && currentPath !== "") {
                stack.push(currentPath)
            }        
            currentPath = ""
        }else{
            currentPath += p
        }
    }
    return "/" + stack.join("/")
};`,
  time_complexity: `n`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_SimplifyPath = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const n = ["/home/", "/../", "/home//foo/"];
    const answers = ["/home", "/", "/home/foo"];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < n.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(n[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("SimplifyPath handler function error");
    throw new Error(error);
  }
};

export const SimplifyPath: Problem = {
  order: 6,
  id: "simplify-path",
  title: "Simplify Path",
  difficulty: "Medium",
  category: "Stack",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "simplifyPath(path)",
  handlerFunction: handle_SimplifyPath,
};
