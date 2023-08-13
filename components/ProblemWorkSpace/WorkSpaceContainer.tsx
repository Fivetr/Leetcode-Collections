"use client";

import React from "react";
import Split from "react-split";
import ProblemDetailContainer from "./ProblemDetail/ProblemDetailContainer";
import CodeEditor from "./CodeEditor/CodeEditor";
import { problems } from "@/leetcode_problems";

type WorkSpaceContainerProps = {
  problem: string;
};

function WorkSpaceContainer({ problem }: WorkSpaceContainerProps) {
  return (
    <>
      {/* split the deatil section and code editor */}
      <Split className="split" minSize={420}>
        <ProblemDetailContainer problem={problems[problem]} />
        <CodeEditor problem={problems[problem]} />
      </Split>
      <div className="h-[.5rem] w-full bg-[#eaeaea]"></div>
    </>
  );
}

export default WorkSpaceContainer;
