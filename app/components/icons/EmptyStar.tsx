import Image from "next/image";
import React from "react";

const EmptyStar = () => {
  return <Image src={"/star-empty.svg"} alt="star" width={25} height={24} />;
};

export default EmptyStar;
