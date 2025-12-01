'use client';

import Image from 'next/image';
import bgImg from '@/public/assets/testimonialBg.webp';
import navIcon from '@/public/assets/Phase 3 (Testimonial).png';
import { PiArrowLeftLight, PiArrowRightLight } from 'react-icons/pi';

import { useState, useEffect, useRef } from 'react';
import img1 from '@/public/assets/gal1.webp';
import img2 from '@/public/assets/gal2.webp';
import img3 from '@/public/assets/gal3.webp';
import img4 from '@/public/assets/gal4.webp';
import img5 from '@/public/assets/gal5.webp';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

import { MdFormatQuote } from 'react-icons/md';

const Testimonials = () => {
	const n = 5;
	const [offset, setOffset] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [direction, setDirection] = useState('right');
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const handleNext = () => {
		setDirection('right');
		setOffset((prev) => (prev + 1) % n);
	};

	const handlePrev = () => {
		setDirection('left');
		setOffset((prev) => (prev - 1 + n) % n);
	};
	useEffect(() => {
		if (intervalRef.current) clearInterval(intervalRef.current);
		if (isPaused) return;

		intervalRef.current = setInterval(() => {
			setOffset((prev) => {
				if (direction === 'right') return (prev + 1) % n;
				else return (prev - 1 + n) % n;
			});
		}, 8000);

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [isPaused, direction]);

	const cards = [
		{
			image: img1,
			name: 'Michael Reed',
			designation: 'Head of Growth at NovaTech',
			testimony:
				'Using Promoto has completely transformed how we engage with our customers. Our campaigns are now faster, smarter, and more effective than ever.',
		},
		{
			image: img2,
			name: 'Daniel Carter',
			designation: 'Marketing Manager at BrightWave Media',
			testimony:
				'Promoto transformed how we connect with our customers. The automation workflows saved us hours each week and boosted engagement instantly.',
		},
		{
			image: img3,
			name: 'John Miller',
			designation: 'Marketing Director, Acme Corp',
			testimony:
				'I’ve tried several marketing tools, but Promoto’s ease of use and powerful integrations make it stand out. Our campaigns feel smarter and more personalized.',
		},
		{
			image: img4,
			name: 'James Mitchell',
			designation: 'Operations Director at UrbanReach',
			testimony:
				'The analytics and reporting features give us real-time insights. We can see what works and adjust quickly—our ROI has never been this clear.',
		},
		{
			image: img5,
			name: 'Robert Hayes',
			designation: 'Customer Success Lead at Elevate Corp',
			testimony:
				'What I love most about Promoto is the support team. They’re quick, helpful, and genuinely care about our success. It feels like they’re part of our team.',
		},
	];

	const positions = ['center', 'left1', 'left', 'right', 'right1'];

	const imageVariants = {
		center: { x: '0%', scale: 1, zIndex: 7, opacity: 1 },
		left1: { x: '-95%', scale: 0.6, zIndex: 4, opacity: 0.7 },
		left: { x: '-150%', scale: 0.4, zIndex: 3, opacity: 0.5 },
		right: { x: '150%', scale: 0.4, zIndex: 3, opacity: 0.5 },
		right1: { x: '95%', scale: 0.6, zIndex: 4, opacity: 0.7 },
	};

	return (
		<div className='w-full flex flex-col items-center overflow-hidden'>
			<div className='w-full flex flex-col items-center py-36 relative'>
				<figure className='absolute top-0 left-0 w-full h-full'>
					<Image
						src={bgImg}
						alt=''
						className='w-full h-full object-cover'
					/>
				</figure>

				<div className='absolute inset-0 bg-promoto-green/60 backdrop-blur-[27px]' />

				<div className='relative lg:w-[1200px] flex flex-col items-center gap-20 z-10'>
					<div className='relative flex justify-center items-center w-full h-[416px] overflow-visible'>
						{cards.map((card, i) => {
							const posIndex = (i - offset + n) % n;
							const position = positions[posIndex];
							const isActive = posIndex === 0;
							return (
								<motion.div
									key={i}
									className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
									variants={imageVariants}
									animate={position}
									transition={{ duration: 0.9, ease: 'easeInOut' }}
									style={{
										width: '312px',
										height: '368px',
										willChange: 'transform, opacity, zIndex',
									}}
									onMouseEnter={() => setIsPaused(true)}
									onMouseLeave={() => setIsPaused(false)}
								>
									<Image
										src={card.image}
										alt={`testimonial-${i}`}
										width={312}
										height={368}
										className='rounded-[12px] w-full h-full object-cover shadow-lg'
									/>

									{isActive && (
										<>
											<div
												className='absolute inset-0 flex flex-col justify-end p-4 rounded-[12px]'
												style={{
													background:
														'linear-gradient(180deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0.001) 75%, rgba(0,0,0,0.5) 100%)',
												}}
											>
												<div className='text-white'>
													<h6
														className={`font-hanken text-[20px] font-semibold leading-tight`}
													>
														{card.name}
													</h6>
													<p className='text-sm opacity-80'>
														{card.designation}
													</p>
												</div>
											</div>
											<div className='absolute top-0 right-0 text-promoto-yellow text-7xl'>
												<MdFormatQuote />
											</div>
										</>
									)}
								</motion.div>
							);
						})}
						<div className='z-1 flex  justify-center items-center p-2 w-full max-w-[360px] content-center flex-nowrap gap-2.5  border border-[rgba(255,255,255,0.1)] rounded-[20px] bg-[rgba(255,255,255,0.1)]'>
							<div className='flex-1  flex flex-col justify-center items-center p-4 bg-promoto-dark content-center flex-nowrap gap-2.5 rounded-2xl relative'>
								<div className='h-[368px] rounded-[12px] aspect-[0.8478260869565217/1]'></div>
							</div>
						</div>
					</div>

					<div className='w-full flex flex-col px-5 gap-14 items-center text-center'>
						<h5
							className={`font-hanken text-2xl text-white md:text-[32px] tracking-[-0.04em] max-w-[750px] leading-[1.2]`}
						>
							{cards[offset].testimony}
						</h5>

						<div className='flex justify-center items-center gap-6'>
							<Button
								className='text-[32px] w-10 h-10 bg-white rounded-full text-black'
								onClick={handlePrev}
							>
								<PiArrowLeftLight />
							</Button>

							<div className='w-[76px]'>
								<Image
									src={navIcon}
									alt='navigation icon'
								/>
							</div>

							<Button
								className='text-[32px] w-10 h-10 bg-white rounded-full text-black'
								onClick={handleNext}
							>
								<PiArrowRightLight />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
