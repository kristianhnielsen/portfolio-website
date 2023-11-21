import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      stack: z.array(z.string()),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      github: z.string().url(),
      demo: z.string().url().optional(),
      description: z.string().max(200, "Short description is too long"),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  projects: projectCollection,
};
