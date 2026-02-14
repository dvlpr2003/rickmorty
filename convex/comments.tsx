import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CommentsSave = mutation({
  args: { characterId: v.string(), text: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("Comments", {
      characterId: args.characterId,
      text: args.text,
    });
  },
});
