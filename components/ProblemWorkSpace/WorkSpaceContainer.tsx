import React from "react";
import Split from "react-split";
import ProblemDetailContainer from "./ProblemDetail/ProblemDetailContainer";
import CodeEditor from "./CodeEditor/CodeEditor";

function WorkSpaceContainer() {
  return (
    <>
      {/* split the deatil section and code editor */}
      <Split className="split" minSize={250}>
        <ProblemDetailContainer />
        <CodeEditor />
      </Split>
      <div className="h-[.5rem] w-full bg-[#eaeaea]"></div>
    </>
  );
}

export default WorkSpaceContainer;
