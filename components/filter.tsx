import { searchCharacter } from "@/app/actions";

export default function FilterBox() {
  return (
    // We pass the Server Action directly to the 'action' prop!
    <form
      action={searchCharacter}
      style={{ marginBottom: "20px", textAlign: "center" }}
    >
      <input
        name="name" // This matches 'formData.get("pokemonName")'
        type="text"
        placeholder="name "
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginRight: "10px",
          width: "250px",
        }}
      />
      <input
        name="status" // This matches 'formData.get("pokemonName")'
        type="text"
        placeholder="alive or dead"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginRight: "10px",
          width: "250px",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          background: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
}
