"use client";

import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useState } from "react";

function ProblemList() {
  const [Open, setOpen] = useState(false);

  return (
    <>
      <div
        className="mr-3 flex items-center justify-center gap-1 rounded-md px-3 py-[.18rem]  hover:bg-gray-100"
        onClick={() => setOpen(!Open)}
      >
        <AiOutlineUnorderedList />
        <p className="text-sm font-semibold">Problem List</p>
      </div>
      <div
        className={`absolute top-12 z-10 h-[calc(100vh-210px)] w-60 overflow-y-auto border-2 border-black bg-white transition-all duration-700 ${
          Open ? "left-0" : "-left-80"
        } `}
      ></div>
    </>
  );
}

export default ProblemList;
