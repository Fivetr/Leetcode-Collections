"use client";

import React from "react";
import CodeEditorConsoleFooter from "./CodeEditorConsoleFooter";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useState } from "react";

function CodeEditorConsoleContainer() {
  const consoleOpen = useSelector(
    (state: RootState) => state.ConsoleReduce.value
  );

  const [TestCaseState, setTestCaseState] = useState("Case1");
  return (
    <div className="flex flex-col justify-between rounded-t-[5px] bg-white">
      {/* Check if console is open */}
      {consoleOpen ? (
        // render the test case with console footer
        <>
          {/* test cases */}
          <div className="flex h-full w-full flex-col overflow-auto px-4 ">
            <h3 className="pt-2 text-[1.1rem] font-semibold">Test Cases</h3>

            {/*test case button*/}
            <div className="flex">
              <div className="mr-4 mt-3 items-start">
                <div className="flex flex-wrap items-center justify-center gap-y-4">
                  <div className="testcase_btn">Case 1</div>
                </div>
              </div>
              <div className="mr-4 mt-3 items-start">
                <div className="flex flex-wrap items-center justify-center gap-y-4">
                  <div className="testcase_btn">Case 2</div>
                </div>
              </div>
              <div className="mr-4 mt-3 items-start">
                <div className="flex flex-wrap items-center justify-center gap-y-4">
                  <div className="testcase_btn">Case 3</div>
                </div>
              </div>
            </div>
            {/* test cases input & output */}
            <div className="pb-2">
              <p className="mt-4 text-sm font-medium ">Input:</p>
              <div className="mt-2 w-full cursor-pointer rounded-lg border border-transparent bg-[#f7f7f7] px-3 py-[10px]">
                nums: [2,7,11,15], target: 9
              </div>
            </div>
            <div className="mb-4 pb-2">
              <p className="mt-4 text-sm font-medium ">Output:</p>
              <div className="mt-2 w-full cursor-pointer rounded-lg border border-transparent bg-[#f7f7f7] px-3 py-[10px]">
                nums: [0,1]
              </div>
            </div>
          </div>

          <CodeEditorConsoleFooter />
        </>
      ) : (
        // render only console footer
        <CodeEditorConsoleFooter />
      )}
    </div>
  );
}

export default CodeEditorConsoleContainer;
