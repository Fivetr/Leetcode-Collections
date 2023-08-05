import React from "react";
import { Problem } from "@/types";
import ProblemSolved from "./ProblemSolved";

type ProblemDescriptionProps = {
  problem: Problem;
};

function ProblemDescription({ problem }: ProblemDescriptionProps) {
  return (
    <div className="w-full rounded-b-[10px] px-5">
      {/* problem title */}
      <div className="mt-5 flex space-x-4">
        <div className="mr-2 flex-1 text-lg font-medium ">{problem.title}</div>
      </div>
      {/* problem meta data */}
      <div className="mt-3 flex items-center">
        <div
          className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${
            problem.difficulty === "Easy"
              ? "border-green-200 bg-green-200 text-green-600"
              : problem.difficulty === "Hard"
              ? "border-red-200 bg-red-200 text-red-600"
              : "border-orange-200 bg-orange-200 text-yellow-600"
          }`}
        >
          {problem.difficulty}
        </div>
        <ProblemSolved id={problem.id} />
        <p className="ml-4 text-xs font-medium">{problem.category}</p>
      </div>
      {/* problem descriptions */}
      <div className="mt-4 text-sm">
        <div dangerouslySetInnerHTML={{ __html: problem.problemStatement }} />
      </div>
      {/* problem examples */}
      <div className="mt-10">
        {problem.examples.map((example, index) => (
          <div key={example.id}>
            <p className="font-medium">Example {index + 1}: </p>
            <div>
              <pre className="my-[1rem] whitespace-pre-wrap rounded-md border-2 border-[#faf8f8] bg-[#f7f7f7] p-[1rem] text-[.95rem] text-black">
                <strong>Input: </strong> {example.inputText} <br />
                <strong>Output:</strong> {example.outputText} <br />
                {example.explanation ? (
                  <>
                    <strong>Explanation:</strong> {example.explanation}
                  </>
                ) : null}
              </pre>
            </div>
          </div>
        ))}
      </div>
      {/* probloem constraints */}
      <div className="mt-8 pb-4">
        <div className="text-sm font-medium ">Constraints:</div>
        <ul className="ml-5 list-disc">
          <div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
        </ul>
      </div>
    </div>
  );
}

export default ProblemDescription;
