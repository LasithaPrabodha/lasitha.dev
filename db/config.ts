import { defineDb, defineTable, column } from "astro:db";

const ViewCount = defineTable({
  columns: {
    slug: column.text({ primaryKey: true }),
    count: column.number(),
    lastViewed: column.date(),
  },
});

export default defineDb({
  tables: { ViewCount },
});
