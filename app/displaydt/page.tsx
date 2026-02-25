"use client";

import { useQuery, useMutation } from "convex/react";

import { api } from "@/convex/_generated/api";
interface dataProps {
  _id: string;
  Name: string;
  Age: number;
}
const Display = () => {
  const data = useQuery(api.info.retrieveInfo);
  const deleteData = useMutation(api.info.deleteinfo);
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
            <button
              onClick={() => deleteData({ id: x._id })}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            ></button>
          </div>
        ))}{" "}
      {/* Changed } to ) */}
    </div>
  );
};
export default Display;
