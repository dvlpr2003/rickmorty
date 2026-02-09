import Card from "@/components/card";

interface items {
  name: string;
  status: string;
  gender: string;
  image: string;
}
interface DataProps {
  results: items[];
}

const charFilter = async ({
  params,
}: {
  params: Promise<{ name: string; status: string }>;
}) => {
  const { name, status } = await params;
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`,
  );
  const data: DataProps = await res.json();

  return (
    <div>
      {data.results.map((it, i) => (
        <Card
          key={i}
          id={i}
          name={it.name}
          status={it.status}
          gender={it.gender}
          image={it.image}
        />
      ))}
    </div>
  );
};

export default charFilter;
