import React from "react";
import { AiOutlineSetting, AiOutlineFullscreen } from "react-icons/ai";

function CodeEditorNav() {
  return (
    <div>
      <div className="flex h-11 w-full items-center overflow-x-hidden bg-[#eaeaea] pt-2">
        <div className="flex w-full items-center justify-between gap-5 rounded-t-[5px] bg-white px-5 py-[10px] text-xs">
          <div className="text-center">JavaScript</div>
          <div className="text-dark-gray-6 h-4 w-4 cursor-pointer text-lg font-bold">
            <AiOutlineFullscreen />
          </div>
        </div>
        <div className="w-[.4rem] bg-[#eaeaea]"></div>
      </div>
      <div className="h-[.25rem] w-full bg-[#eaeaea]"></div>
    </div>
  );
}

export default CodeEditorNav;
