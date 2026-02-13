"use server"; // 👈 This is the magic line. It runs on the server.

import { redirect } from "next/navigation";

// This function receives the form data automatically
export async function searchCharacter(formData: FormData) {
  // 1. Get the text the user typed
  const searchName = formData.get("name");
  const searchStatus = formData.get("status");

  // Safety check: Is it a string?
  if (
    typeof searchName !== "string" ||
    !searchName ||
    typeof searchStatus !== "string" ||
    !searchStatus
  ) {
    return;
  }

  // 2. Redirect the user to the dynamic page
  // We force it to lowercase because the API expects "pikachu", not "Pikachu"
  redirect(`/char/filter/${searchName}/${searchStatus}`);
}

import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api"; // 👈 This might have a red squiggly for a second, it's ok!
import { revalidatePath } from "next/cache";

// Connect to your database using the URL from .env.local
const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

async function toggleFavorite(formData: FormData) {
  // 1. Extract data from the form
  const characterId = formData.get("characterId") as string;
  const characterName = formData.get("characterName") as string;

  if (!characterId) return;

  // 2. Call the Convex function we just wrote
  await client.mutation(api.favorites.saveFavorite, {
    characterId,
    name: characterName,
  });

  // 3. Refresh the page
  revalidatePath("/");
}

export { toggleFavorite };
