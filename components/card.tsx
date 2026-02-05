"use client";

import Image from "next/image";
import Button from "@/components/button";
interface CardProps {
  name: string;
  status: string;
  gender: string;
  image: string;
}
const Card = ({ name, status, gender, image }: CardProps) => {
  const handleClick = (x: string) => {
    alert(x);
  };
  return (
    <div className="border border-2 border-white bg-amber-50 text-black h-fit">
      <h1>{name}</h1>
      <Image src={image} alt="Character Image" width={200} height={200} />
      <p>{status}</p>
      <p>{gender}</p>
      <Button onButtonClick={handleClick} name={name} />
    </div>
  );
};

export default Card;
