import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

function Header() {
  return (
    <div className="flex justify-start p-2 items-center gap-2">
      <Image src={logo} alt="logo" width={35} height={35} />
      <h3>LeetCode Collections</h3>
    </div>
  );
}

export default Header;
