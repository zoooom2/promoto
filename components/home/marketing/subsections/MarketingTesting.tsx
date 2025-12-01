'use client';

import Image from 'next/image';
import emailAImg from '@/public/assets/emailA1st.webp';
import emailBimg from '@/public/assets/emailStack2nd.webp';
import emailCImg from '@/public/assets/lastStackMarketing.webp';
import marketingRightTop from '@/public/assets/marketingRightTop.webp';
import { motion } from 'motion/react';
const MarketingTesting = () => {
	const child = { hidden: { y: -51, opacity: 0 }, show: { y: 0, opacity: 1 } };
	return (
		<div className='w-full flex flex-col justify-center items-center overflow-clip content-center flex-nowrap gap-2.5 relative rounded-2xl'>
			<figure className='absolute w-full h-full top-0 left-0'>
				<Image
					src={marketingRightTop}
					alt='card background'
					className='h-full w-full object-cover'
				/>
			</figure>
			<div className='z-1 w-full flex flex-col justify-end items-center py-5 xl:py-12 content-between flex-nowrap gap-7.5 xl:gap-9'>
				<div className='w-full flex flex-col max-w-[280px] flex-nowrap gap-1'>
					<h5
						className={`font-hanken text-promoto-yellow font-semibold text-[32px] leading-[1.4] w-full text-center text-wrap wrap-break-word tracking-[-0.04em]`}
					>
						A/B + cohort testing
					</h5>
					<p
						className={`font-hanken text-[16px] leading-[1.6] w-full whitespace-pre-wrap wrap-break-word text-white text-center tracking-[-0.04em]`}
					>
						Optimize messaging with content and timing tests.
					</p>
				</div>
				<div className='w-full flex flex-col justify-center items-center content-center flex-nowrap z-4'>
					<div className='w-full h-32 max-w-[344px] relative flex flex-col justify-center items-center'>
						<motion.div
							className='w-[80%] flex justify-center items-center content-center flex-wrap gap-[2.5] rounded-2xl z-2'
							variants={{ ...child, hidden: { opacity: 0 } }}
							initial={'hidden'}
							whileInView={'show'}
							transition={{ duration: 1 }}
							viewport={{ once: true }}
						>
							<Image
								src={emailAImg}
								alt='emailA'
								className='w-full h-full rounded-md'
							/>
						</motion.div>
						<motion.div
							className='w-[65%] flex justify-center items-center content-center flex-wrap gap-[2.5] rounded-2xl z-1 -mt-1 opacity-90'
							variants={child}
							initial={'hidden'}
							whileInView={'show'}
							viewport={{ once: true }}
							transition={{ duration: 1, delay: 0.2 }}
						>
							<Image
								src={emailBimg}
								alt=''
								className='w-full h-full rounded-md'
							/>
						</motion.div>
						<motion.div
							className='w-[50%] opacity-70 flex justify-center items-center content-center flex-wrap gap-[2.5] rounded-2xl -mt-2'
							variants={child}
							initial={'hidden'}
							whileInView={'show'}
							transition={{ duration: 1, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<Image
								src={emailCImg}
								alt=''
								className='w-full h-full rounded-md'
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MarketingTesting;
