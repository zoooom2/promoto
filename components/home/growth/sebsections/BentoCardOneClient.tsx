'use client';

import Image from 'next/image';
import bgfront from '@/public/assets/growth-front.webp';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const BentoCardOneClient = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (ref.current) setWidth(ref.current.offsetWidth);
	}, []);

	const behindShuffle = {
		hidden: (i: number) => ({ y: i * 40, opacity: 0 }),
		show: { y: 0, opacity: 1 },
	};
	const behindShuffleParent = {
		hidden: {},
		show: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
	};
	const statImgVariant = {
		hidden: { opacity: 0, y: 40 },
		show: { opacity: 1, y: 0 },
	};

	const cards = [
		{ top: 70, z: 30, aspect: 2.4, widthMultiplier: 0.7 },
		{ top: 58, z: 20, aspect: 2.0, widthMultiplier: 0.6 },
		{ top: 46, z: 10, aspect: 1.6, widthMultiplier: 0.5 },
	];

	return (
		<div className='w-full flex flex-col justify-center items-center content-center flex-nowrap gap-2.5 relative'>
			<motion.div
				className='w-full  md:w-[360px] flex flex-col items-center h-[450px] md:h-[490px] overflow-clip z-0 md:aspect-[0.7346938775510204/1] aspect-[0.8/1] absolute top-0 left-0 '
				variants={behindShuffleParent}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: true }}
			>
				{cards.map((card, index) => (
					<motion.div
						key={index}
						className={`h-[100px] backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)] rounded-[12px] absolute`}
						style={{
							top: `${card.top}px`,
							zIndex: card.z,
							width: `${Math.floor(width * card.widthMultiplier)}px`,
							aspectRatio: card.aspect,
						}}
						variants={behindShuffle}
						transition={{ duration: 1 }}
						custom={index + 1}
					></motion.div>
				))}
			</motion.div>
			<div
				className='w-[360px] height-[246px] bg-[#024746] overflow-clip opacity-[0.7] z-5'
				style={{
					WebkitMask:
						'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
					mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
					WebkitMaskComposite: 'add',
					maskComposite: 'add',
				}}
			></div>
			<motion.div
				className='w-full min-[405px]:h-[450px] rounded-2xl flex flex-col -m-3 justify-end items-center p-10 overflow-clip content-center flex-nowrap gap-2.5 aspect-[0.8/1] z-4 md:aspect-[0.8536585365853658/1]'
				variants={statImgVariant}
				initial='hidden'
				whileInView={'show'}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				ref={ref}
			>
				<Image
					src={bgfront}
					alt='image showing stat'
					className='w-[300px] md:w-full h-80 min-[405px]:h-[328px] rounded-[12px] object-fill'
				/>
			</motion.div>
		</div>
	);
};

export default BentoCardOneClient;
