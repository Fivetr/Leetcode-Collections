"use client";

import React from "react";
import CodeEditorNav from "./CodeEditorNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import CodeEditorConsoleContainer from "./CodeEditorConsoleContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { Example } from "@/types";

type CodeEditorProps = {
  startercode: string;
  examples: Example[];
};

function CodeEditor({ startercode, examples }: CodeEditorProps) {
  const ConsoleOpen = useSelector(
    (state: RootState) => state.ConsoleReduce.value
  );

  return (
    // right side of workspace; container
    <div className="relative flex flex-col rounded-b-lg bg-[#eaeaea]">
      {/* top */}
      <CodeEditorNav />
      {/*mid-bottom*/}
      <div className="flex h-[calc(100vh-94px)] w-full">
        <div className="flex w-full flex-col rounded-b-[5px]">
          {/* check is the console is open*/}
          {ConsoleOpen ? (
            // split the workspace horizontally with codeMirror & (test cases & concole footer)
            <Split
              className="h-[calc(100vh-94px)]"
              direction="vertical"
              sizes={[78, 22]}
              minSize={60}
            >
              <div className="w-full overflow-auto rounded-b-[5px]  bg-white">
                <CodeMirror
                  value={startercode}
                  theme={githubLight}
                  extensions={[javascript()]}
                  style={{ fontSize: 14 }}
                />
              </div>
              <CodeEditorConsoleContainer examples={examples} />
            </Split>
          ) : (
            // stack the work space with codeMirror & console footer
            <div className="relative flex h-[calc(100vh-94px)] flex-col justify-between">
              <div className="h-[calc(98.5%-30px)] w-full overflow-auto rounded-b-[5px] bg-white">
                <CodeMirror
                  value={startercode}
                  theme={githubLight}
                  extensions={[javascript()]}
                  style={{ fontSize: 14 }}
                />
              </div>
              <div className="mt-2">
                <CodeEditorConsoleContainer />
              </div>
            </div>
          )}
        </div>
        <div className="w-[.4rem] bg-[#eaeaea]"></div>
      </div>
    </div>
  );
}

export default CodeEditor;
