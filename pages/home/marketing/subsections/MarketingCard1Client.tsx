'use client';
import { socials } from '@/lib/constants';
import Image from 'next/image';
import { motion } from 'motion/react';

const MarketingCard1Client = () => {
	const parent = {
		hidden: {},
		show: { transition: { staggerChildren: 0.1, childrenDelay: 0.2 } },
	};

	const child = {
		hidden: { opacity: 0, x: -100 },
		show: { opacity: 1, x: 0 },
	};

	const socialThumbnails = socials.map((social, idx) => {
		return (
			<motion.div
				className='border-2 rounded-[50px] border-promoto-dark w-10 aspect-square overflow-visible flex justify-center items-center relative'
				key={idx}
				variants={parent}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: true }}
			>
				<motion.div
					className='w-12 h-12 absolute'
					variants={child}
					transition={{
						type: 'spring',
						duration: 0.6,
						bounce: 0.5,
						delay: idx * 0.3,
					}}
				>
					<Image
						src={social.img}
						alt={social.name}
						className='object-cover'
					/>
				</motion.div>
			</motion.div>
		);
	});
	return socialThumbnails;
};

export default MarketingCard1Client;
