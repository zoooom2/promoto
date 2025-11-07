import { hankenGrotesk } from '@/app/fonts';
import { ReactNode } from 'react';

const FeatureCard = ({
	icon,
	title,
	subtitle,
}: {
	icon: ReactNode;
	title: string;
	subtitle: string;
}) => {
	return (
		<div className='w-[197px] flex justify-center items-center overflow-clip gap-2.5'>
			<div className='flex-1 flex flex-col gap-4 w-full'>
				<div className='flex text-2xl'>{icon}</div>
				<div className='w-full flex flex-col gap-2'>
					<h6
						className={`text-[#001b10] leading-[1.2] ${hankenGrotesk.className} font-semibold text-[20px] tracking-[-0.04em]`}
					>
						{title}
					</h6>
					<p
						className={`${hankenGrotesk.className} tracking-[-0.04em] leading-[1.6] text-[#01b10]`}
					>
						{subtitle}
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeatureCard;
