"use client";
import { useRouter, useSearchParams } from "next/navigation";
const SearchFilter = () => {
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/?page=1&status=${e.target.value}`);
  };
  return (
    <select onChange={handleChange}>
      <option>alive</option>
      <option>dead</option>
    </select>
  );
};

export default SearchFilter;
