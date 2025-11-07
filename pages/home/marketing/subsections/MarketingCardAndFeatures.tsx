import Image from 'next/image';
import MarketingCard1 from './MarketingCard1';
import MarketingCard2 from './MarketingCard2';
import marketingRightTop from '@/assets/marketingRightTop.webp';
import { hankenGrotesk } from '@/app/fonts';
import emailAImg from '@/assets/emailA1st.webp';
import emailBimg from '@/assets/emailStack2nd.webp';
import emailCImg from '@/assets/lastStackMarketing.webp';
import bgImageRightBottom from '@/assets/BG -Right Bottom.png';
import bgImage from '@/assets/BG Image.png';
import PersonalizedTasks from './PersonalizedChecklist';
import ProgressWithThunderbolt from './PersonalizedProgress';
import BottomFeatures from './BottomFeaturesGrid';

const MarketingCardAndFeatures = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-6'>
			<div className='w-full flex flex-col justify-center items-center overflow-hidden content-center flex-nowrap gap-6'>
				<div className='w-full flex flex-col justify-center items-center overflow-hiddem content-center flex-nowrap gap-5 relative'>
					<MarketingCard1 />
					<MarketingCard2 />
				</div>

				<div className='w-full flex flex-col items-center justify-center overflow-clip content-center flex-nowrap gap-6'>
					<div className='w-[360px] flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative rounded-2xl'>
						<figure className='absolute w-full h-full top-0 left-0'>
							<Image
								src={marketingRightTop}
								alt='card background'
								className='h-full w-full object-cover'
							/>
						</figure>
						<div className='z-1 w-full flex flex-col justify-end items-center py-5 content-between flex-nowrap gap-7.5'>
							<div className='w-full flex flex-col max-w-[280px] flex-nowrap gap-1'>
								<h5
									className={`${hankenGrotesk.className} text-[#f2ff00] font-semibold text-[32px] leading-[1.4] w-full text-center text-wrap wrap-break-word tracking-[-0.04em]`}
								>
									A/B + cohort testing
								</h5>
								<p
									className={`${hankenGrotesk.className} text-[16px] leading-[1.6] w-full whitespace-pre-wrap wrap-break-word text-white text-center tracking-[-0.04em]`}
								>
									Optimize messaging with content and timing tests.
								</p>

								<div className='w-full flex flex-col justify-center items-center content-center flex-nowrap z-4'>
									<div className='w-full h-32 max-w-[344px] relative flex flex-col justify-center items-center'>
										<div className='w-[80%] flex justify-center items-center content-center flex-wrap gap-[2.5] rounded-2xl z-2 '>
											<Image
												src={emailAImg}
												alt='emailA'
												className='w-full h-full rounded-md'
											/>
										</div>
										<div className='w-[65%] flex justify-center items-center content-center flex-wrap gap-[2.5] rounded-2xl z-1 -mt-1 opacity-90'>
											<Image
												src={emailBimg}
												alt=''
												className='w-full h-full rounded-md'
											/>
										</div>
										<div className='w-[50%] opacity-70 flex justify-center items-center content-center flex-wrap gap-[2.5] rounded-2xl -mt-2'>
											<Image
												src={emailCImg}
												alt=''
												className='w-full h-full rounded-md'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='w-[360px] flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative'>
						<figure className='absolute top-0 left-0 w-full h-full'>
							<Image
								src={bgImageRightBottom}
								alt=''
								className='w-full h-full'
							/>
						</figure>
						<div className='relative z-1 w-full flex flex-col justify-end items-center py-5.5 content-center flex-nowrap gap-[36px]'>
							<figure className='absolute top-0 left-0 w-full h-full'>
								<Image
									src={bgImage}
									alt=''
									className='w-full h-full'
								/>
							</figure>
							<div className='w-full flex flex-col items-center px-5 content-center flex-nowrap gap-4.5 z-2'>
								<div className='w-full flex flex-col max-w-[322px] flex-nowrap gap-1'>
									<h5
										className={`${hankenGrotesk.className} font-semibold text-[32px] tracking-[-0.04em] w-full whitespace-pre-wrap wrap-break-word text-wrap text-[#001b10] text-center leading-[1.4]`}
									>
										Hyper personalization
									</h5>
									<p
										className={`${hankenGrotesk.className} text-[16px] whitespace-pre-wrap text-wrap wrap-break-word text-[#001b10] text-center leading-[1.6] tracking-[-0.04em]`}
									>
										Automatically segment and tailor emails based on personas
										with the power of AI.
									</p>
								</div>

								<div className='w-[256px] flex flex-col items-center content-center flex-nowrap z-2 gap-2.5'>
									<ProgressWithThunderbolt />
									<PersonalizedTasks />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<BottomFeatures />
		</div>
	);
};

export default MarketingCardAndFeatures;
