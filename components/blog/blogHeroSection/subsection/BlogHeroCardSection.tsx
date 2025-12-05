'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { PortableTextBlock } from 'next-sanity';
import { useEffect, useState } from 'react';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { SanityImageSource } from '@sanity/image-url';

interface BlogCardType {
	data: {
		title: string;
		publishedAt: string;
		blogThumbnail: SanityImageSource;
		author: string;
		subtitle: string;
		body: PortableTextBlock[];
		slug: { current: string };
	}[];
}
const BlogHeroCardSection = ({ data }: BlogCardType) => {
	const [featuredBlogIndex, setFeaturedBlogIndex] = useState(0);

	useEffect(() => {
		if (!data || data.length === 0) return;

		const changeFeaturedBlog = setInterval(() => {
			setFeaturedBlogIndex((prevIndex) =>
				data ? (prevIndex + 1) % data.length : 0
			);
		}, 15000);

		return () => clearInterval(changeFeaturedBlog);
	}, [data]);

	return (
		<div className='flex flex-col w-full justify-center items-center gap-5 transition-all duration-2000 ease-in-out content-center'>
			{/*bloghero dynamic*/}
			<div className='w-full promoto-tablet:max-w-[738px] promoto-laptop:max-w-[1128px] flex flex-col promoto-tablet:flex-row items-center p-4 promoto-tablet:p-6 promoto-laptop:p-8 bg-promoto-dark overflow-clip content-center max-promoto-tablet:gap-6 rounded-[20px] relative'>
				<figure className='w-full promoto-tablet:w-[49%] flex justify-center items-center overflow-clip content-center gap-2.5 rounded-[16px] bg-white h-[350px] promoto-tablet:h-[500px] relative'>
					{data.map(
						(blog: { blogThumbnail: SanityImageSource }, index: number) => (
							<Image
								src={urlFor(blog.blogThumbnail).url()}
								alt=''
								width={500}
								height={1000}
								className={`${featuredBlogIndex === index ? 'opacity-100' : 'opacity-0'} object-cover w-full h-full absolute transition-all duration-1000 ease-in-out will-change-auto`}
								key={index}
							/>
						)
					)}
				</figure>

				<div className='w-full promoto-tablet:flex-1 promoto-tablet:h-104 flex justify-center items-center overflow-clip content-center gap-2.5 promoto-tablet:p-6 promoto-laptop:p-10'>
					<div className='flex-1 flex flex-col gap-8 promoto-tablet:gap-12 promoto-laptop:gap-18'>
						<div className='w-full flex flex-col gap-3 promoto-tablet:gap-4 leading-[1.2]'>
							<h5 className='text-white font-libre text-[24px] promoto-tablet:text-[32px] whitespace-pre-wrap wrap-break-word leading-[1.2] italic capitalize font-semibold'>
								{data[featuredBlogIndex].title}
							</h5>
							<p className='text-[rgba(255,255,255,0.8)] font-hanken text-[16px] line-clamp-3 promoto-tablet:line-clamp-4'>
								{data[featuredBlogIndex].subtitle}
							</p>
						</div>
						<Button
							variant={'ghost'}
							className='text-promoto-yellow w-fit cursor-pointer px-0 hover:bg-transparent hover:text-promoto-yellow'
							asChild
						>
							<Link
								href={`/blog/${data[featuredBlogIndex].slug?.current} `}
								className='flex justify-center items-center gap-2 text-promoto-yellow font-hanken text-[16px] leading-[1.6] trcking-[-0.04em]'
							>
								Read full blog <HiOutlineArrowLongRight />
							</Link>
						</Button>
					</div>
				</div>
				<Button className='absolute top-2 right-2 flex justify-center py-1 px-3 bg-promoto-yellow z-1 content-center flex-nowrap gap-2 rounded-[12px] text-promoto-dark capitalize whitespace-pre font-hanken text-[16px] trcking-[-0.04em] text-center leading-[1.6]'>
					most popular
				</Button>
			</div>
			{/*bloghero dynaic*/}
		</div>
	);
};

export default BlogHeroCardSection;
