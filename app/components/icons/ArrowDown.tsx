import Image from "next/image";
import React from "react";

const DownArrow = () => {
  return (
    <Image src={"/down-arrow.svg"} alt="down-arrow" width={20} height={10} />
  );
};

export default DownArrow;
