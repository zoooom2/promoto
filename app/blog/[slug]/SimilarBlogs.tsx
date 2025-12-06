import { getRelatedPosts } from './relatedBlog';

const SimilarBlogs = async ({ slug }: { slug: string }) => {
	const related = await getRelatedPosts(slug);

	return (
		<div>
			{related.map((i) => (
				<div key={slug}>{i.title}</div>
			))}
		</div>
	);
};

export default SimilarBlogs;
