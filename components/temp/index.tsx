"use client";
import React from "react";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";

function index() {
  const [Input, setInput] = useState({
    category: "",
    difficulty: "",
    id: "",
    rank: 0,
    title: "",
    videolink: "",
  });

  const handleChange = (e: any) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newProblem = {
      ...Input,
      rank: Number(Input.rank),
    };
    await setDoc(doc(firestore, "problems", Input.id), newProblem);
    alert("saved");
  };
  return (
    <div>
      <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="p-2"
          type="text"
          placeholder="category"
          name="category"
        ></input>
        <input
          onChange={handleChange}
          className="p-2"
          type="text"
          placeholder="difficulty"
          name="difficulty"
        ></input>
        <input
          onChange={handleChange}
          className="p-2"
          type="text"
          placeholder="id"
          name="id"
        ></input>
        <input
          onChange={handleChange}
          className="p-2"
          type="text"
          placeholder="rank"
          name="rank"
        ></input>
        <input
          onChange={handleChange}
          className="p-2"
          type="text"
          placeholder="title"
          name="title"
        ></input>
        <input
          onChange={handleChange}
          className="p-2"
          type="text"
          placeholder="videolink"
          name="videolink"
        ></input>
        <button>Save</button>
      </form>
    </div>
  );
}

export default index;
