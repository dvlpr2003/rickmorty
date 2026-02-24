import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  Infox: defineTable({
    Name: v.string(),
    Age: v.number(),
  }),
});
