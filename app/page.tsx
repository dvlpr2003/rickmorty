import Card from "@/components/card";
import FilterBox from "@/components/filter";

import Link from "next/link";
interface DataProp {
  name: string;
  status: string;
  gender: string;
  image: string;
}
interface RickmortyProp {
  results: DataProp[];
}
export default async function Home() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data: RickmortyProp = await res.json();
  console.log(data.results[0].image);

  return (
    <div className="">
      {data.results.map((x, i) => (
        <Card
          key={i}
          id={i}
          name={x.name}
          gender={x.gender}
          status={x.status}
          image={x.image}
        />
      ))}
      <Link href={`/character/`} className="text-white">
        link
      </Link>
      <FilterBox />
    </div>
  );
}
