"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
interface CardProps {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}
const Card = ({ name, status, gender, image, id }: CardProps) => {
  const handleClick = (x: string) => {
    alert(x);
  };
  return (
    <Link
      href={`/character/${id + 1}`}
      className="border border-2 border-white bg-amber-50 text-black h-fit"
    >
      <h1>{name}</h1>
      <Image src={image} alt="Character Image" width={200} height={200} />
      <p>{status}</p>
      <p>{gender}</p>
      <Button onButtonClick={handleClick} name={name} />
    </Link>
  );
};

export default Card;
