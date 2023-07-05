"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { ProblemCategory } from "../../leetcode_problems/problems";
import { SetValue } from "../../app/redux/features/category-nav-slice";

type NavButtonProps = {
  category: ProblemCategory;
  idx: number;
};

function NavButton({ category, idx }: NavButtonProps) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div key={idx}>
      <button
        className="problem_btn focus:bg-cyan-400 focus:border-sky-400 "
        onClick={() => dispatch(SetValue(category))}
      >
        {category}
      </button>
    </div>
  );
}

export default NavButton;
