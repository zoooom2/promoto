import Image from 'next/image';
import bgCard2 from '@/public/assets/marketingCard2.webp';
import MarketingCard2Client from './MarketingCard2Client';

const MarketingCard2 = () => {
	return (
		<div className='w-full xl:w-114 flex flex-col justify-center items-center content-center flex-nowrap gap-2.5 relative rounded-2xl '>
			<figure className='absolute top-0 left-0 w-full h-full'>
				<Image
					src={bgCard2}
					alt=''
					className='w-full h-full rounded-2xl'
				/>
			</figure>
			<div
				className={`font-hanken w-full xl:h-84 flex flex-col justify-center xl:justify-between items-center pt-6 xl:pt-10 xl:px-10 px-4 content-center flex-nowrap xl:aspect-[1.3571428571428572/1] max-xl:gap-6 z-1`}
			>
				<div className=' w-full flex flex-col max-w-[330px] flex-nowrap gap-1'>
					<h5 className='w-full whitespace-pre-wrap text-wrap wrap-break-word text-promoto-yellow text-center leading-[1.2] font-semibold text-[32px]  '>
						Collaborate in Real-Time
					</h5>
					<p
						className={`font-hanken w-full whitespace-pre-wrap text-wrap wrap-break-word text-white text-center leading-[1.2] text-[16px] tracking-[-0.04em]`}
					>
						Work together on campaigns and workflow sinvite team members via
						email.
					</p>
				</div>
				<MarketingCard2Client />
			</div>
		</div>
	);
};

export default MarketingCard2;
