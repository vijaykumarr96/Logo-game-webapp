import Image from "next/image";
import React from "react";

export interface HamburgerProps {
  handleClick: () => void;
}

const Hamburger = ({ handleClick }: HamburgerProps) => {
  return (
    <Image
      src={"/hamburger.svg"}
      alt="hamburger"
      width={48}
      height={32}
      onClick={handleClick}
    />
  );
};

export default Hamburger;
