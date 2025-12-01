import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import heroImg from '@/public/assets/about-work.webp';
const BlogHeroCardSection = () => {
	return (
		<div className='flex flex-col w-full justify-center items-center gap-5'>
			{/*bloghero dynamic*/}
			<div className='w-full promoto-tablet:max-w-[738px] promoto-laptop:max-w-[1128px] flex flex-col promoto-tablet:flex-row items-center p-4 promoto-tablet:p-6 promoto-laptop:p-8 bg-promoto-dark overflow-clip content-center max-promoto-tablet:gap-6 rounded-[20px] relative'>
				<figure className='w-full promoto-tablet:w-[49%] flex justify-center items-center overflow-clip content-center gap-2.5 rounded-[16px] bg-white'>
					<Image
						src={heroImg}
						alt=''
					/>
				</figure>
				<div className='w-full promoto-tablet:flex-1 promoto-tablet:h-104 flex justify-center items-center overflow-clip content-center gap-2.5 promoto-tablet:p-6 promoto-laptop:p-10'>
					<div className='flex-1 flex flex-col gap-8 promoto-tablet:gap-12 promoto-laptop:gap-18'>
						<div className='w-full flex flex-col gap-3 promoto-tablet:gap-4 leading-[1.2]'>
							<h5 className='text-white font-libre text-[32px] whitespace-pre-wrap wrap-break-word leading-[1.2] italic capitalize font-semibold'>
								5 Ways Marketing Automation Boosts Customer Engagement
							</h5>
							<p className='text-[rgba(255,255,255,0.8)] font-hanken text-[16px]'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloribus, repellendus eum reiciendis error provident mollitia
								omnis veniam aut laboriosam magni culpa. Accusamus suscipit
								molestias animi fugiat incidunt earum nobis ut?
							</p>
						</div>
						<Button
							variant={'ghost'}
							className='text-promoto-yellow w-fit cursor-pointer px-0 hover:bg-transparent hover:text-promoto-yellow'
						>
							Read full blog <HiOutlineArrowLongRight />
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
