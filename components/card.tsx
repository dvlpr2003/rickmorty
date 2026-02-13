"use client";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
interface CardProps {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}
const Card = ({ name, status, gender, image, id }: CardProps) => {
  return (
    <div>
      <Link
        href={`/character/${id}`}
        className="border border-2 border-white bg-amber-50 text-black h-fit"
      >
        <h1>{name}</h1>
        <Image src={image} alt="Character Image" width={200} height={200} />
        <p>{status}</p>
        <p>{gender}</p>
      </Link>
      <FavoriteButton id={`${id}`} name={name} />
    </div>
  );
};

export default Card;
