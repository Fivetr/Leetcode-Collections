"use client";

import React from "react";
import CodeEditorConsoleFooter from "./CodeEditorConsoleFooter";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useState } from "react";
import { Example } from "@/types";

type CodeEditorConsoleCOntainerProps = {
  examples?: Example[];
};

function CodeEditorConsoleContainer({
  examples,
}: CodeEditorConsoleCOntainerProps) {
  const consoleOpen = useSelector(
    (state: RootState) => state.ConsoleReduce.value
  );

  const [TestCaseState, setTestCaseState] = useState(0);
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
              {examples?.map((example, index) => (
                <div
                  className="mr-4 mt-3 items-start"
                  key={example.id}
                  onClick={() => setTestCaseState(index)}
                >
                  <div className="flex flex-wrap items-center justify-center gap-y-4">
                    <div className="testcase_btn">Case {index + 1}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* test cases input & output */}
            <div className="pb-2">
              <p className="mt-4 text-sm font-medium ">Input:</p>
              <div className="mt-2 w-full cursor-pointer rounded-lg border border-transparent bg-[#f7f7f7] px-3 py-[10px]">
                {examples ? examples[TestCaseState].inputText : null}
              </div>
            </div>
            <div className="mb-4 pb-2">
              <p className="mt-4 text-sm font-medium ">Output:</p>
              <div className="mt-2 w-full cursor-pointer rounded-lg border border-transparent bg-[#f7f7f7] px-3 py-[10px]">
                {examples ? examples[TestCaseState].outputText : null}
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
