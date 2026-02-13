import { toggleFavorite } from "@/app/actions";

export default function FavoriteButton({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  return (
    // The Action is passed directly to the form
    <form action={toggleFavorite}>
      {/* Hidden inputs to pass data to the server */}
      <input type="hidden" name="characterId" value={id} />
      <input type="hidden" name="characterName" value={name} />

      <button
        type="submit"
        className="mt-2 px-4 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition"
      >
        ❤️ Favorite
      </button>
    </form>
  );
}
