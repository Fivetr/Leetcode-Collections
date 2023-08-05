"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { BsCheckCircle } from "react-icons/bs";
import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";
import { problem_MetaData } from "@/types";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebase_auth } from "@/firebase/firebase";

type LeetCodeProblemProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function LeetCodeProblem({ setLoading }: LeetCodeProblemProps) {
  const [user] = useAuthState(firebase_auth);

  const currentCategory = useSelector(
    (state: RootState) => state.CurrentCategory.value
  );

  const [YoutubeSolution, setYoutubeSolution] = useState({
    isOpen: false,
    videolink: "",
  });

  const Problems = ((
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const [problems, setproblems] = useState<problem_MetaData[]>([]);
    useEffect(() => {
      const getProblem = async () => {
        setLoading(true);
        const querySnapshot = await getDocs(collection(firestore, "problems"));
        const tmp: problem_MetaData[] = [];
        querySnapshot.forEach((doc) => {
          tmp.push({ id: doc.id, ...doc.data() } as problem_MetaData);
        });
        setproblems(tmp);
        setLoading(false);
      };
      getProblem();
    }, []);
    return problems;
  })(setLoading);

  const SolvedProblems = (() => {
    const [problems, setproblems] = useState<string[]>([]);
    const [user] = useAuthState(firebase_auth);
    useEffect(() => {
      const getProblem = async () => {
        setLoading(true);
        const userRef = doc(firestore, "users", user!.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setproblems(userDoc.data()!.solvedProblems);
        }
      };
      if (user) getProblem();
    }, [user]);
    return problems;
  })();

  return (
    <>
      <tbody>
        {Problems.filter((value) => {
          return value.category === currentCategory;
        })
          .sort((a, b) => {
            return a.rank - b.rank;
          })
          .map(({ id, title, difficulty, videolink }) => {
            return (
              <tr key={id} className=" border-b">
                {/* problem status */}
                {user ? (
                  <th className="table_problem">
                    <div
                      className={`flex items-center justify-center ${
                        SolvedProblems.includes(id)
                          ? "text-green-700"
                          : "text-black"
                      }`}
                    >
                      <BsCheckCircle fontSize={"15"} width="18" />
                    </div>
                  </th>
                ) : null}
                {/* problem title */}
                <th className="table_problem cursor-pointer font-extrabold hover:text-blue-400">
                  <Link href={`/leetcode-problems/${id}`}>{title}</Link>
                </th>
                {/* problem difficulty */}
                <th
                  className={`table_problem font-extrabold ${
                    difficulty === "Easy"
                      ? "text-green-600"
                      : difficulty === "Medium"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {difficulty}
                </th>
                {/* youtube solution link */}
                <th className="table_problem">
                  {videolink ? (
                    <div className="flex w-full cursor-pointer items-center justify-center text-red-600 duration-300 hover:scale-125">
                      <AiFillYoutube
                        fontSize={30}
                        onClick={() => {
                          setYoutubeSolution({
                            isOpen: true,
                            videolink: videolink,
                          });
                        }}
                      />
                    </div>
                  ) : (
                    <p>Missing</p>
                  )}
                </th>
              </tr>
            );
          })}
      </tbody>
      {/* youtube player */}
      {YoutubeSolution.isOpen ? (
        <tfoot className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
          {/* background */}
          <div
            className="absolute left-0 top-0 z-10 h-screen w-screen bg-black opacity-70"
            onClick={() => setYoutubeSolution({ isOpen: false, videolink: "" })}
          ></div>
          {/* video player */}
          <div className="relative z-50 h-full w-full max-w-4xl px-6">
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="relative w-full">
                <IoClose
                  fontSize={"35"}
                  className="absolute -top-12 right-0 cursor-pointer duration-500 hover:scale-110 hover:text-white"
                  onClick={() =>
                    setYoutubeSolution({ isOpen: false, videolink: "" })
                  }
                />
                <YouTube
                  videoId={YoutubeSolution.videolink}
                  loading="lazy"
                  iframeClassName="w-full min-h-[500px]"
                />
              </div>
            </div>
          </div>
        </tfoot>
      ) : null}
    </>
  );
}

export default LeetCodeProblem;
