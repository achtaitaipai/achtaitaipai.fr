import { defineCollection, z } from 'astro:content'

export const collections = {
	stuff: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			year: z.number(),
			type: z.string(),
			description: z.string(),
		}),
	}),
}
