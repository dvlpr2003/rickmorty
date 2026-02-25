"use server";

import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api"; // 👈 This might have a red squiggly for a second, it's ok!
import { revalidatePath } from "next/cache";
const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

async function updateInfo(formData: FormData) {
  const Name = formData.get("Name") as string;
  const Ax = formData.get("Age") as string;
  const Age = Number(Ax);

  await client.mutation(api.info.saveInfo, {
    Name: Name,
    Age: Age,
  });
  revalidatePath("/displaydt");
}
export { updateInfo };
