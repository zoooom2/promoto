'use client';
import { AnimationGeneratorType } from 'motion/react';
import * as motion from 'motion/react-client';

const CardThreeClient = () => {
	const parent = {
		hidden: {},
		show: {
			transition: { staggerChildren: 0.1, delayChildren: 0.5 },
		},
	};
	const bars = {
		hidden: { y: 200 },
		show: {
			y: 0,
			transition: {
				type: 'spring' as AnimationGeneratorType,
				stiffness: 150,
				damping: 30,
			},
		},
	};
	return (
		<motion.div
			className='w-full h-[60%] flex justify-center items-end content-end flex-nowrap gap-2'
			variants={parent}
			initial={'hidden'}
			whileInView={'show'}
			viewport={{ once: true }}
		>
			<motion.div
				className='h-full flex justify-center items-end content-end flex-nowrap gap-2.5'
				variants={bars}
			>
				<div className='w-10 h-[70%] bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0.1)_100%)] rounded-t-xl'></div>
			</motion.div>
			<motion.div
				className='h-full flex justify-center items-end content-end flex-nowrap gap-2.5'
				variants={bars}
			>
				<div className='w-10 h-4/5 bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0.1)_100%)] rounded-t-xl'></div>
			</motion.div>

			<motion.div
				className='h-full flex justify-center items-end content-end flex-nowrap gap-2.5'
				variants={bars}
			>
				<div className='w-10 h-full bg-[linear-gradient(180deg,#f3930d_0%,rgb(243,147,13)_100%)] rounded-t-xl relative'>
					<div className='flex justify-center items-center py-[8px] px-[12px] bg-promoto-dark content-center flex-nowrap gap-2 rounded-xl absolute left-[-20%] w-[140%] top-[9px]'>
						<p
							className={`whitespace-pre font-host text-white text-[14px] tracking-[-0.04em] leading-[100%]}`}
						>
							375k
						</p>
					</div>
				</div>
			</motion.div>
			<motion.div
				className='h-full flex justify-center items-end content-end flex-nowrap gap-2.5'
				variants={bars}
			>
				<div className='w-10 h-[87%] bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0.1)_100%)] rounded-xl'></div>
			</motion.div>
			<motion.div
				className='h-full flex justify-center items-end content-end flex-nowrap gap-2.5'
				variants={bars}
			>
				<div className='w-10 h-[78%] bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0.1)_100%)] rounded-xl'></div>
			</motion.div>
		</motion.div>
	);
};

export default CardThreeClient;
