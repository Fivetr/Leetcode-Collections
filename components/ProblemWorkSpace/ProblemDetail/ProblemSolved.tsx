"use client";

import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebase_auth, firestore } from "@/firebase/firebase";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
type ProblemSolvedProps = {
  id: string;
};

function ProblemSolved({ id }: ProblemSolvedProps) {
  const [user] = useAuthState(firebase_auth);
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState({ solved: false });

  useEffect(() => {
    const getData = async () => {
      const userRef = doc(firestore, "users", user!.uid);
      setloading(true);
      const userSnap = await getDoc(userRef);
      setloading(false);

      if (userSnap.exists()) {
        const data = userSnap.data();
        const { solvedProblems } = data;
        setdata({
          solved: solvedProblems.includes(id), //solvedProblems["two-sum", "vaild-anagram"]
        });
      }
    };
    if (user) getData();
    return () => {
      setdata({ solved: false });
    };
  }, [id, user]);

  return (
    <div>
      {!loading && user ? (
        <div
          className={`ml-4 rounded p-[3px] text-lg ${
            data.solved ? "text-green-700" : "text-black"
          }`}
        >
          <BsCheck2Circle />
        </div>
      ) : loading && user ? (
        <div className="ml-4 h-6 w-6 shrink-0 animate-pulse rounded-full bg-sky-200"></div>
      ) : null}
    </div>
  );
}

export default ProblemSolved;
