'use client';
import { animate, useInView, useMotionValue } from 'motion/react';
import { useEffect, useRef } from 'react';

const RollingNumber = () => {
	const ref = useRef<HTMLSpanElement>(null);
	const count = useMotionValue(0);
	const isInView = useInView(ref, { amount: 0.3, once: true });

	useEffect(() => {
		if (!ref.current) return;

		if (isInView) {
			const controls = animate(count, 7, {
				duration: 2,
				ease: [0.44, 0, 0.56, 1],
				onUpdate: (latest) => {
					// Directly update the DOM
					ref.current!.textContent = Math.floor(latest).toString();
				},
			});

			return () => controls.stop();
		}
	}, [count, isInView]);

	return (
		<h3 className='font-hanken font-semibold text-promoto-dark w-full text-[44px] leading-[120%] tracking-[-0.04em]'>
			<span ref={ref}>0</span>X
		</h3>
	);
};

export default RollingNumber;
