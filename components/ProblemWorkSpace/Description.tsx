import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

function Description() {
  return (
    <div className="bg-dark-layer-1">
      {/* TAB */}
      <div className="bg-dark-layer-2 flex h-11 w-full items-center overflow-x-hidden pt-2 ">
        <div
          className={
            "bg-dark-layer-1 cursor-pointer rounded-t-[5px] px-5 py-[10px] text-xs"
          }
        >
          Description
        </div>
      </div>

      <div className="flex h-[calc(100vh-94px)] overflow-y-auto px-0 py-4">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="mr-2 flex-1 text-lg font-medium ">1. Two Sum</div>
            </div>
            <div className="mt-3 flex items-center">
              <div
                className={`text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
              >
                Easy
              </div>
              <div className="text-green-s text-dark-green-s ml-4 rounded p-[3px] text-lg transition-colors duration-200">
                <BsCheck2Circle />
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-sm ">
              <p className="mt-3">
                Given an array of integers <code>nums</code> and an integer{" "}
                <code>target</code>, return{" "}
                <em>indices of the two numbers such that they add up to</em>{" "}
                <code>target</code>.
              </p>
              <p className="mt-3">
                You may assume that each input would have{" "}
                <strong>exactly one solution</strong>, and you may not use
                thesame element twice.
              </p>
              <p className="mt-3">You can return the answer in any order.</p>
            </div>

            {/* Examples */}
            <div className="mt-10">
              {/* Example 1 */}
              <div>
                <p className="font-medium  ">Example 1: </p>
                <div className="example-card">
                  <pre>
                    <strong className="">Input: </strong> nums = [2,7,11,15],
                    target = 9 <br />
                    <strong>Output:</strong> [0,1] <br />
                    <strong>Explanation:</strong>Because nums[0] + nums[1] == 9,
                    we return [0, 1].
                  </pre>
                </div>
              </div>

              {/* Example 2 */}
              <div>
                <p className="font-medium  ">Example 2: </p>
                <div className="example-card">
                  <pre>
                    <strong className="">Input: </strong> nums = [3,2,4], target
                    = 6 <br />
                    <strong>Output:</strong> [1,2] <br />
                    <strong>Explanation:</strong>Because nums[1] + nums[2] == 6,
                    we return [1, 2].
                  </pre>
                </div>
              </div>
              {/* Example 3 */}
              <div>
                <p className="font-medium  ">Example 3: </p>
                <div className="example-card">
                  <pre>
                    <strong className="">Input: </strong> nums = [3,3], target =
                    6
                    <br />
                    <strong>Output:</strong> [0,1] <br />
                  </pre>
                </div>
              </div>
            </div>

            {/* Constraints */}
            <div className="mt-8">
              <div className="text-sm font-medium ">Constraints:</div>
              <ul className="ml-5 list-disc ">
                <li className="mt-2">
                  <code>
                    2 {" <= "} nums.length {" <= "} 10<sup>4</sup>
                  </code>
                </li>

                <li className="mt-2">
                  <code>
                    -10<sup>-9</sup> {" <= "} nums[i] {" <= "} 10<sup>-9</sup>
                  </code>
                </li>
                <li className="mt-2">
                  <code>
                    -10<sup>-9</sup> {" <= "} target {" <= "} 10<sup>-9</sup>
                  </code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
