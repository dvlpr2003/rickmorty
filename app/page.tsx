import Card from "@/components/card";
import { notFound } from "next/navigation";
import Link from "next/link";
interface objectProps {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}
interface dataProps {
  results: objectProps[];
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${currentPage}`,
  );
  if (!res.ok) {
    notFound();
  }
  const data: dataProps = await res.json();

  return (
    <div>
      {data.results.map((x, i) => (
        <Card
          key={i}
          id={x.id}
          name={x.name}
          gender={x.gender}
          status={x.status}
          image={x.image}
        />
      ))}
      <button className="bg-white text-black mr-4">
        <Link href={`/?page=${1}`}>Click to one</Link>
      </button>
      <button className="bg-amber-400 text-black">
        <Link href={`/?page=${currentPage + 1}`}>Click</Link>
      </button>
    </div>
  );
}
