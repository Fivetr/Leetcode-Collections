import React from "react";
import Split from "react-split";
import ProblemDetailContainer from "./ProblemDetail/ProblemDetailContainer";
import CodeEditor from "./CodeEditor/CodeEditor";
import { problems } from "../../leetcode_problems/index";

type WorkSpaceContainerProps = {
  problemId: string;
};

function WorkSpaceContainer({ problemId }: WorkSpaceContainerProps) {
  const constrain = problems[problemId].constraints;
  const difficulty = problems[problemId].difficulty;
  const examples = problems[problemId].examples;
  const title = problems[problemId].title;
  const problemStatement = problems[problemId].problemStatement;
  const category = problems[problemId].category;
  const startercode = problems[problemId].starterCode;
  const solution = problems[problemId].solution;
  return (
    <>
      {/* split the deatil section and code editor */}
      <Split className="split" minSize={250}>
        <ProblemDetailContainer
          constrain={constrain}
          difficulty={difficulty}
          examples={examples}
          title={title}
          problemStatement={problemStatement}
          category={category}
          solution={solution}
        />
        <CodeEditor startercode={startercode} examples={examples} />
      </Split>
      <div className="h-[.5rem] w-full bg-[#eaeaea]"></div>
    </>
  );
}

export default WorkSpaceContainer;
