import { defineCollection, z } from "astro:content";

const experienciasCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		datePub: z.string(),
		img: z.string(),
		description: z.string().optional(),
		date: z.date(),
		tags: z.array(z.string()),
		images: z
			.array(
				z.object({
					src: z.string(),
					alt: z.string(),
					caption: z.string().optional(),
				})
			)
			.optional(),
	}),
});

// Export all collections
export const collections = {
	experiencias: experienciasCollection,
};
