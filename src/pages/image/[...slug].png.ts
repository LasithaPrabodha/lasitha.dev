import { getCollection } from "astro:content";
import generateOgImage, { type OgData } from "@utils/openGraph";
import type { APIContext, APIRoute } from "astro";

interface Props {
  title: string;
  pubDate: Date;
}

export async function getStaticPaths() {
  const blogPosts = await getCollection("blog");
  const paths = blogPosts.map((blog) => ({
    params: { slug: blog.slug },
    props: {
      title: blog.data.title,
      pubDate: blog.data.pubDate,
    },
  }));
  return paths;
}
export const GET: APIRoute<OgData> = async (context: APIContext) => {
  const { title, pubDate } = context.props as Props;

  const response = await generateOgImage(title, pubDate);
  return new Response(response, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
};
