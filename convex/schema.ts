import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // This is just a simple table definition
  favorites: defineTable({
    characterId: v.string(),
    name: v.string(),
  }),
  Comments: defineTable({
    characterId: v.string(),
    text: v.string(),
  }),
});
