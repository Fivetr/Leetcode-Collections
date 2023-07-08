"use client";

import { HomeHeader, Footer, NavButton, LeetCodeProblem } from "@/components";
import { CategoryList } from "../components/ProblemNav/CategoryList";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function Home() {
  const currentCategory = useSelector(
    (state: RootState) => state.CurrentCategory.value
  );

  return (
    <>
      <main className="min-h-screen">
        <HomeHeader />
        <div className="mx-auto mt-14 flex w-[70vw] flex-wrap items-center justify-center gap-4 overflow-x-auto px-4 py-3">
          {CategoryList.map((item, index) => (
            <NavButton category={item} idx={index} />
          ))}
        </div>
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
