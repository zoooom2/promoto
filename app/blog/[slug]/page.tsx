import SingleBlogPage from '@/components/blog/singleBlog/SingleBlogPage';
import CTA from '@/components/global/CTA/CTA';
import { Suspense } from 'react';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	return (
		<div className='w-full bg-promoto-off-white flex flex-col justify-center items-center'>
			<Suspense
				fallback={
					<div className='w-screen h-screen grid justify-center items-center bg-promoto-off-white text-2xl font-hanken capitalize'>
						loading
					</div>
				}
			>
				<SingleBlogPage params={params} />
			</Suspense>

			<CTA />
		</div>
	);
};

export default page;
