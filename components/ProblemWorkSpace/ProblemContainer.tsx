import React from "react";
import Split from "react-split";
import Description from "./Description";

function ProblemContainer() {
  return (
    <Split className="split">
      <Description />
      <div>Code Section</div>
    </Split>
  );
}

export default ProblemContainer;
