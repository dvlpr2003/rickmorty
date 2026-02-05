import Card from "@/components/card";
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
    <div className="flex gap-1">
      {data.results.map((x, i) => (
        <Card
          key={i}
          name={x.name}
          gender={x.gender}
          status={x.status}
          image={x.image}
        />
      ))}
    </div>
  );
}
