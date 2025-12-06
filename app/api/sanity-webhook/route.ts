import { generateEmbeddingForPost } from '@/sanity/lib/embedding';

export async function POST(req: Request) {
	const body = await req.json();

	// Sanity sends _id on publish
	const postId = body?._id;

	if (!postId) {
		return new Response('No _id', { status: 400 });
	}

	await generateEmbeddingForPost(postId);

	return new Response('ok');
}
