"use client";
import { HomeHeader, Footer, LeetCodeProblem } from "@/components";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebase_auth } from "@/firebase/firebase";
// import Index from "@/components/temp/index";
import ProblemNavBar from "@/components/ProblemTables/ProblemNavBar";
import { useState, useEffect } from "react";
import { useHasMounted } from "@/hooks/useHasMounted";
import Index from "@/components/temp";

export default function Home() {
  const [user] = useAuthState(firebase_auth);
  const [loading, setloading] = useState(true);
  if (!useHasMounted) return null;

  return (
    // problem navigation page
    <>
      <main className="min-h-screen">
        <HomeHeader />
        {/* problem category button */}
        <ProblemNavBar />
        {/* problem meta data table */}
        <div className="relative mx-auto mt-6 overflow-x-auto px-6 pb-10">
          {loading ? (
            <div className="mx-auto max-w-[1240px] animate-pulse px-6 pb-10">
              {[...Array(15)].map((_, idx) => (
                <div
                  className="mt-4 flex items-center justify-center space-x-12 px-6"
                  key={idx}
                >
                  <div className="h-6 w-6 shrink-0 rounded-full bg-sky-200"></div>

                  <div className="h-4 w-32  rounded-full  bg-sky-200 sm:w-52"></div>
                  <div className="h-4 w-32  rounded-full bg-sky-200 sm:w-52"></div>
                  <div className="h-4 w-32 rounded-full bg-sky-200 sm:w-52"></div>
                </div>
              ))}
            </div>
          ) : null}
          <table className="mx-auto w-full max-w-[1300px] text-sm sm:w-7/12">
            {!loading ? (
              <thead className="border-b text-xs uppercase ">
                <tr className="border-b-2 border-black">
                  {user ? (
                    <th scope="col" className="table_heading">
                      Status
                    </th>
                  ) : null}
                  <th scope="col" className="table_heading">
                    Title
                  </th>
                  <th scope="col" className="table_heading">
                    Difficulty
                  </th>
                  <th scope="col" className="table_heading">
                    Solution
                  </th>
                </tr>
              </thead>
            ) : null}
            <LeetCodeProblem setLoading={setloading} />
          </table>
        </div>
        {/* <Index /> */}
      </main>
      <Footer />
    </>
  );
}
