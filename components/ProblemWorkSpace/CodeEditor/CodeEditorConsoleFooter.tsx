"use client";

import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { openConsole, closeConsole } from "@/app/redux/features/console-slice";

function CodeEditorConsoleFooter() {
  const dispatch = useDispatch<AppDispatch>();
  const consoleOpen = useSelector(
    (state: RootState) => state.ConsoleReduce.value
  );
  return (
    <div className="m-b-0 flex cursor-pointer justify-between rounded-b-[5px] px-2 py-2">
      {/* check if the console is open */}
      {!consoleOpen ? (
        // render cheron up icon
        <button
          className="flex items-center justify-start gap-2  text-gray-400 hover:text-black"
          onClick={() => dispatch(openConsole())}
        >
          <p className=" text-sm">Console</p>
          <BsChevronUp size={10} />
        </button>
      ) : (
        // render cheron down icon
        <button
          className="flex items-center justify-start gap-2 text-gray-400 hover:text-black "
          onClick={() => dispatch(closeConsole())}
        >
          <p className="text-sm ">Console</p>
          <BsChevronDown size={10} />
        </button>
      )}
      <div className="items-center pr-2">
        <button className="inline-block cursor-pointer rounded-md border border-cyan-400 bg-cyan-400 px-3 py-1 text-center text-xs font-semibold text-white no-underline hover:border-sky-600 hover:bg-cyan-600">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CodeEditorConsoleFooter;
