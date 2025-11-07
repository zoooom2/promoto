import { AiFillThunderbolt } from 'react-icons/ai';
import { Progress } from '@/components/ui/progress';
import { hostGrotesk } from '@/app/fonts';

const PersonalizedProgress = () => {
	return (
		<div className='w-[256px] flex justify-center items-center p-2 bg-[#066f41] content-center flex-nowrap gap-2.5 rounded-xl '>
			<div className='w-[17px] text-[14px] text-[#f2ff00]'>
				<AiFillThunderbolt />
			</div>
			<div className='h-2 flex-1'>
				<Progress
					value={Math.floor((6 / 7) * 100)}
					className='[&>div]:bg-[#f2ff00] bg-[rgba(242,255,0,0.3)]'
				/>
			</div>
			<div
				className={`flex justify-center items-center content-center flex-nowrap gap-2.5 ${hostGrotesk.className} text-[14px] whitespace-pre text-[#f2ff00] tracking-[-0.04em] leading-[1.2]`}
			>
				6/7
			</div>
		</div>
	);
};

export default PersonalizedProgress;
