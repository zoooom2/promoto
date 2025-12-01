'use client';
import Image from 'next/image';

import growthMan from '@/public/assets/growthsectionMan.webp';
import { motion } from 'motion/react';
import RollingNumber from './RollingNumber';

const GrowthStatsCard = () => {
	const statsVariants = {
		hidden: { opacity: 0, y: 50 },
		show: { opacity: 1, y: 0 },
	};
	return (
		<div className='flex max-md:max-w-140 items-center justify-center content-center flex-nowrap gap-2.5 w-full overflow-clip'>
			<div className='w-full flex flex-col md:flex-row justify-center items-cener bg-[#f8f1e1] overflow-clip content-center flex-nowrap rounded-[20px] p-6 gap-5 '>
				<div className='max-md:w-full max-h-[420px] flex md:flex-1 md:h-[374px] flex-col justify-center md:justify-between bg-white overflow-clip flex-nowrap gap-10 rounded-2xl p-6 aspect-[0.8/1] min-[850px]:aspect-[0.9732620320855615/1]! '>
					<div className='w-full flex flex-col flex-nowrap gap-2'>
						<motion.h6
							variants={statsVariants}
							initial='hidden'
							whileInView={'show'}
							style={{ willChange: 'opacity, transform' }}
							transition={{ duration: 1 }}
							viewport={{ once: true }}
							className={`font-hanken text-[20px] leading-[1.4] font-semibold whitespace-pre-wrap wrap-break-word text-wrap text-promoto-dark `}
						>
							Automating Success with Promoto
						</motion.h6>
						<motion.p
							variants={statsVariants}
							initial='hidden'
							whileInView={'show'}
							style={{ willChange: 'opacity, transform' }}
							transition={{ duration: 1, delay: 0.2 }}
							viewport={{ once: true }}
							className={`font-hanken leading-[1.4] whitespace-pre-wrap wrap-break-word text-wrap text-promoto-dark tracking-[-0.04em]`}
						>
							By streamlining campaigns and personalizing outreach, Acme Crop
							unlocked massive growth through Promoto’s automation.
						</motion.p>
					</div>
					<div className='w-full flex flex-col flex-nowrap'>
						<div className='flex justify-center items-center overflow-hidden content-center flex-nowrap'>
							<RollingNumber />
							<div className='hidden flex-col justify-center items-center content-center flex-nowrap gap-2.5'>
								{Array.from({ length: 8 }, (_, i) => (
									<h3
										key={i}
										className='whitespace-pre z-1 text-promoto-dark leading-[1.2]'
									>
										{i}
									</h3>
								))}
							</div>
						</div>
						<p
							className={`font-hanken whitespace-pre text-promoto-dark leading-[120%]`}
						>
							faster than similar tool
						</p>
					</div>
				</div>
				<div className='w-full relative flex justify-end items-start overflow-clip content-center flex-nowrap gap-2.5 rounded-2xl min-h-[356px] flex-col'>
					<motion.figure
						initial={{ opacity: 0, y: 80 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className='absolute top-0 left-0 w-full h-full'
					>
						<Image
							src={growthMan}
							alt='a man smiling'
							className='object-cover h-full w-full'
						/>
					</motion.figure>
					<div
						className='w-full h-20 backdrop-blur-[5px] bg-[linear-gradient(180deg,rgba(6,111,65,0)_0%,rgb(6,111,65)_70.27027027027027%,rgb(0,27,16)_98.64864864864865%)] overflow-clip z-0 rounded-2xl absolute'
						style={{
							WebkitMask:
								'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
							mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
							WebkitMaskComposite: 'add',
							maskComposite: 'add',
						}}
					></div>
					<div className='w-full flex flex-col justify-end p-5 overflow-clip z-1 flex-nowrap gap-2'>
						<p
							className={`font-hanken whitespace-pre text-white leading-[1.2]  font-bold text-[20px]`}
						>
							John Miller
						</p>
						<p
							className={`font-hanken whitespace-pre text-white leading-[1.2] `}
						>
							Marketing Director, Acme Corp
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GrowthStatsCard;
