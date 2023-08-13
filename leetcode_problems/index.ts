import { Problem } from "@/types";
import {
  twoSum,
  ContainsDuplicate,
  ValidAnagram,
  GroupAnagrams,
  TopKFrequentElements,
  ProductOfArrayExpectSelf,
  ValidSudoku,
  LongestConsectiveSequence,
} from "./problems/Hashing";
import {
  validParentheses,
  EvaluateReversePolishNotation,
  GenerateParentheses,
  DailyTemperatures,
  CarFleet,
  LargestRectangleinHistogram,
} from "./problems/Stack";
import {
  ValidPalindrome,
  TwoSum2,
  ThreeSum,
  ContainerWithMostWater,
  TrappingRainWater,
} from "./problems/Two_Pointers";
import {
  BinarySearch,
  Search2DMatrix,
  KoKoEatingBananas,
  FindMinimumInRotatedSortedArray,
  SearchInRotatedSortedArray,
  MedianOfTwoSortedArrays,
} from "./problems/Binary_Search";
import {
  BestTimeToBuyAndSellStock,
  LongestSubstringWithoutRepeatingCharacters,
  LongestRepeatingCharacterReplacement,
  PermutationInString,
  MinimumWindowSubstring,
  SlidingWindowMaximum,
} from "./problems/Sliding_Window";
import { ReverseLinkedList, MergeTwoSortedLists } from "./problems/Linked_List";
interface ProblemMap {
  [key: string]: Problem;
}

export const problems: ProblemMap = {
  "two-sum": twoSum,
  "valid-parentheses": validParentheses,
  "vaild-anagram": ValidAnagram,
  "contains-duplicate": ContainsDuplicate,
  "group-anagrams": GroupAnagrams,
  "top-k-frequent-elements": TopKFrequentElements,
  "product-of-array-except-self": ProductOfArrayExpectSelf,
  "valid-sudoku": ValidSudoku,
  "longest-consecutive-sequence": LongestConsectiveSequence,
  "evaluate-reverse-polish-notation": EvaluateReversePolishNotation,
  "generate-parentheses": GenerateParentheses,
  "daily-temperature": DailyTemperatures,
  "car-fleet": CarFleet,
  "largest-rectangle-in-histogram": LargestRectangleinHistogram,
  "valid-palindrome": ValidPalindrome,
  "two-sum-2": TwoSum2,
  "three-sum": ThreeSum,
  "container-with-most-water": ContainerWithMostWater,
  "trapping-rain-water": TrappingRainWater,
  "binary-search": BinarySearch,
  "search-a-2d-matrix": Search2DMatrix,
  "koko-eating-bananas": KoKoEatingBananas,
  "find-minimum-in-rotated-sorted-array": FindMinimumInRotatedSortedArray,
  "search-in-rotated-sorted-array": SearchInRotatedSortedArray,
  "median-of-two-sorted-arrays": MedianOfTwoSortedArrays,
  "best-time-to-buy-and-sell-stock": BestTimeToBuyAndSellStock,
  "longest-substring-without-repeating-characters":
    LongestSubstringWithoutRepeatingCharacters,
  "longest-repeating-character-replacement":
    LongestRepeatingCharacterReplacement,
  "permutation-in-string": PermutationInString,
  "minimum-window-substring": MinimumWindowSubstring,
  "sliding-window-maximum": SlidingWindowMaximum,
  "reverse-linked-list": ReverseLinkedList,
  "merge-two-sorted-lists": MergeTwoSortedLists,
};
