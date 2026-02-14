import { commentsUpdate } from "@/app/actions";

const CommentBox = () => {
  return (
    <form action={commentsUpdate}>
      {/* Hidden inputs to pass data to the server */}
      <input type="text" name="characterId" className="border border-white" />
      <input type="text" name="text" className="border border-b-cyan-300" />

      <button
        type="submit"
        className="mt-2 px-4 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition"
      >
        Update Comment
      </button>
    </form>
  );
};

export default CommentBox;
