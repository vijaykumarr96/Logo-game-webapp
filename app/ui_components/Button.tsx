import React from "react";

interface ButtonProps {
  className: string;
  children: React.ReactElement;
}
const Button = ({ className, children }: ButtonProps) => {
  return <button className={className}>{children}</button>;
};

export default Button;
