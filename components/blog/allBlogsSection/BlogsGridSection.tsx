import { groq } from 'next-sanity';
import BlogGridCard from './BlogGridCard';
import { client } from '@/sanity/lib/client';
import { BlogCard } from '@/lib/types';
import { urlFor } from '@/sanity/lib/image';
import Pagination from '@/components/global/Pagination';

const getAllBlogs = async ({
	startIndex,
	endIndex,
}: {
	startIndex: number;
	endIndex: number;
}) => {
	const blogs =
		await client.fetch(groq`*[_type == "post"]|order(_createdAt desc) [${startIndex}...${endIndex}]{
        title,
        "slug":slug.current,
        blogThumbnail
        }`);

	return blogs;
};

const PAGE_SIZE = 3;
interface Props {
	page: string;
}

const BlogsGridSection = async ({ params }: { params: Promise<Props> }) => {
	const page = parseInt((await params).page || '1', 10);
	const startIndex = (page - 1) * PAGE_SIZE;
	const endIndex = startIndex + PAGE_SIZE;

	const data: BlogCard[] = await getAllBlogs({ startIndex, endIndex });

	const total = await client.fetch(groq`count(*[_type == "post"])`);
	const totalPages = Math.ceil(total / PAGE_SIZE);

	const gridCards = data.map((card, index) => (
		<BlogGridCard
			key={index}
			title={card.title}
			slug={card.slug}
			thumbnail={urlFor(card.blogThumbnail).url()}
		/>
	));

	return (
		<section className='box-border w-full flex flex-col items--center py-20 promoto-tablet:py-25 promoto-laptop:py-36 px-5 promoto-tablet:px-9 max-w-300 overflow-clip content-center gap-2.5'>
			<div className='w-full flex flex-col justify-center items-center overflow-hidden content gap-8 promoto-tablet:gap-12 promoto-laptop:gap-20'>
				<div className='w-full flex justify-center items-center max-w-100 content-center gap-2'>
					<h3 className='font-hanken text-promoto-dark font-medium text-[28px] promoto-tablet:text-[36px] promoto-laptop:text-[44px] leading-[1.2] whitespace-pre'>
						All the
					</h3>
					<h3 className='font-libre text-promoto-green italic text-[28px] promoto-tablet:text-[36px] promoto-laptop:text-[44px] leading-[1.2] whitespace-pre'>
						Articles
					</h3>
				</div>
				<div className='w-full flex flex-col justify-center overflow-clip content-center gap-15 promoto-tablet:gap-20 promoto-laptop:gap-25'>
					<div className='w-full grid grid-cols-1 promoto-tablet:grid-cols-2 promoto-laptop:grid-cols-3 justify-center gap-y-10 gap-x-6'>
						{gridCards}
					</div>
					<Pagination
						total={totalPages}
						page={page}
					/>
				</div>
			</div>
		</section>
	);
};

export default BlogsGridSection;
