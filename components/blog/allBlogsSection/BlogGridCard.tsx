import Image from 'next/image';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const BlogGridCard = ({
	title,
	thumbnail,
	slug,
}: {
	title: string;
	thumbnail: string;
	slug: string;
}) => {
	return (
		<div className='flex flex-col gap-7 promoto-tablet:gap-6 rounded-[16px]'>
			<div className='w-full flex flex-col justify-center items-center content-center gap-4 tablet:gap-6'>
				<figure className='w-full flex justify-center items-center overflow-hidden content-center gap-2.5 rounded-[16px] h-90 aspect-square overflow-clip'>
					<Image
						src={thumbnail}
						alt=''
						className='h-full w-full object-cover'
						width={500}
						height={500}
					/>
				</figure>
				<div className='w-full flex flex-col justify-center gap-2 whitespace-pre-wrap wrap-break-word text-wrap text-promoto-dark leading-[1.2]'>
					<h6 className='font-hanken font-semibold text-[20px]'>{title}</h6>
				</div>
			</div>
			<Button
				className='capitalize w-fit py-3! px-6! bg-transparent border border-promoto-green text-promoto-green cursor-pointer hover:bg-promoto-green hover:text-white font-hanken'
				asChild
			>
				<Link href={`/blog/${slug}`}>Read full article</Link>
			</Button>
		</div>
	);
};

export default BlogGridCard;
