"use client";

import { Header, Footer, AuthLayOut } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { useAuthState } from "react-firebase-hooks/auth";
import { open } from "../redux/features/auth-slice";
import { firebase_auth } from "../../firebase/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const auth = useSelector((state: RootState) => state.auth.value);
  const dispatch = useDispatch<AppDispatch>();
  const [user, loading, error] = useAuthState(firebase_auth);
  const [Page, setPage] = useState(true);
  const router = useRouter();

  // if user is authenticated then this page will not be shown
  useEffect(() => {
    if (user) {
      router.push("/");
    }
    if (!loading && !user) setPage(false);
  }, [user, router, loading]);

  if (Page) return null;
  return (
    <>
      <main className="relative h-screen bg-gradient-to-r from-cyan-50 via-sky-200 to-sky-300">
        <div className="mx-auto w-[90%]">
          <Header />
        </div>
        <div className="mt-20 flex h-[70%] flex-col items-center justify-center gap-10 pb-2 short:mt-14">
          <h1 className="mx-auto w-[90%] text-center text-4xl font-extrabold">
            Sign In Here to Unlock All Services
          </h1>
          <button
            role="button"
            type="button"
            className="btn h-[4rem] w-[8rem] text-xl"
            onClick={() => dispatch(open())}
          >
            Sign In
          </button>
        </div>
        {/* check if user clicked the sign in button */}
        {auth.isOpen ? <AuthLayOut /> : null}
        <div className="h-[1rem] bg-gradient-to-r from-cyan-50 via-sky-200 to-sky-300"></div>
      </main>
      <Footer />
    </>
  );
}
