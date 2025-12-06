import { cosineSimilarity } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { Post } from '@/sanity/schemaTypes/sanity-schema-types';

export async function getRelatedPosts(slug: string) {
	// 1. Get current post
	const current: Post = await client.fetch(
		`*[_type == "post" && slug.current == $slug][0]{_id, title, embedding}`,
		{ slug }
	);

	// 2. Get all other posts with embeddings
	const posts: Post[] = await client.fetch(`
    *[_type == "post" && defined(embedding)]{
      _id, title, slug, mainImage, embedding
    }
  `);

	// 3. Compute similarity
	const related = posts
		.filter((p) => p._id !== current._id)
		.map((p) => ({
			...p,
			similarity: cosineSimilarity(current.embedding, p.embedding),
		}))
		.sort((a, b) => b.similarity - a.similarity)
		.slice(0, 4);

	return related;
}
