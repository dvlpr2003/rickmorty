import { mutation, query } from "@/convex/_generated/server";
import { v } from "convex/values";

export const saveInfo = mutation({
  args: { Name: v.string(), Age: v.number() },
  handler: async (ctx, args) => {
    await ctx.db.insert("Infox", {
      Name: args.Name,
      Age: args.Age,
    });
  },
});

export const retrieveInfo = query({
  handler: async (ctx) => {
    return await ctx.db.query("Infox").collect();
  },
});
