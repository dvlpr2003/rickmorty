"use client";

import { Button as Shad } from "@/components/ui/button";
interface ButtonProp {
  name: string;
  onButtonClick: (name: string) => void;
}

const Button = ({ onButtonClick, name }: ButtonProp) => {
  return <Shad onClick={() => onButtonClick(name)}>click</Shad>;
};

export default Button;
