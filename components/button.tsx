"use client";
interface ButtonProp {
  name: string;
  onButtonClick: (name: string) => void;
}

const Button = ({ onButtonClick, name }: ButtonProp) => {
  return <button onClick={() => onButtonClick(name)}>click</button>;
};

export default Button;
