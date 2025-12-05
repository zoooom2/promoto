import BlogsGridSection from '@/components/blog/allBlogsSection/BlogsGridSection';
import BlogHeroSection from '@/components/blog/blogHeroSection/BlogHeroSection';
import CTA from '@/components/global/CTA/CTA';
import { Suspense } from 'react';

const page = async ({
	searchParams,
}: {
	searchParams: Promise<{ page: string }>;
}) => {
	return (
		<Suspense
			fallback={
				<div className='w-screen h-screen grid justify-center items-center bg-promoto-off-white text-2xl font-hanken capitalize'>
					loading
				</div>
			}
		>
			<main
				className='w-full flex flex-col items-center bg-promoto-off-white overflow-clip content-center'
				id=''
			>
				<BlogHeroSection params={searchParams} />
				<BlogsGridSection params={searchParams} />
				<CTA />
			</main>
		</Suspense>
	);
};

export default page;
