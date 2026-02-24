"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateInfo } from "@/app/actions";

export default function Editor() {
  return (
    <form action={updateInfo}>
      <Input
        className="border-black"
        type="text"
        placeholder="Enter your Name : "
        name="Name"
      />
      <Input
        className="border-black"
        type="number"
        placeholder="Enter your Age"
        name="Age"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
