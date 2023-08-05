"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import { SetValue } from "@/app/redux/features/category-nav-slice";
import { twMerge } from "tailwind-merge";

function ProblemNavBar() {
  const CategoryList = [
    "Hashing",
    "Stack",
    "Two Pointers",
    "Binary Search",
    "Sliding Window",
    "Linked List",
    "Trees",
    "Heap",
    "Backtracking",
    "Graph",
    "Greedy",
    "Intervals",
    "1-D DP",
    "2-D DP",
  ];

  const currentCategory = useSelector(
    (state: RootState) => state.CurrentCategory.value
  );
  console.log(currentCategory);

  const dispatch = useDispatch<AppDispatch>();
  return (
    <ul className="mx-auto mt-14 flex w-[70vw] flex-wrap items-center justify-center gap-4 overflow-x-auto px-4 py-3">
      {CategoryList.map((item, index) => {
        return (
          <li key={index}>
            <button
              className={
                currentCategory === item
                  ? twMerge(
                      "problem_btn border-cyan-200 bg-cyan-100 hover:border-sky-400 hover:bg-cyan-400",
                      "border-sky-400 bg-cyan-400"
                    )
                  : "problem_btn border-cyan-100 bg-cyan-100 hover:border-sky-400 hover:bg-cyan-400"
              }
              onClick={() => dispatch(SetValue(item))}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ProblemNavBar;
