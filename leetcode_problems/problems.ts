export type ProblemCategory =
  | "Hashing"
  | "Stack"
  | "Two Pointers"
  | "Binary Search"
  | "Sliding Window"
  | "Linked List"
  | "Trees"
  | "Heap"
  | "Backtracking"
  | "Graph"
  | "Greedy"
  | "Intervals"
  | "1-D DP"
  | "2-D DP"
  | "All"
  | "Frontend";

export type Problem = {
  id: string;
  title: string;
  difficulty: string;
  videolink?: string;
};

export type Category = {
  category: ProblemCategory;
  problems: Problem[];
};

export const Problems: Category[] = [
  {
    category: "Hashing",
    problems: [
      {
        id: "contains-duplicate",
        title: "Contains Duplicate",
        difficulty: "Easy",
        videolink: "3OamzN90kPg",
      },
      {
        id: "vaild-anagram",
        title: "Vaild Anagram",
        difficulty: "Easy",
        videolink: "IRN1VcA8CGc",
      },
      {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",
        videolink: "KLlXCFG5TnA",
      },
      {
        id: "group-anagrams",
        title: "Group Anagrams",
        difficulty: "Medium",
        videolink: "vzdNOK2oB2E",
      },
      {
        id: "top-k-frequent-elements",
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        videolink: "YPTqKIgVk-k",
      },
      {
        id: "product-of-array-except-self",
        title: "Product of Array Except Self",
        difficulty: "Medium",
        videolink: "khTiTSZ5QZY",
      },
      {
        id: "valid-sudoku",
        title: "Valid Sudoku",
        difficulty: "Medium",
        videolink: "TjFXEUCMqI8",
      },
      {
        id: "longest-consecutive-sequence",
        title: "Longest Consecutive Sequence",
        difficulty: "Medium",
        videolink: "P6RZZMu_maU",
      },
    ],
  },
  {
    category: "Stack",
    problems: [
      {
        id: "valid-parentheses",
        title: "Valid Parentheses",
        difficulty: "Easy",
        videolink: "xty7fr-k0TU",
      },
      {
        id: "min-stack",
        title: "Min Stack",
        difficulty: "Medium",
        videolink: "qkLl7nAwDPo",
      },
      {
        id: "evaluate-reverse-polish-notation",
        title: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        videolink: "iu0082c4HDE",
      },
      {
        id: "generate-parentheses",
        title: "Generate Parentheses",
        difficulty: "Medium",
        videolink: "s9fokUqJ76A",
      },
      {
        id: "daily-temperature",
        title: "Daily Temperature",
        difficulty: "Medium",
        videolink: "cTBiBSnjO3c",
      },
      {
        id: "car-fleet",
        title: "Car Fleet",
        difficulty: "Medium",
        videolink: "Pr6T-3yB9RM",
      },
      {
        id: "Largest Rectangle In Histogram",
        title: "largest-rectangle-in-histogram",
        difficulty: "Hard",
        videolink: "zx5Sw9130L0",
      },
    ],
  },
  {
    category: "Two Pointers",
    problems: [
      {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        difficulty: "Easy",
        videolink: "jJXJ16kPFWg",
      },
      {
        id: "two-sum-2",
        title: "Two Sum 2",
        difficulty: "Medium",
        videolink: "cQ1Oz4ckceM",
      },
      {
        id: "three-sum",
        title: "Three Sum",
        difficulty: "Medium",
        videolink: "jzZsG8n2R9A",
      },
      {
        id: "container-with-most-water",
        title: "Container With Most Water",
        difficulty: "Medium",
        videolink: "UuiTKBwPgAo",
      },
      {
        id: "trapping-rain-water",
        title: "Trapping Rain Water",
        difficulty: "Hard",
        videolink: "ZI2z5pq0TqA",
      },
    ],
  },
  {
    category: "Binary Search",
    problems: [
      {
        id: "search-a-2d-matrix",
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        videolink: "ZfFl4torNg4",
      },
    ],
  },
  {
    category: "Sliding Window",
    problems: [
      {
        id: "best-time-to-buy-and-sell-stock",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        videolink: "",
      },
    ],
  },
  {
    category: "Linked List",
    problems: [
      {
        id: "reverse-linked-list",
        title: "Reverse Linked List",
        difficulty: "Hard",
        videolink: "",
      },
    ],
  },
  {
    category: "Trees",
    problems: [
      {
        id: "maximum-depth-of-binary-tree",
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        videolink: "4qYTqOiRMoM",
      },
    ],
  },
  {
    category: "Heap",
    problems: [],
  },
  {
    category: "Backtracking",
    problems: [
      {
        id: "subsets",
        title: "Subsets",
        difficulty: "Medium",
        videolink: "",
      },
    ],
  },
  {
    category: "Graph",
    problems: [],
  },
  {
    category: "Greedy",
    problems: [],
  },

  {
    category: "Intervals",
    problems: [
      {
        id: "merge-intervals",
        title: "Merge Intervals",
        difficulty: "Medium",
        videolink: "",
      },
    ],
  },
  {
    category: "1-D DP",
    problems: [],
  },
  {
    category: "2-D DP",
    problems: [
      {
        id: "jump-game",
        title: "Jump Game",
        difficulty: "Medium",
        videolink: "",
      },
    ],
  },
];
