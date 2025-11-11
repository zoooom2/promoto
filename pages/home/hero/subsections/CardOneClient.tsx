'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import signature from '@/public/assets/signatureHero.png';

const CardOneClient = () => {
	return (
		<motion.div
			initial={{ y: -40, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ ease: [0.44, 0, 0.56, 1], duration: 1, delay: 1.2 }}
			className='w-20 h-7 overflow-hidden'
		>
			<Image
				src={signature}
				alt='signature'
				className='w-20 object-cover object-center bg-transparent '
			/>
		</motion.div>
	);
};

export default CardOneClient;
