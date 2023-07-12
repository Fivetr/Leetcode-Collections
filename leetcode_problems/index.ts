import { Problem } from "../types/index";
import { twoSum } from "./problems/two-sums";
import { validParentheses } from "./problems/valid-parentheses";

interface ProblemMap {
  [key: string]: Problem;
}

export const problems: ProblemMap = {
  "two-sum": twoSum,
  "valid-parentheses": validParentheses,
};
