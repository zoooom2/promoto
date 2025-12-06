import { client } from '@/sanity/lib/client';
import OpenAI from 'openai';
import { Post } from '../schemaTypes/sanity-schema-types';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateEmbeddingForPost(postId: string) {
	// 1. Fetch blog
	const post: Post = await client.fetch(
		`*[_type == "post" && _id == $id][0]{title, body}`,
		{ id: postId }
	);

	if (!post) throw new Error('Post not found');

	// Convert Portable Text → plain text
	const bodyText = post.body
		?.map((b) => b.children?.map((c) => c.text).join(' '))
		.join('\n');

	const combinedText = `${post.title}\n${bodyText}`;

	// 2. Generate embedding
	const embedding = await openai.embeddings.create({
		model: 'text-embedding-3-large',
		input: combinedText,
	});

	const vector = embedding.data[0].embedding;

	// 3. Save back to Sanity
	await client.patch(postId).set({ embedding: vector }).commit();

	return { success: true, length: vector.length };
}
