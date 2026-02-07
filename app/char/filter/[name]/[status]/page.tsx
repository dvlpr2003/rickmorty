const charFilter = async ({
  params,
}: {
  params: Promise<{ name: string; status: string }>;
}) => {
  const { name, status } = await params;
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`,
  );
  const data = await res.json();
  console.log(data);

  return <div>hello this is filter page</div>;
};

export default charFilter;
