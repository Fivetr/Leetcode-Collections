"use client";

import { HomeHeader, WorkSpaceContainer, Footer } from "@/components";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Split from "react-split";
import { BsCheck2Circle } from "react-icons/bs";

export default function Home({ params }: { params: { id: string } }) {
  const [DetailOptions, setDetailOptions] = useState("Description");
  const NavBarOptions = ["Description", "Solution"];
  return (
    <main className="min-h-screen">
      <HomeHeader problemPage={true} />
      <>
        <Split className="split" minSize={250}>
          <div>
            {/* deatil navbar */}
            <div className="flex h-11 w-full items-center overflow-x-hidden bg-[#eaeaea] pt-2">
              <div className="w-[.4rem]  bg-[#eaeaea]"></div>

              <div className="flex w-full gap-5 rounded-t-[5px] bg-white px-5 py-[10px] text-xs">
                {/* change text color based on the detail options */}
                {NavBarOptions.map((item) => (
                  <div
                    key={item}
                    className={
                      DetailOptions === item
                        ? twMerge(
                            "cursor-pointer font-bold text-gray-400 hover:text-black",
                            "text-black"
                          )
                        : "DescriptionNav"
                    }
                    onClick={() => setDetailOptions(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[.25rem] w-full bg-[#eaeaea]"></div>
            {/* description/solution section */}
            <div className="flex h-[calc(100vh-94px)] w-full overflow-y-auto">
              <div className="w-[.4rem] bg-[#eaeaea]"></div>
              <div className="w-full rounded-b-[10px] px-5">
                {/* problem title */}
                <div className="mt-5 flex space-x-4">
                  <div className="mr-2 flex-1 text-lg font-medium ">
                    Two Sum
                  </div>
                </div>
                {/* problem meta data */}
                <div className="mt-3 flex items-center">
                  <div className="inline-block rounded-full border px-3 py-1 text-xs font-medium">
                    Easy
                  </div>
                  <div className="text-green-s text-dark-green-s ml-4  rounded p-[3px] text-lg transition-colors duration-200">
                    <BsCheck2Circle />
                  </div>
                  <p className="ml-4 text-xs font-medium">Hashing</p>
                </div>
                {/* problem descriptions */}
                <div className="mt-4 text-sm">
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
                  <p className="mt-3">
                    You can return the answer in any order.
                  </p>
                </div>
                {/* problem examples */}
                <div className="mt-10">
                  <div>
                    <p className="font-medium">Example 1: </p>
                    <div>
                      <pre className="my-[1rem] whitespace-pre-wrap rounded-md border-2 border-[#faf8f8] bg-[#f7f7f7] p-[1rem] text-[.95rem] text-black">
                        <strong>Input: </strong> nums = [2,7,11,15], target = 9{" "}
                        <br />
                        <strong>Output:</strong> [0,1] <br />
                        <strong>Explanation:</strong>Because nums[0] + nums[1]
                        == 9, we return [0, 1].
                      </pre>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium">Example 2: </p>
                    <div>
                      <pre className="my-[1rem] whitespace-pre-wrap rounded-md border border-[#faf8f8] bg-[#f7f7f7] p-[1rem] text-[.95rem] text-black">
                        <strong>Input: </strong> nums = [3,2,4], target = 6{" "}
                        <br />
                        <strong>Output:</strong> [1,2] <br />
                        <strong>Explanation:</strong>Because nums[1] + nums[2]
                        == 6, we return [1, 2].
                      </pre>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium">Example 3: </p>
                    <div>
                      <pre className="my-[1rem] whitespace-pre-wrap rounded-md border border-[#faf8f8] bg-[#f7f7f7] p-[1rem] text-[.95rem] text-black">
                        <strong className="text-[1rem]">Input: </strong> nums =
                        [3,3], target = 6
                        <br />
                        <strong className="text-[1rem]">
                          Output:
                        </strong> [0,1] <br />
                      </pre>
                    </div>
                  </div>
                </div>
                {/* probloem constraints */}
                <div className="mt-8 pb-4">
                  <div className="text-sm font-medium ">Constraints:</div>
                  <ul className="ml-5 list-disc">
                    <li className="mt-2">
                      <code>
                        2 {" <= "} nums.length {" <= "} 10<sup>4</sup>
                      </code>
                    </li>

                    <li className="mt-2">
                      <code>
                        -10<sup>-9</sup> {" <= "} nums[i] {" <= "} 10
                        <sup>-9</sup>
                      </code>
                    </li>
                    <li className="mt-2">
                      <code>
                        -10<sup>-9</sup> {" <= "} target {" <= "} 10
                        <sup>-9</sup>
                      </code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>CodeEditor</div>
        </Split>
        <div className="h-[.5rem] w-full bg-[#eaeaea]"></div>
      </>
    </main>
  );
}
