"use client";
import React from "react";
import { problems } from "@/leetcode_problems/index";
import { Problem } from "@/types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

type ProblemNavProps = {
  problemId?: string;
  category_problems: string[];
  currentCategory: string;
};

function ProblemNav({
  problemId,
  category_problems,
  currentCategory,
}: ProblemNavProps) {
  const router = useRouter();

  const handleClick = (isForward: boolean) => {
    const { order } = problems[problemId as string] as Problem;
    const nextProblem = isForward ? order + 1 : order - 1;
    let nextProblemID: string | undefined;
    category_problems.forEach((items) => {
      if (problems[items].order === nextProblem) {
        nextProblemID = items;
      }
    });
    if (category_problems.length === 1) {
      router.push(`/leetcode-problems/${problemId}`);
    } else if (nextProblem === category_problems.length + 1) {
      nextProblemID = Object.keys(problems).find(
        (key) =>
          problems[key].order === 1 &&
          problems[key].category === currentCategory
      );

      if (nextProblemID) router.push(`/leetcode-problems/${nextProblemID}`);
    } else if (nextProblem === 0) {
      nextProblemID = Object.keys(problems).find(
        (key) =>
          problems[key].order === category_problems.length &&
          problems[key].category === currentCategory
      );

      if (nextProblemID) router.push(`/leetcode-problems/${nextProblemID}`);
    } else {
      if (nextProblemID) router.push(`/leetcode-problems/${nextProblemID}`);
    }
  };

  return (
    <>
      <button
        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg border p-2 duration-300 hover:bg-gray-100"
        onClick={() => handleClick(false)}
      >
        <FaChevronLeft />
      </button>
      <button
        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg border p-2 duration-300 hover:bg-slate-100"
        onClick={() => handleClick(true)}
      >
        <FaChevronRight />
      </button>
    </>
  );
}

export default ProblemNav;
