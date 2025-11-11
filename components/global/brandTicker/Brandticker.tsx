'use client';

import brand1 from '@/public/assets/brand1.svg';
import brand2 from '@/public/assets/brand2.svg';
import brand3 from '@/public/assets/brand3.svg';
import brand4 from '@/public/assets/brand4.svg';
import brand5 from '@/public/assets/brand5.svg';
import Image from 'next/image';
import { Fragment } from 'react/jsx-runtime';
import { motion } from 'framer-motion';

const Brandticker = () => {
	const images = [brand1, brand2, brand3, brand4, brand5];

	return (
		<section className='w-full flex flex-col items-center px-5 promoto-tablet:px-20 pb-20 promoto-tablet:pb-25 promoto-laptop:pb-36  max-w-[1200px] overflow-clip content-center flex-nowrap gap-2.5'>
			<div className='w-full flex flex-col max-w-[904px] content-start flex-nowrap gap-10'>
				<p className='w-full whitespace-pre-wrap text-wrap wrap-break-word text-promoto-dark text-center leading-[1.2] text-[16px] font-hanken'>
					Trusted by 800+ brands worldwide to deliver data-powered communication
					daily.
				</p>
				<div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-linear-to-r before:from-[rgba(255,255,255,0.1)] before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-linear-to-l after:from-[rgba(255,255,255,0.1)] after:to-transparent after:content-['']">
					<motion.div
						transition={{
							duration: 23,
							ease: 'linear',
							repeat: Infinity,
						}}
						initial={{ translateX: 0 }}
						animate={{ translateX: '-50%' }}
						className='flex flex-none gap-16 pr-16'
					>
						{[...new Array(2)].fill(0).map((_, index) => (
							<Fragment key={index}>
								{images.map((img, index) => (
									<Image
										key={index}
										src={img}
										alt={'brandlogo'}
										className='h-8 w-auto flex-none'
									/>
								))}
							</Fragment>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Brandticker;
