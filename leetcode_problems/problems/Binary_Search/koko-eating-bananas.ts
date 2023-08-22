import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Koko loves to eat bananas. There are <code>n</code> piles of bananas, the <code>ith</code> pile 
has <code>piles[i]</code> bananas. The guards have gone and will come back in <code>h</code> hours.
</p>
<p class='mt-4'>
Koko can decide her bananas-per-hour eating speed of <code>k</code>. Each hour, 
she chooses some pile of bananas and eats <code>k</code> bananas from that pile. 
If the pile has less than <code>k</code> bananas, she eats all of them instead and 
will not eat any more bananas during this hour.
</p>
<p class='mt-4'>
Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
</p>
<p class='mt-4'>
Return the <em>minimum integer</em> <code>k</code> <em>such that she can eat all the bananas within</em> <code>h</code> <em>hours</em>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: "piles = [3,6,7,11], h = 8",
    outputText: "4",
  },
  {
    id: 2,
    inputText: "piles = [30,11,23,4,20], h = 5",
    outputText: "30",
  },
  {
    id: 3,
    inputText: "piles = [30,11,23,4,20], h = 6",
    outputText: "23",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ piles.length ≤ 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>piles.length ≤ h ≤ 10<sup>9</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>1 ≤ piles[i] ≤ 10<sup>9</sup></code>
</li> 
`;

const starterCode = `/**
* @param {number[]} piles
* @param {number} h
* @return {number}
*/
var minEatingSpeed = function(piles, h) {
  // Write your code here
};`;

const solution = {
  solution: `var minEatingSpeed = function(piles, h) {
  // minimum 1 banana should be eaten per hour, otherwise no progress
  let left = 1; 
  // at max, max(piles) bananas are required to be eaten per hour
  let right = Math.max(...piles); 
  let res = right
  // Binary Search
  while(left <= right) {
      // mid will be the speed of eating
      let mid = Math.floor((left + right) / 2); 
      // Hours is the total time required to finish all bananas at speed of mid
      let hours = 0; 
      for(let i = 0; i < piles.length; i++) {
          hours += Math.ceil(piles[i] / mid);
      }
      // Decrease the rate
      if(hours <= h) {
          res = Math.min(res, mid);
          right = mid -1
        // Increase the rate
      } else {
          left = mid + 1;
      }
  }
  return res;
};`,
  time_complexity: `log(max(p)) * p`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_minEatingSpeed = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const piles = [
      [3, 6, 7, 11],
      [30, 11, 23, 4, 20],
      [30, 11, 23, 4, 20],
    ];
    const h = [8, 5, 6];

    const answers = [4, 30, 23];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < piles.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(piles[i], h[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("minEatingSpeed handler function error");
    throw new Error(error);
  }
};

export const KoKoEatingBananas: Problem = {
  order: 3,
  id: "koko-eating-bananas",
  title: "KoKo Eating Bananas",
  difficulty: "Medium",
  category: "Binary Search",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "minEatingSpeed(piles, h)",
  handlerFunction: handle_minEatingSpeed,
};
