import BlogsGridSection from '@/components/blog/allBlogsSection/BlogsGridSection';
import BlogHeroSection from '@/components/blog/blogHeroSection/BlogHeroSection';
import CTA from '@/components/global/CTA/CTA';

const page = async () => {
	return (
		<main
			className='w-full flex flex-col items-center bg-promoto-off-white overflow-clip content-center'
			id=''
		>
			<BlogHeroSection />
			<BlogsGridSection />
			<CTA />
		</main>
	);
};

export default page;
