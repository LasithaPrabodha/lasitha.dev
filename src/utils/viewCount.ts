import { db, eq, sql, ViewCount } from "astro:db";

export async function getViewCount(slug: string) {
  const isProd = import.meta.env.PROD;

  if (isProd) {
    const date = new Date();
    date.toLocaleDateString("en-CA", { timeZone: "America/New_York" });
    await db
      .insert(ViewCount)
      .values({ slug: String(slug), count: 1, lastViewed: date })
      .onConflictDoUpdate({
        target: ViewCount.slug,
        set: { count: sql`${ViewCount.count} + 1`, lastViewed: date },
      });
  }

  const viewCount = await db
    .select()
    .from(ViewCount)
    .where(eq(ViewCount.slug, String(slug)));

  return viewCount;
}
