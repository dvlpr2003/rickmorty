import { mutation } from "./_generated/server";
import { v } from "convex/values";

// "mutation" means "we are changing data"
export const saveFavorite = mutation({
  // 1. We expect to receive an ID and a Name
  args: { characterId: v.string(), name: v.string() },

  // 2. This is the function that runs
  handler: async (ctx, args) => {
    // 3. Insert a new row into the "favorites" table
    await ctx.db.insert("favorites", {
      characterId: args.characterId,
      name: args.name,
    });
  },
});
