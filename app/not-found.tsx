import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Not Found 🔍</h2>
      <p>Could not find that Pokemon.</p>
      <Link
        href={`/?page=${1}`}
        style={{ color: "blue", textDecoration: "underline" }}
      >
        Return Home
      </Link>
    </div>
  );
}
