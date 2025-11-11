'use client';
import { MdOutlineBackupTable } from 'react-icons/md';
import {
	PiChatCircleDotsLight,
	PiDatabaseLight,
	PiHeadsetLight,
	PiMouseRightClickLight,
} from 'react-icons/pi';

import { AnimationGeneratorType, motion } from 'motion/react';
const CardTwoClient = () => {
	const list = {
		hidden: {},
		show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
	};

	const items = {
		hidden: { opacity: 0, y: -56 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring' as AnimationGeneratorType,
				stiffness: 150,
				damping: 30,
			},
		},
	};

	const features = [
		{ feature: 'One-click integration', icon: <PiMouseRightClickLight /> },
		{ feature: 'Personalized Automation', icon: <PiChatCircleDotsLight /> },
		{ feature: 'Complete data sync', icon: <PiDatabaseLight /> },
		{ feature: '24/7 expert support', icon: <PiHeadsetLight /> },
		{ feature: 'Easy migration', icon: <MdOutlineBackupTable /> },
	];

	const featureList = features.map((f, index) => (
		<motion.li
			key={index}
			className='w-[228px] flex items-center py-3 px-2 bg-[rgba(0,27,16,0.1)] content-center flex-nowrap gap-2 rounded-xl'
			variants={index === 0 ? { ...items, hidden: { opacity: 0 } } : items}
			style={{ willChange: 'transform, opacity' }}
		>
			<span className='text-[20px]'>{f.icon}</span>
			<span
				className={`flex-1 w-px whitespace-pre-wrap text-wrap wrap-break-word font-host text-promoto-dark text-[16px] tracking-[-0.04em] leading-[100%]`}
			>
				{f.feature}
			</span>
		</motion.li>
	));
	return (
		<motion.div
			initial={{ rotateX: -90 }}
			whileInView={{ rotateX: 0 }}
			viewport={{ once: true }}
			transition={{ type: 'spring', stiffness: 150, damping: 40, mass: 1 }}
			className='bg-white overflow-clip z-0 p-6 rounded-xl'
			style={{
				willChange: 'transform',
				transformStyle: 'preserve-3d',
				backfaceVisibility: 'hidden',
			}}
		>
			<motion.ul
				className='w-full flex flex-col items-center content-center flex-nowrap gap-3.5'
				variants={list}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: true }}
			>
				{featureList}
			</motion.ul>
		</motion.div>
	);
};

export default CardTwoClient;
