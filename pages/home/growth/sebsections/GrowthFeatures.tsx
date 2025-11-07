import { GoDatabase } from 'react-icons/go';
import { MdAnalytics } from 'react-icons/md';
import { PiNetwork } from 'react-icons/pi';
import { hankenGrotesk } from '@/app/fonts';

const GrowthFeatures = () => {
	return (
		<div className='w-full flex flex-col  items-center flex-nowrap gap-4'>
			<div className='w-full h-px bg-[rgba(255,255,255,0.1)] overflow-clip'></div>
			<div className='w-full flex justify-center items-center overflow-visible content-center flex-wrap gap-x-5 gap-y-2'>
				<div className='flex items-center overflow-visible content-center flex-nowrap gap-2'>
					<span className='text-[16px] text-[#f2ff00]'>
						<GoDatabase />
					</span>
					<span
						className={`${hankenGrotesk.className} whitespace-pre text-[#f2ff00] leading-[120%]`}
					>
						Data & integration
					</span>
				</div>
				<div className='flex items-center overflow-visible content-center flex-nowrap gap-2'>
					<span className='text-[16px] text-[#f2ff00]'>
						<PiNetwork />
					</span>
					<span
						className={`${hankenGrotesk.className} whitespace-pre text-[#f2ff00] leading-[120%]`}
					>
						Journeys
					</span>
				</div>
				<div className='flex items-center overflow-visible content-center flex-nowrap gap-2'>
					<span className='text-[16px] text-[#f2ff00]'>
						<MdAnalytics />
					</span>
					<span
						className={`${hankenGrotesk.className} whitespace-pre text-[#f2ff00] leading-[120%]`}
					>
						Insights & Analytics
					</span>
				</div>
			</div>
			<div className='w-full h-px bg-[rgba(255,255,255,0.1)] overflow-clip'></div>
		</div>
	);
};

export default GrowthFeatures;
