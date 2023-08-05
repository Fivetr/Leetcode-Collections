"use client";

import React from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ProblemDescription from "./ProblemDescription";
import ProblemSolution from "./ProblemSolution";
import { Problem } from "@/types";

type ProblemDetailContainerProps = {
  problem: Problem;
};

function ProblemDetailContainer({ problem }: ProblemDetailContainerProps) {
  const [DetailOptions, setDetailOptions] = useState("Description");
  const NavBarOptions = ["Description", "Solution"];

  return (
    // left side of workspace; container
    <div>
      {/* deatil navbar */}
      <div className="flex h-11 w-full items-center overflow-x-hidden bg-[#eaeaea] pt-2">
        <div className="w-[.4rem]  bg-[#eaeaea]"></div>

        <div className="flex w-full gap-5 rounded-t-[5px] bg-white px-5 py-[10px] text-xs">
          {/* change text color based on the detail options */}
          {NavBarOptions.map((item) => (
            <div
              key={item}
              className={
                DetailOptions === item
                  ? twMerge(
                      "cursor-pointer font-bold text-gray-400 hover:text-black",
                      "text-black"
                    )
                  : "DescriptionNav"
              }
              onClick={() => setDetailOptions(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="h-[.25rem] w-full bg-[#eaeaea]"></div>
      {/* description/solution section */}
      <div className="flex h-[calc(100vh-94px)] w-full overflow-y-auto">
        <div className="w-[.4rem] bg-[#eaeaea]"></div>
        {/* render the context based on the navbar */}
        {DetailOptions === "Description" ? (
          <ProblemDescription problem={problem} />
        ) : (
          <ProblemSolution problem={problem} />
        )}
      </div>
    </div>
  );
}

export default ProblemDetailContainer;
