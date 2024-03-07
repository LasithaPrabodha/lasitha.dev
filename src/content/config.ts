import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const professionalProjects = defineCollection({
  type: "data",
  // Type-check frontmatter using a schema
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    links: z.array(z.object({ href: z.string(), ariaLabel: z.string(), icon: z.string() })),
  }),
});

export const collections = { blog, "professional-projects": professionalProjects };
