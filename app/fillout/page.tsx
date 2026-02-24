"use client";

import { filloutForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
const fillOut = () => {
  const info = useQuery(api.info.retrieveInfo);
  return (
    <div>
      <form action={filloutForm}>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="number" name="age" placeholder="Age" />
        <Input type="text" name="address" placeholder="Address" />

        <select name="isgraduate">
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
        <Button type="submit">Update details</Button>
      </form>
      {info &&
        info.map((x) => (
          <div>
            <p>{x.name}</p>
            <p>{x.address}</p>
            <p>{x.isgraduate}</p>
            <p>{x.age}</p>
          </div>
        ))}
    </div>
  );
};

export default fillOut;
