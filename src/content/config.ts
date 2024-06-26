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

const projects = defineCollection({
  type: "data",
  // Type-check frontmatter using a schema
  schema: z.object({
    id: z.number(),
    title: z.string(),
    position: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    links: z.array(z.object({ href: z.string(), ariaLabel: z.string(), icon: z.string() })),
  }),
});

const techSkills = defineCollection({
  type: "data",
  // Type-check frontmatter using a schema
  schema: z.array(z.object({ name: z.string() })),
});

export const collections = { blog, projects, "tech-skills": techSkills };
