"use client";
import React from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { useState, useEffect } from "react";

function CodeEditorNav() {
  // const [isFullScreen, setisFullScreen] = useState(false);
  // const handleClick = () => {
  //   if (isFullScreen) {
  //     document.exitFullscreen();
  //   } else {
  //     document.documentElement.requestFullscreen();
  //   }
  // };

  // useEffect(() => {
  //   function exitHandler(e: any) {
  //     if (!document.fullscreenElement) {
  //       setisFullScreen(false);
  //       return;
  //     }
  //     setisFullScreen(true);
  //   }
  //   if (document.addEventListener) {
  //     document.addEventListener("fullscreenchange", exitHandler);
  //     document.addEventListener("webkitfullscreenchange", exitHandler);
  //     document.addEventListener("mozfullscreenchange", exitHandler);
  //     document.addEventListener("MSFullscreenChange", exitHandler);
  //   }
  //   return () => {
  //     setisFullScreen(true);
  //   };
  // }, [isFullScreen]);

  return (
    <>
      <div className="flex h-11 w-full items-center overflow-x-hidden bg-[#eaeaea] pt-2">
        <div className="flex w-full items-center justify-between gap-5 rounded-t-[5px] bg-white px-5 py-[10px] text-xs">
          <div className="text-center">JavaScript</div>
        </div>
        <div className="w-[.4rem] bg-[#eaeaea]"></div>
      </div>
      <div className="h-[.25rem] w-full bg-[#eaeaea]"></div>
    </>
  );
}

export default CodeEditorNav;
