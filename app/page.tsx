"use client";

import { HomeHeader, Footer, LeetCodeProblem } from "@/components";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import { SetValue } from "./redux/features/category-nav-slice";
import { twMerge } from "tailwind-merge";
import { CategoryList } from "../leetcode_problems/problems";

export default function Home() {
  const currentCategory = useSelector(
    (state: RootState) => state.CurrentCategory.value
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    // problem navigation page
    <>
      <main className="min-h-screen">
        <HomeHeader />
        {/* problem category button */}
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
        {/* problem meta data table */}
        <div className="relative mx-auto mt-6 overflow-x-auto px-6 pb-10">
          <table className="mx-auto w-full max-w-[1300px] text-sm sm:w-7/12">
            <thead className="border-b text-xs uppercase ">
              <tr className="border-b-2 border-black">
                <th scope="col" className="table_heading">
                  Status
                </th>
                <th scope="col" className="table_heading">
                  Title
                </th>
                <th scope="col" className="table_heading">
                  Difficulty
                </th>
                {currentCategory === "All" ? (
                  <th scope="col" className="table_heading">
                    Category
                  </th>
                ) : null}
                <th scope="col" className="table_heading">
                  Solution
                </th>
              </tr>
            </thead>
            <LeetCodeProblem />
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}
