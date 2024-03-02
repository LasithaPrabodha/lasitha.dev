import { getCollection } from "astro:content";
import generateOgImage, { type OgData } from "@utils/openGraph";
import type { APIRoute } from "astro";

interface Props {
  title: string;
  pubDate: Date;
}

const blogs = await getCollection("blog");
const result = blogs.map((blog) => ({
  params: { slug: blog.slug },
  props: {
    title: blog.data.title,
    pubDate: blog.data.pubDate,
  },
}));
export const GET: APIRoute<OgData> = async ({ params }) => {
  const blog = result.find((b) => b.params.slug === params.slug);
  if (blog == null) {
    return new Response(null, {
      status: 404,
    });
  }

  const props = blog.props as Props;

  const response = await generateOgImage(props.title, props.pubDate);
  return new Response(response, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
};
