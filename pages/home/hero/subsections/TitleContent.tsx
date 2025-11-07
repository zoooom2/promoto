'use client';
import { hankenGrotesk, libreCaslonText } from '@/app/fonts';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const FramerButton = motion(Button);
const TitleContent = () => {
	return (
		<div className='w-full h-min flex flex-col items-center overflow-visible content-center flex-nowrap gap-6 md:gap-7'>
			<div className='w-full flex flex-col items-center content-center flex-nowrap gap-4'>
				<div className='w-full h-min flex flex-col justify-center items-center overflow-clip content-center flex-nowrap '>
					<motion.h1
						initial={{ opacity: 0, scale: 1.3, backdropFilter: '20px' }}
						transition={{ duration: 1 }}
						animate={{ opacity: 1, scale: 1, backdropFilter: 0 }}
						className={`${hankenGrotesk.className} text-[32px] md:text[48px] md:text-[48px] lg:text-[60px] leading-[1.2] tracking-[-0.04em] font-medium italic w-full h-auto whitespace-pre-wrap text-wrap wrap-break-word text-promoto-dark text-center`}
					>
						The World’s Leading
					</motion.h1>
					<motion.h1
						initial={{ y: 80 }}
						animate={{ y: 0 }}
						transition={{ delay: 0.2, duration: 1 }}
						className={`w-full h-auto whitespace-pre-wrap text-wrap wrap-break-word text-promoto-green text-center leading-[120%] text-[32px] md:text-[48px] lg:text-[60px] ${libreCaslonText.className} ${libreCaslonText.style.fontStyle} italic tracking-[-0.04em] leading-[1.2] `}
					>
						Marketing Automation Tool
					</motion.h1>
				</div>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
					className={`${hankenGrotesk.className} w-full h-auto whitespace-pre-wrap text-wrap wrap-break-word text-center max-w-[364px] text-[#001b10] leading-[1.2]`}
				>
					Automate messages based on customer behavior-reach the right people at
					the right time.
				</motion.p>
			</div>
			<FramerButton
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
				size={'lg'}
				className='font-hanken text-[16px]'
			>
				Book a Demo
			</FramerButton>
		</div>
	);
};

export default TitleContent;
