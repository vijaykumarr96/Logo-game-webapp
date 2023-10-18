import Image from "next/image";
import React from "react";
interface arrowprops {
  className: string;
}

const ArrowDark = ({ className }: arrowprops) => {
  return (
    <Image
      src={"/arrow-right-dark.svg"}
      alt="arrow"
      width={47}
      height={47}
      className={className}
    />
  );
};

export default ArrowDark;
