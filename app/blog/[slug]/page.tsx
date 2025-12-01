import SingleBlogPage from '@/components/blog/singleBlog/SingleBlogPage';
import CTA from '@/components/global/CTA/CTA';

const page = async ({ params }: { params: { slug: string } }) => {
	const slug = (await params).slug;

	return (
		<div className='w-full bg-promoto-off-white flex flex-col justify-center items-center'>
			<SingleBlogPage slug={slug} />
			<CTA />
		</div>
	);
};

export default page;
