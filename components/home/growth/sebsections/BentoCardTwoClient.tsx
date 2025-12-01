'use client';
import { CiMail } from 'react-icons/ci';
import { IoIosPhonePortrait } from 'react-icons/io';
import { PiMailboxLight } from 'react-icons/pi';
import { motion, AnimationGeneratorType } from 'motion/react';

const BentoCardTwoClient = () => {
	const parent = {
		hidden: {},
		show: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
	};
	const child = {
		hidden: (isFirst: boolean) => ({
			opacity: 0,
			y: isFirst ? 0 : -60,
		}),
		show: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring' as AnimationGeneratorType,
				stiffness: 150,
				damping: 30,
				mass: 1,
			},
		},
	};

	const items = [
		{ icon: <PiMailboxLight />, label: 'Email', count: '70,367' },
		{ icon: <CiMail />, label: 'SMS', count: '220,519' },
		{
			icon: <IoIosPhonePortrait />,
			label: 'In-App',
			count: '152,510',
		},
	].map((item, i) => (
		<motion.div
			variants={child}
			key={i}
			custom={i === 0}
			className={`font-hanken font-medium w-full flex justify-between items-center p-3.5 backdrop-blur-[20px] bg-[rgba(0,27,16,0.04)] content-center flex-nowrap rounded-[12px] border border-[rgba(0,27,16,0.1)]`}
		>
			<div className='flex items-center content-center flex-nowrap gap-2'>
				<span>{item.icon}</span>
				<span>{item.label}</span>
			</div>
			<div>{item.count}</div>
		</motion.div>
	));
	return (
		<motion.div
			className='flex flex-col justify-center items-center content-center flex-nowrap gap-2 w-full'
			variants={parent}
			initial={'hidden'}
			whileInView={'show'}
			viewport={{ once: true }}
		>
			{items}
		</motion.div>
	);
};

export default BentoCardTwoClient;
