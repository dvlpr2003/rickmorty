"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
interface dataProps {
  Name: string;
  Age: number;
}
const Display = () => {
  const data = useQuery(api.info.retrieveInfo);
  if (data === undefined) {
    return <div>Loading users...</div>;
    // ^ React stops here and waits. It does not run the code below.
  }
  console.log(data);
  return (
    <div>
      {data &&
        data.map((x: dataProps) => (
          <div>
            <p>{x.Name}</p>
            <p>{x.Age}</p>
          </div>
        ))}{" "}
      {/* Changed } to ) */}
    </div>
  );
};
export default Display;
