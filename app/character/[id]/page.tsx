import Image from "next/image";
import { notFound } from "next/navigation";
interface CharacterProps {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

const Character = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.status}</p>
      <p>{data.gender}</p>
      <Image
        src={data.image}
        width={200}
        height={200}
        alt={`${data.name} image`}
      />
    </div>
  );
};

export default Character;
