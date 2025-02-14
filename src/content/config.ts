import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "src/content/blog" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const personalProjects = defineCollection({
  type: "data",
  // loader: glob({ pattern: "*.md", base: "src/content/personal-projects" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    links: z.array(z.object({ href: z.string(), ariaLabel: z.string(), icon: z.string() })),
  }),
});

const proProjects = defineCollection({
  type: "data",
  // loader: glob({ pattern: "*.md", base: "src/content/professional-projects" }),
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
  loader: file("src/content/skills/tech-skills.json"),
  // Type-check frontmatter using a schema
  schema: z.object({ id: z.number(), name: z.string() }),
});

export const collections = {
  blog,
  "personal-projects": personalProjects,
  "professional-projects": proProjects,
  skills: techSkills,
};
