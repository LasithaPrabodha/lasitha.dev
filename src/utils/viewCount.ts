import { getStore } from "@netlify/blobs";

export async function getViewCount(slug: string): Promise<number | null> {
  try {
    const store = getStore("view-counts");
    const current = (await store.get(slug, { type: "json" }) as number | null) ?? 0;
    const newCount = current + 1;
    await store.set(slug, String(newCount));
    return newCount;
  } catch {
    return null;
  }
}
