import { defineCollection, z,reference } from "astro:content"

export const collections = {
	posts: defineCollection({
		type: "content",
		schema: z.object({
			title: z.string(),
			date: z.date(),
			description: z.string().optional(),
			categories: z.array(reference("categories")).optional()
		}),
	}),
	pages: defineCollection({
		type: "content",
		schema: z.object({
			title: z.string()
		})
	}),

	categories: defineCollection({
		type: "content",
		schema: z.object({
			title: z.string()
		})
	})
}
