import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebase_auth } from "../../firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
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
        <div className="flex h-full items-center justify-center gap-12">
          <div className="flex h-full items-center justify-center">
            <Link href="/">
              <Image src={logo} alt="Logo" height={25} width={25} />
            </Link>
          </div>

          {problemPage ? (
            <div className="flex flex-1 items-center justify-center gap-2">
              <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg border duration-300 hover:bg-gray-200">
                <FaChevronLeft />
              </div>
              <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg border duration-300 hover:bg-slate-200">
                <FaChevronRight />
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex flex-1 items-center justify-end gap-7 space-x-4">
          <Timer />
          {!user ? (
            <div>
              <Link href="/login">
                <button className="btn text-sm hover:scale-105">Sign In</button>
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
