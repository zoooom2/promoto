import BlogHeroSectionHeader from './subsection/BlogHeroSectionHeader';

import BlogHeroCardSection from './subsection/BlogHeroCardSection';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

const fetchFeaturedBlog = async () => {
	const featuredData =
		await client.fetch(groq`*[_type == "post" && featured==true] {
  title,
  publishedAt,
  blogThumbnail,
  author,
  subtitle,
  body,
  slug
}`);
	return featuredData;
};

const BlogHeroSection = async ({
	params,
}: {
	params: Promise<{ page: string }>;
}) => {
	const page = parseInt((await params).page || '1', 10);
	const featuredData = await fetchFeaturedBlog();
	if (page !== 1) return null;
	return (
		<section className='box-border w-full flex flex-col itms-center pt-30 promoto-tablet:pt-36 promoto-laptop:pt-41 px-5 promoto-tablet:px-9 max-w-300 z-1 content-center gap-2.5'>
			<div className='w-full flex flex-col justify-center items-center overflow-visible content-center gap-8 promoto-tablet:gap-12 promoto-laptop:gap-20'>
				<BlogHeroSectionHeader />
				{/*bloghero*/}
				<BlogHeroCardSection data={featuredData} />
				{/*bloghero*/}
			</div>
		</section>
	);
};

export default BlogHeroSection;
