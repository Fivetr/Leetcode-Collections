import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { Problem } from "@/types";

type ProblemSolutionProps = {
  problem: Problem;
};

function ProblemSolution({ problem }: ProblemSolutionProps) {
  return (
    <div className="flex w-full flex-col justify-between bg-[#eaeaea]">
      {/* code editor; read only */}
      <div className="h-[calc(93.5%-30px)] w-full overflow-auto rounded-b-[10px] bg-white pt-2">
        <CodeMirror
          value={problem.solution.solution}
          theme={githubLight}
          extensions={[javascript()]}
          style={{ fontSize: 14 }}
          readOnly={true}
        />
      </div>
      {/* solution complexity */}
      <div className=" mt-2 flex flex-col rounded-t-[5px] bg-white px-5 py-2">
        <h3 className="text-base font-semibold ">Solution Complexity</h3>
        <div className="mt-3 text-sm">
          {/* time complexity */}
          <div className="mt-2 flex items-center gap-2">
            <p className="text-center">Time Complexity : </p>
            <code className=" flex items-center justify-center">
              O{"("}
              <div
                dangerouslySetInnerHTML={{
                  __html: problem.solution.time_complexity,
                }}
              />
              {")"}
            </code>
          </div>
          {/* space complexity */}
          <div className="mt-2 flex items-center gap-2">
            <p className="text-center">Space Complexity : </p>
            <code className=" flex items-center justify-center">
              O{"("}
              <div
                dangerouslySetInnerHTML={{
                  __html: problem.solution.space_complexity,
                }}
              />
              {")"}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemSolution;
