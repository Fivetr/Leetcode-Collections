import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
Alice has some number of cards and she wants to rearrange the cards into groups so 
that each group is of size <code>groupSize</code>, and consists of <code>groupSize</code> consecutive cards.
</p>
<p class='mt-4'>
Given an integer array <code>hand</code> where <code>hand[i]</code> is the value written on the <code>i<sup>th</sup></code> card and an 
integer <code>groupSize</code>, return <code>true</code> if she can rearrange the cards, or <code>false</code> otherwise.
</p>

`;

const examples = [
  {
    id: 1,
    inputText: "hand = [1,2,3,6,2,3,4,7,8], groupSize = 3",
    outputText: "true",
    explanation: "Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]",
  },
  {
    id: 2,
    inputText: "hand = [1,2,3,4,5], groupSize = 4",
    outputText: "false",
    explanation: "Alice's hand can not be rearranged into groups of 4.",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ hand.length ≤ 10<sup>4</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>0 ≤ hand[i] ≤ 10<sup>9</sup></code>
</li>  
<li class='mt-3 text-sm'>
<code>1 ≤ groupSize ≤ hand.length</code>
</li>  
`;

const starterCode = `/**
* @param {number[]} hand
* @param {number} groupSize
* @return {boolean}
*/
var isNStraightHand = function(hand, groupSize) {
  // Write your code here
};`;

const solution = {
  solution: `var isNStraightHand = function(hand, groupSize) {
  if (hand.length % groupSize !== 0) {
    return false;
  }
  const countMap = {};
  for (const card of hand) {
    countMap[card] = (countMap[card] || 0) + 1;
  }
  // Sort the cards in ascending order
  hand.sort((a, b) => a - b);
  for (const card of hand) {
    // Skip cards that have been used in previous groups
    if (countMap[card] === 0) {
      continue;
    }
    // Check if we can form a group of consecutive cards
    for (let i = 0; i < groupSize; i++) {
      const currCard = card + i;
      // If any card in the group is missing, return false
      if (!countMap[currCard] || countMap[currCard] === 0) {
        return false;
      }
      // Reduce the count of the current card in the map
      countMap[currCard] -= 1
    }
  }
  return true;
};`,
  time_complexity: `nlogn`,
  space_complexity: `n`,
};

// checks if the user has the correct code
const handle_HandOfStraignts = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const hands = [
      [1, 2, 3, 6, 2, 3, 4, 7, 8],
      [1, 2, 3, 4, 5],
    ];
    const groupSize = [3, 4];

    const answers = [true, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < hands.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(hands[i], groupSize[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("HandOfStraignts handler function error");
    throw new Error(error);
  }
};

export const HandOfStraignts: Problem = {
  order: 5,
  id: "hand-of-straights",
  title: "Hand of Straignts",
  difficulty: "Medium",
  category: "Greedy",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "isNStraightHand(hand, groupSize)",
  handlerFunction: handle_HandOfStraignts,
};
