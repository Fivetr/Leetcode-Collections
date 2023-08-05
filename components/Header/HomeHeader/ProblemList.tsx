"use client";

import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useState } from "react";
import { problems } from "@/leetcode_problems/index";
import { Problem } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Link from "next/link";
type ProblemListProps = {
  problemId?: string;
  category_problems: string[];
};

function ProblemList({ category_problems, problemId }: ProblemListProps) {
  const [Open, setOpen] = useState(false);

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
        className={`absolute top-12 z-10 h-[calc(100vh-210px)] w-60 overflow-y-auto border border-gray-200 bg-white transition-all duration-700 ${
          Open ? "left-0" : "-left-80"
        }  bg-gradient-to-b from-gray-100 via-slate-300 to-slate-500`}
      >
        <div className="flex flex-col items-center justify-center ">
          {category_problems
            .sort((a, b) => {
              return problems[a].order - problems[b].order;
            })
            .map((items) => {
              return (
                <div
                  key={items}
                  className={` w-full border px-2 py-3 text-center text-sm font-bold hover:text-black ${
                    problemId === items
                      ? "border-sky-300 bg-gradient-to-r from-sky-200 via-cyan-100 to-sky-200 text-sky-500"
                      : "border-gray-300 bg-gradient-to-r from-slate-300 via-gray-100 to-slate-300 text-zinc-500"
                  }`}
                >
                  <Link href={`/leetcode-problems/${items}`}>
                    {problems[items].title}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ProblemList;
