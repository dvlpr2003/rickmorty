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
