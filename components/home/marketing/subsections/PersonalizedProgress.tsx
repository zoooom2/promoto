'use client';

import { AiFillThunderbolt } from 'react-icons/ai';
import { Progress } from '@/components/ui/progress';
import { useInView, useMotionValue } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { animate } from 'motion/react';

const PersonalizedProgress = () => {
	const num = useMotionValue(0);
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.3, once: true });

	useEffect(() => {
		if (isInView) {
			const controls = animate(num, 7, {
				duration: 5,
				ease: [0.2, 0.8, 0.1, 0.8],
				onUpdate(latest) {
					return setCount(Math.floor(latest));
				},
			});

			return controls.stop;
		}
	}, [isInView, num]);
	return (
		<div className='w-[256px] flex justify-center items-center p-2 bg-promoto-green content-center flex-nowrap gap-2.5 rounded-xl '>
			<div className='w-[17px] text-[14px] text-promoto-yellow'>
				<AiFillThunderbolt />
			</div>
			<div className='h-2 flex-1'>
				<Progress
					value={Math.floor((count / 7) * 100)}
					className='[&>div]:bg-promoto-yellow bg-[rgba(242,255,0,0.3)]'
				/>
			</div>
			<div
				ref={ref}
				className={`flex justify-center items-center content-center flex-nowrap font-host text-[14px] whitespace-pre text-promoto-yellow tracking-[-0.04em] leading-[1.2]`}
			>
				<span>{count}</span>
				<span>/7</span>
			</div>
		</div>
	);
};

export default PersonalizedProgress;
