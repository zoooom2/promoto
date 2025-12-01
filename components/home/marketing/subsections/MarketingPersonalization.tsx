import bgImageRightBottom from '@/public/assets/BG -Right Bottom.png';

import bgImage from '@/public/assets/BG Image.png';
import PersonalizedTasks from './PersonalizedChecklist';
import ProgressWithThunderbolt from './PersonalizedProgress';
import Image from 'next/image';

const MarketingPersonalization = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative h-full rounded-2xl'>
			<figure className='absolute top-0 left-0 w-full h-full'>
				<Image
					src={bgImageRightBottom}
					alt=''
					className='w-full h-full object-cover'
				/>
			</figure>
			<figure className='absolute top-0 left-0 w-full h-full'>
				<Image
					src={bgImage}
					alt=''
					className='w-full h-full object-cover'
				/>
			</figure>
			<div className='relative z-1 w-full flex flex-col justify-end items-center py-5.5 xl:py-12 content-center flex-nowrap gap-9'>
				<div className='w-full flex flex-col xl:justify-center items-center px-5 content-center flex-nowrap gap-4.5 xl:gap-7.5 z-2'>
					<div className='w-full flex flex-col max-w-[322px] flex-nowrap gap-1'>
						<h5
							className={`font-hanken font-semibold text-[32px] tracking-[-0.04em] w-full whitespace-pre-wrap wrap-break-word text-wrap text-promoto-dark text-center leading-[1.4]`}
						>
							Hyper personalization
						</h5>
						<p
							className={`font-hanken text-[16px] whitespace-pre-wrap text-wrap wrap-break-word text-promoto-dark text-center leading-[1.6] tracking-[-0.04em]`}
						>
							Automatically segment and tailor emails based on personas with the
							power of AI.
						</p>
					</div>

					<div className='w-[256px] flex flex-col items-center content-center flex-nowrap z-2 gap-2.5'>
						<ProgressWithThunderbolt />
						<PersonalizedTasks />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MarketingPersonalization;
