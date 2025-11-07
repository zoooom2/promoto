import Image from 'next/image';
import bgCard2 from '@/assets/marketingCard2.webp';
import blocksImg from '@/assets/blocksImg.webp';
import { hankenGrotesk } from '@/app/fonts';

const MarketingCard2 = () => {
	return (
		<div className='w-[360px] flex flex-col justify-center items-center content-center flex-nowrap gap-2.5 relative rounded-2xl'>
			<figure className='absolute top-0 left-0 w-full h-full'>
				<Image
					src={bgCard2}
					alt=''
					loading='lazy'
					className='w-full h-full rounded-2xl'
				/>
			</figure>
			<div
				className={`${hankenGrotesk.className} w-full flex flex-col justify-center items-center pt-6 px-4 content-center flex-nowrap gap-6 z-1`}
			>
				<div className=' w-full flex flex-col max-w-[330px] flex-nowrap gap-1'>
					<h5 className='w-full whitespace-pre-wrap text-wrap wrap-break-word text-[#f2ff00] text-center leading-[1.2] font-semibold text-[32px]  '>
						Collaborate in Real-Time
					</h5>
					<p
						className={`${hankenGrotesk.className} w-full whitespace-pre-wrap text-wrap wrap-break-word text-white text-center leading-[1.2]`}
					>
						Work together on campaigns and workflow sinvite team members via
						email.
					</p>
				</div>
				<div className='w-4/5 rounded-t-2xl flex justify-center items-end content-center border-x border-t'>
					<Image
						src={blocksImg}
						alt='blocks'
						className='w-full h-full rounded-t-3xl'
					/>
				</div>
			</div>
		</div>
	);
};

export default MarketingCard2;
