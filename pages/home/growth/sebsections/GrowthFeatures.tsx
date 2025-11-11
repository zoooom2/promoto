import { GoDatabase } from 'react-icons/go';
import { MdAnalytics } from 'react-icons/md';
import { PiNetwork } from 'react-icons/pi';

const GrowthFeatures = () => {
	return (
		<div className='w-full flex flex-col items-center flex-nowrap gap-4'>
			<div className='w-full h-px bg-[rgba(255,255,255,0.1)] overflow-clip'></div>
			<div className='w-full flex justify-center md:justify-between items-center overflow-visible content-center flex-wrap max-promoto-tablet:gap-x-5 max-promoto-tablet:gap-y-2'>
				<div className='flex items-center overflow-visible content-center flex-nowrap gap-2'>
					<span className=' text-promoto-yellow'>
						<GoDatabase size={16} />
					</span>
					<span
						className={`font-hanken whitespace-pre text-promoto-yellow leading-[120%]`}
					>
						Data & integration
					</span>
				</div>
				<div className='flex items-center overflow-visible content-center flex-nowrap gap-2'>
					<span className='text-promoto-yellow'>
						<PiNetwork size={16} />
					</span>
					<span
						className={`font-hanken whitespace-pre text-promoto-yellow leading-[120%]`}
					>
						Journeys
					</span>
				</div>
				<div className='flex items-center overflow-visible content-center flex-nowrap gap-2'>
					<span className=' text-promoto-yellow'>
						<MdAnalytics size={16} />
					</span>
					<span
						className={`font-hanken whitespace-pre text-promoto-yellow leading-[120%]`}
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
