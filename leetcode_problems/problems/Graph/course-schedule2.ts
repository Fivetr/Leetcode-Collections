import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. 
You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [ai, bi]</code> indicates 
that you <strong>must</strong> take course <code>bi</code> first if you want to take course <code>ai</code>.
</p>
<p class='mt-4'>
For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have 
to first take course <code>1</code>.
</p>
<p class='mt-4'>
Return <em>the ordering of courses you should take to finish all courses</em>. If there are many 
valid answers, return <strong>any</strong> of them. If it is impossible to 
finish all courses, return <strong>an empty array</strong>.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "numCourses = 2, prerequisites = [[1,0]]",
    outputText: "[0,1]",
    explanation:
      "There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].",
  },
  {
    id: 2,
    inputText: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    outputText: "[0,2,1,3]",
    explanation:
      "There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.\nSo one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].",
  },
  {
    id: 3,
    inputText: "numCourses = 1, prerequisites = []",
    outputText: "[0]",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ numCourses  ≤ 2000</code>
</li>
<li class='mt-3 text-sm'>
<code>0 ≤ prerequisites.length ≤ numCourses * (numCourses - 1)</code>
</li>
<li class='mt-3 text-sm'>
<code>prerequisites[i].length == 2</code>
</li>
<li class='mt-3 text-sm'>
<code>0 ≤ ai, bi ≤ numCourses</code>
</li>
<li class='mt-3 text-sm'>
<code>ai != bi</code>
</li>
<li class='mt-3 text-sm'>
All the pairs <code>[ai, bi]</code> are <strong>distinct</strong>.
</li>

`;

const starterCode = `/**
* @param {number} numCourses
* @param {number[][]} prerequisites
* @return {number[]}
*/
var findOrder = function(numCourses, prerequisites) {
  // Write your code here
};`;

const solution = {
  solution: `var findOrder = function(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0);
  let queue = [];
  let res = [];
  for (let [course] of prerequisites) {
    inDegree[course] ++;
  }
  for (let course = 0; course < inDegree.length; course ++) {
    if (inDegree[course] === 0) {
      queue.push(course);
    }
  } 
  while (queue.length) {
    let currentCourse = queue.pop();
    numCourses --;
    res.push(currentCourse);
    for (let [course, preq] of prerequisites) {
      if (currentCourse === preq) {
        inDegree[course] --;
        if (inDegree[course] === 0) {
          queue.push(course)
        }
      }
 
    }
  }
  return numCourses === 0 ? res : [];
};`,
  time_complexity: `V + E`,
  space_complexity: `V + E`,
};

// checks if the user has the correct code
const handle_CourseSchedule2 = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const numCourses = [2, 4, 1];
    const prerequisites = [
      [[1, 0]],
      [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ],
      [],
    ];

    const answers = [[0, 1], [0, 2, 1, 3], [0]];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < numCourses.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(numCourses[i], prerequisites[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("CourseSchedule2 handler function error");
    throw new Error(error);
  }
};

export const CourseSchedule2: Problem = {
  order: 7,
  id: "course-schedule-2",
  title: "Course Schedule 2",
  difficulty: "Medium",
  category: "Graph",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "findOrder(numCourses, prerequisites)",
  handlerFunction: handle_CourseSchedule2,
};
