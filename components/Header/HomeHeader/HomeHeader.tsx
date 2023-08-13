"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebase_auth } from "@/firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import ProblemList from "./ProblemList";
import ProblemNav from "./ProblemNav";
import Timer from "./Timer";
import { RootState, AppDispatch } from "@/app/redux/store";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { problems } from "@/leetcode_problems/index";
import { SetValue } from "@/app/redux/features/category-nav-slice";

type HomeHeaderPros = {
  problemPage?: boolean;
  problemId?: string;
};

function HomeHeader({ problemPage, problemId }: HomeHeaderPros) {
  const dispatch = useDispatch<AppDispatch>();
  const [user] = useAuthState(firebase_auth);
  const [signOut, loading, error] = useSignOut(firebase_auth);
  const [category_problems, setCategory_problems] = useState<string[]>([]);

  const currentCategory = useSelector(
    (state: RootState) => state.CurrentCategory.value
  );
  if (problemPage && problemId) {
    dispatch(SetValue(problems[problemId].category));
  }

  useEffect(() => {
    const tmp: string[] = [];
    for (const key in problems) {
      if (problems[key].category === currentCategory) {
        tmp.push(problems[key].id);
      }
    }
    setCategory_problems(tmp);
  }, [currentCategory]);

  return (
    <nav className="relative flex h-[3rem] w-full shrink-0 items-center border-b px-5">
      <div className="flex h-full w-full items-center justify-between">
        {/* left side of header */}
        <div className="flex h-full items-center justify-center gap-6 ">
          {/* leetcode logo */}
          <div className="flex h-full items-center justify-center">
            <Link href="/">
              <Image src={logo} alt="Logo" height={20} width={20} />
            </Link>
          </div>
          {/* render problem navagation if currently in problem work space page */}
          {problemPage ? (
            <div className="flex flex-1 cursor-pointer items-center justify-center gap-2 px-2 py-2">
              <ProblemList
                category_problems={category_problems}
                problemId={problemId}
              />

              {/* problem navigate icon*/}
              <ProblemNav
                problemId={problemId}
                category_problems={category_problems}
                currentCategory={currentCategory}
              />
            </div>
          ) : null}
        </div>
        {/* right side of header */}
        <div className="flex flex-1 items-center justify-end gap-7 space-x-4">
          {/* render problem navagation if currently in problem work space page */}
          {problemPage && user ? <Timer /> : null}

          {/* check if user is logged in  */}
          {!user ? (
            <div>
              <Link href="/login">
                <button className="inline-block cursor-pointer rounded-md border border-cyan-400 bg-cyan-400 px-3 py-1 text-center text-xs font-semibold text-white no-underline hover:border-sky-500 hover:bg-cyan-600">
                  Sign In
                </button>
              </Link>
            </div>
          ) : (
            <button
              className="btn text-sm hover:scale-105"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default HomeHeader;
