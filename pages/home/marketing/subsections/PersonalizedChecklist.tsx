import { Checkbox } from '@/components/ui/checkbox';
import { hankenGrotesk } from '@/app/fonts';

const PersonalizedChecklist = () => {
	const personalized = [
		'building workflow',
		'Designing Email',
		'Sending Campaign',
	].map((x, i) => (
		<div
			className='w-[256px] flex justify-center items-center content-center flex-nowrap gap-2.5'
			key={i}
		>
			<div className='flex items-center flex-1 bg-white flex-nowrap gap-2 rounded-xl'>
				<div className='py-2 pl-2 pr-4 flex items-center bg-white content-center flex-nowrap gap-2 rounded-xl'>
					<Checkbox />
					<p
						className={`${hankenGrotesk.className} traking-[-0.04em] text-[16px] capitalize`}
					>
						{x}
					</p>
				</div>
			</div>
		</div>
	));

	return personalized;
};

export default PersonalizedChecklist;
