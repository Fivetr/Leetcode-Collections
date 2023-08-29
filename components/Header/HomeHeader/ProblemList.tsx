"use client";

import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useState } from "react";
import { problems } from "@/leetcode_problems/index";
import { useRouter } from "next/navigation";
import Link from "next/link";
type ProblemListProps = {
  problemId?: string;
  category_problems: string[];
};

function ProblemList({ category_problems, problemId }: ProblemListProps) {
  const [Open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <button
        className="mr-3 flex items-center justify-center gap-1 rounded-md px-3 py-[.18rem]  hover:bg-gray-100"
        onClick={() => setOpen(!Open)}
      >
        <AiOutlineUnorderedList />
        <p className="text-sm font-semibold">Problem List</p>
      </button>
      <div
        className={`absolute top-12 z-10 flex h-screen w-[35rem] items-start justify-center overflow-y-auto transition-all duration-700 ${
          Open ? "left-0" : "-left-[35rem]"
        }`}
      >
        <div className="-ml-4 mt-2 flex w-[95%] flex-col items-center justify-start">
          {category_problems
            .sort((a, b) => {
              return problems[a].order - problems[b].order;
            })
            .map((items) => {
              return (
                <div
                  key={items}
                  className={` flex w-full justify-between border px-3 py-5  text-start text-sm font-bold hover:bg-gray-300  ${
                    problemId === items
                      ? "border-sky-300 bg-gradient-to-r from-sky-200 via-cyan-100 to-sky-200 text-sky-500"
                      : "border-gray-200 bg-gray-50"
                  } ${
                    problems[items].order === 1
                      ? "rounded-t-lg"
                      : problems[items].order === category_problems.length
                      ? "rounded-b-lg"
                      : ""
                  }`}
                  onClick={() => router.push(`/leetcode-problems/${items}`)}
                >
                  {problems[items].title}
                  <div
                    className={`${
                      problems[items].difficulty === "Easy"
                        ? "text-green-600"
                        : problems[items].difficulty === "Medium"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {problems[items].difficulty}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ProblemList;
