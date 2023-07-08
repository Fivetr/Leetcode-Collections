import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebase_auth } from "../../firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Timer from "./Timer";

type HomeHeaderPros = {
  problemPage?: boolean;
};

function HomeHeader({ problemPage }: HomeHeaderPros) {
  const [user] = useAuthState(firebase_auth);
  const [signOut, loading, error] = useSignOut(firebase_auth);

  return (
    <nav className="relative flex h-[3rem] w-full shrink-0 items-center border-b px-5 ">
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex h-full items-center justify-center gap-6">
          <div className="flex h-full items-center justify-center">
            <Link href="/">
              <Image src={logo} alt="Logo" height={20} width={20} />
            </Link>
          </div>

          {problemPage ? (
            <div className="flex flex-1 cursor-pointer items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-1 rounded-md px-2 py-[.15rem] hover:border hover:bg-gray-100">
                <AiOutlineUnorderedList />
                <p className="text-sm font-semibold">Problem List</p>
              </div>
              <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg border p-2 duration-300 hover:bg-gray-100">
                <FaChevronLeft />
              </div>
              <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg border p-2 duration-300 hover:bg-slate-100">
                <FaChevronRight />
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex flex-1 items-center justify-end gap-7 space-x-4">
          {problemPage ? <Timer /> : null}
          {!user ? (
            <div>
              <Link href="/login">
                <button className="inline-block cursor-pointer rounded-md border border-cyan-200 bg-cyan-100 px-3 py-1 text-center text-xs font-semibold no-underline duration-500 hover:scale-110 hover:border-sky-400 hover:bg-cyan-400">
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
