import { mutation } from "@/convex/_generated/server";

import { v } from "convex/values";

export const saveInfo = mutation({
  args: {
    name: v.string(),
    age: v.number(),
    address: v.string(),
    isgraduate: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("Info", {
      name: args.name,
      age: args.age,
      address: args.address,
      isgraduate: args.isgraduate,
    });
  },
});
