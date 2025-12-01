import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { groq } from 'next-sanity';
import Image from 'next/image';
import CustomPortableRenderer from '@/sanity/lib/CustomPortableRenderer';
const query = `*[_type == "post" && slug.current==$slug] {
  title,
  publishedAt,
  blogThumbnail,
  author,
  subtitle,
  body
}`;

const fetchBlog = (slug: string) => {
	const data = client.fetch(groq`${query}`, { slug });

	return data;
};

const SingleBlogPage = async ({ slug }: { slug: string }) => {
	const blog = await fetchBlog(slug);
	const data = blog[0];
	return (
		<section className='pt-30 promoto-tablet:pt-36 promoto-laptop:pt-41 bg-promoto-off-white px-5 promoto-tablet:px-9 pb-20 promoto-tablet:pb-25 laptop:pb-36 font-hanken max-w-300'>
			<div className='w-full flex flex-col items-center gap-12 promoto-tablet:gap-16 promoto-laptop:gap-18'>
				<div className='gap-6 flex flex-col justify-center items-center'>
					<div className='flex justify-center divide-promoto-dark/20 divide-x-2 text-[16px] capitalize'>
						<p className='pr-1.5 leading-[1.2]'>
							{data.publishedAt.split('T')[0]}
						</p>
						<p className='pl-1.5 leading-[1.2]'>{data.author}</p>
					</div>
					<h1 className='text-[32px] promoto-tablet:text-[48px] promoto-laptop:text-[60px] text-promoto-dark leading-[1.2] font-bold  text-center'>
						{data.title}
					</h1>
				</div>
				<div className='w-full flex flex-col justify-center items-center max-w-[810px] gap-26'>
					<div className='w-full promoto-tablet:max-w-[92%] promoto-laptop:w-full flex flex-col justify-center overflow-clip content-center gap-10 promoto-tablet:gap-12 promoto-laptop:gap-14'>
						<figure className='h-64 promoto-tablet:h-[368px] promoto-laptop:h-[468px] w-full relative'>
							<Image
								src={urlFor(data.blogThumbnail).url()}
								alt='blog thumbnail'
								fill
								className='object-cover object-top w-full h-full'
							/>
						</figure>
						<div className='prose prose-h1:text-xl w-full max-w-none prose-h6:text-[20px] leading-[1.6] prose-promoto-dark prose-h6:font-semibold'>
							<CustomPortableRenderer value={data.body} />
						</div>
					</div>
					<div>explore more</div>
				</div>
			</div>
		</section>
	);
};

export default SingleBlogPage;
