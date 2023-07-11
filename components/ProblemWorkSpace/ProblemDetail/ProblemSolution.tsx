import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";

function ProblemSolution() {
  return (
    <div className="flex w-full flex-col justify-between bg-[#eaeaea]">
      {/* code editor; read only */}
      <div className="h-[calc(93.5%-30px)] w-full overflow-auto rounded-b-[10px] bg-white pt-2">
        <CodeMirror
          value="const a = 1;"
          theme={githubLight}
          extensions={[javascript()]}
          style={{ fontSize: 14 }}
        />
      </div>
      {/* solution complexity */}
      <div className=" mt-2 flex flex-col rounded-t-[5px] bg-white px-5 py-2">
        <h3 className="text-base font-semibold ">Solution Complexity</h3>
        <div className="mt-3 text-sm">
          <p className="mt-2">
            Time Complexity :{" "}
            <code>
              O{"("}n<sup>2</sup>
              {")"}
            </code>
          </p>
          <p className="mt-3 pb-2">
            Space Complexity :{" "}
            <code>
              O{"("}n{")"}
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProblemSolution;
