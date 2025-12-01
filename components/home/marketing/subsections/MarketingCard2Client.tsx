'use client';
import Image from 'next/image';
import blocksImg from '@/public/assets/blocksImg.webp';
import { motion } from 'motion/react';

const MarketingCard2Client = () => {
	return (
		<motion.div
			className='w-4/5 rounded-t-2xl flex justify-center items-end content-center border-x border-t '
			initial={{ y: 50, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1 }}
		>
			<Image
				src={blocksImg}
				alt='blocks'
				className='w-full h-full rounded-t-3xl'
			/>
		</motion.div>
	);
};

export default MarketingCard2Client;
