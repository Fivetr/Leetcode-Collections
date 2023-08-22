import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> 
to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [ai, bi]</code> indicates that you <strong>must</strong> 
take course <code>bi</code> first if you want to take course <code>ai</code>.
</p>
<p class='mt-4'>
For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.
</p>
<p class='mt-4'>
Return <code>true</code> if you can finish all courses. Otherwise, return <code>false</code>.
</p>
`;

const examples = [
  {
    id: 1,
    inputText: "numCourses = 2, prerequisites = [[1,0]]",
    outputText: "true",
    explanation:
      "There are a total of 2 courses to take.\nTo take course 1 you should have finished course 0. So it is possible.",
  },
  {
    id: 2,
    inputText: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    outputText: "false",
    explanation:
      "There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ numCourses ≤ 2000</code>
</li> 
<li class='mt-3 text-sm'>
<code>0 ≤ prerequisites.length ≤ 5000</code>
</li> 
<li class='mt-3 text-sm'>
<code>prerequisites[i].length == 2</code>
</li> 
<li class='mt-3 text-sm'>
<code>0 ≤ ai, bi ≤ numCourses</code>
</li> 
<li class='mt-3 text-sm'>
All the pairs prerequisites[i] are <strong>unique</strong>.
</li> 

`;

const starterCode = `/**
* @param {number} numCourses
* @param {number[][]} prerequisites
* @return {boolean}
*/
var canFinish = function(numCourses, prerequisites) {
  // Write your code here
};`;

const solution = {
  solution: `var canFinish = function(numCourses, prerequisites) {
  /* Since, we need to take course bi first before we can take ai, 
     we clearly are looking for some sort of cycle.
     If a cycle exists, we definitely cannot finish all courses.
     If no cycle exists, we can finish all courses. */
  // Use topological sorting
  // Represent the course dependencies to efficiently retrieve the courses dependent on a particular course
  let graph = Array(numCourses).fill(0).map(() => [])
  // Store the number of prerequisites for each course
  let inDegree = Array(numCourses).fill(0)
  // queue
  let q = []
  /* Create the adjacency list to represent the course dependencies of bi to ai 
     by traversing through prerequisites as we also increment their in degree 
     by 1 based on the current course. */
  for (let[course, prereq] of prerequisites){
    graph[prereq].push(course)
    inDegree[course] += 1
  }
  for (let course = 0; course< numCourses; course++){
    /* If there in degrees is equal to 0, this means there are no 
       prerequisites for these courses, so we can add it to our queue */
    if(inDegree[course] === 0) q.push(course)
  }
  // Perform topological sorting by dequeuing a course from the queue.
  while (q.length){
    let prereq = q.shift()
    numCourses -= 1
    // For each dequeued course, we want to decrement their in degrees of its dependent course.
    for(let course of graph[prereq]){
      inDegree[course] -= 1
      // If the dependent course's in degree becomes 0, it means all prerequisites have been fulfilled, so we can enqueue it.
      if(inDegree[course] === 0) q.push(course)
    }
  }
  /* After topological sorting, if there are any remaining courses, numCourses 
     will not be 0. This means that there is a cycle in the course dependencies. */
  return numCourses === 0
};`,
  time_complexity: `V + E`,
  space_complexity: `V + E`,
};

// checks if the user has the correct code
const handle_CourseSchedule = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const numCourses = [2, 2];
    const prerequisites = [
      [[1, 0]],
      [
        [1, 0],
        [0, 1],
      ],
    ];

    const answers = [true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < numCourses.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(numCourses[i], prerequisites[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("CourseSchedule handler function error");
    throw new Error(error);
  }
};

export const CourseSchedule: Problem = {
  order: 6,
  id: "course-schedule",
  title: "Course Schedule",
  difficulty: "Medium",
  category: "Graph",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "canFinish(numCourses, prerequisites)",
  handlerFunction: handle_CourseSchedule,
};
