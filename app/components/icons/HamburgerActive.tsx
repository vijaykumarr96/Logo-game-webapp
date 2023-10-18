import Image from "next/image";
import React from "react";
import { HamburgerProps } from "./Hamburger";
const HamburgerActive = ({ handleClick }: HamburgerProps) => {
  return (
    <Image
      src={"/hamburger-active.svg"}
      alt="hamburger"
      width={48}
      height={32}
      onClick={handleClick}
    />
  );
};

export default HamburgerActive;
