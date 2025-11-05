// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    responsibilities: z.string().optional(),
    live_url: z.string().optional(),
    company: z.string().optional(),
    pub_date: z.string().optional(),
    project_tags: z.string().optional(),
    order: z.number().optional(),
    image: z.string().optional(),
  }),
})

// 4. Export a single `collections` object to register you collection(s)
export const collections = { projects }
