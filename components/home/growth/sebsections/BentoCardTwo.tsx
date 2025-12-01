import Image from 'next/image';
import bentoBg2 from '@/public/assets/bentoBg2.webp';
import BentoCardTwoClient from './BentoCardTwoClient';

const BentoCardTwo = () => {
	return (
		<div className='w-full max-md:max-w-140 flex flex-col items-center content-center flex-nowrap gap-4 relative'>
			<figure className='absolute top-0 left-0 w-full h-full'>
				<Image
					src={bentoBg2}
					alt='background image'
					className='object-cover rounded-[20px] h-full'
				/>
			</figure>
			<div className='w-full h-[450px] md:h-[490px] flex flex-col justify-end items-center p-5 md:p-6 content-center md:aspect-[0.7346938775510204/1] flex-nowrap gap-2.5 aspect-[0.8/1] z-1 rounded-[12px]'>
				<div className='w-full flex flex-col justify-end items-center p-5 md:p-6 content-center flex-nowrap gap-2.5 rounded-[12px] border-[rgba(0,27,16,0.1)] border'>
					<div className='w-full flex flex-col items-center content-center flex-nowrap gap-6 xl:gap-7 justify-start'>
						<p
							className={`font-hanken font-medium whitespace-pre-wrap text-wrap wrap-break-word text-promoto-dark leading-[120%] text-[24px] w-full`}
						>
							Summer Campaign “25
						</p>
						<BentoCardTwoClient />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BentoCardTwo;
