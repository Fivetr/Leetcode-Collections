import { Problem } from "@/types";
import { twoSum } from "./problems/Hashing/two-sums";
import { ContainsDuplicate } from "./problems/Hashing/contains-duplicate";
import { ValidAnagram } from "./problems/Hashing/vaild-anagram";
import { validParentheses } from "./problems/Stack/valid-parentheses";
import { minStack } from "./problems/Stack/min-stack";
import { GroupAnagrams } from "./problems/Hashing/group-anagrams";

interface ProblemMap {
  [key: string]: Problem;
}

export const problems: ProblemMap = {
  "two-sum": twoSum,
  "valid-parentheses": validParentheses,
  "vaild-anagram": ValidAnagram,
  "contains-duplicate": ContainsDuplicate,
  "min-stack": minStack,
  "group-anagrams": GroupAnagrams,
};
